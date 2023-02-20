const { Schema, model } = require('mongoose')

const UserSchema = new Schema({

    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    cart : { type : Array},
    orders : { type : Array}

}, { versionKey: false })

const UserModel = model("user", UserSchema)
module.exports = UserModel
