require("dotenv").config();
const UserModel = require("../routes/user/user.model");
const bcrypt = require("bcrypt");
const GenerateToken = require("../middleware/CreateToken");

// Get all users / seperate user data
const GetUsers = async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      let data = await UserModel.findById(id);
      return res.status(200).send(data);
    } else {
      let data = await UserModel.find();
      return res.status(200).send(data);
    }
  } catch (er) {
    return res.status(404).send(er.message);
  }
};

// Login Route
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(403).send("Enter credentials");
  }

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(404).send("User not found");
  }

  try {
    const match = bcrypt.compareSync(password, user.password);

    if (match) {
      // it will create JWT TOKENS and will return it
      const { token, refresh_token } = GenerateToken({
        _id: user._id,
        email: user.email,
        username: user.username,
      });

      return res.status(200).send({
        message: "Login success",
        token,
        refresh_token,
        username: user.username,
        email: user.email,
        id: user._id,
      });
    } else {
      return res.status(401).send({ message: "Authentication Failed" });
    }
  } catch {
    return res.status(401).send({ message: "No User Found" });
  }
};

// Signup Route
const registerUser = async (req, res) => {
  const { email, password, username } = req.body;

  //console.log(req.body)

  if (!email || !password || !username) {
    return res.status(403).send("Enter Credentails");
  }

  try {
    // checking username and email should be unique , also added in schema
    const usernameExsist = await UserModel.findOne({ username });
    const emailExsist = await UserModel.findOne({ email });
    if (usernameExsist || emailExsist)
      return res
        .status(403)
        .send({
          message: "UserName already exist ,try Different UserName or Email",
        });

    bcrypt.hash(password, 6, async function (err, hash) {
      if (err) {
        return res.status(403).send({ message: "Connection has failed" });
      }

      const user = await UserModel({
        email,
        password: hash,
        username,
        tasks: [],
      });

      await user.save();

      // it will create JWT TOKENS and will return it
      const { token, refresh_token } = GenerateToken({
        _id: user._id,
        email: user.email,
        username: user.username,
      });

      return res
        .status(200)
        .send({
          message: "Signup success",
          token,
          refresh_token,
          username,
          id: user._id,
        });
    });
  } catch (er) {
    return res.status(404).send(er.message);
  }
};

// Task
const cartPost = async (req, res) => {
  const { username, image,a, span, price, save } = req.body;
  if (!username) return res.status(403).send("Something went wrong");

  try {
    const cartObj = {image ,a, span, price, save };
    let addData = await UserModel.updateOne(
      { username },
      { $push: { cart: cartObj } }
    );

    return res.status(200).send(addData);
  } catch (er) {
    return res.status(404).send(er.message);
  }
};

module.exports = {
  GetUsers,
  loginUser,
  registerUser,
  cartPost,
};
