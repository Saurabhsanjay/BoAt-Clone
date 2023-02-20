import React, { useEffect } from 'react'
import  '../../App.css'
import { FaStar } from 'react-icons/fa'
import HoverImage from "react-hover-image";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartData, postCartData } from '../../redux/cart/cart.action';
 import { toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

const Marvel = ({ data, Text }) => {
    let MarvelData = data?.Marvel
    let DcData = data?.Dc
    const [main, Setmain] = useState(DcData)




   

    const handleDCData = (el) => {
        el ? Setmain([...el]) : Setmain(main)
    }

    const handleMARVELData = (el) => {
        el ? Setmain([...el]) : Setmain(main)
    }


    useEffect(() => {

    }, [main])



    console.log(main)
      const {id, username } = useSelector((state) => state.user);
      const dispatch = useDispatch();
      const Navigate = useNavigate();
      const handleNeedtoLoginfirst = () => {
        toast.error("You need to Login First", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setTimeout(() => {
          Navigate("/login");
        }, 1000);
      };
       const { cart } = useSelector((state) => state.cart);
       const [addtocart, setAddtocart] = useState(false);
       const handleAddedtoCart = () => {
         toast.success("Added To Cart", {
           position: "top-center",
           autoClose: 3000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "light",
         });
       };
    const addTocart = (el) => {
      const cartItem = cart?.cart.find((item) => item.a === el.a);
      console.log(cartItem, "ccc");
      if (cartItem) {
        setAddtocart(true);
        toast.error("Already In Cart", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        dispatch(
          postCartData(
            { username, ...el },
            handleNeedtoLoginfirst,
            handleAddedtoCart
          )
        );
        cartData(id);
        console.log({ username, ...el });
      }
    };


    return (
        <div >
            <h3 className='hc' >{Text}</h3>
            <div id="dataBar">



                <button className='red' onClick={() => handleDCData(DcData)}
              

                >
                    DC
                </button>

                <button className='red'
                    onClick={() => handleMARVELData(MarvelData)}
               
                >
                    Marvel
                </button>

               
            </div>
            
            <div className='Apple' >
                {main?.map((el) => {
                    return (
                      <div key={el.id}>
                        <div key={el.id} className="insidediv">
                          <img
                            style={{ width: "100%" }}
                            src={el.image}
                            width="100%"
                          />
                          <div className="textdiv">
                            <p className="heading">{el.a}</p>
                            <span className="star">
                              {" "}
                              <span style={{ color: "red" }}>★</span> {el.span}
                            </span>
                            <hr />
                            <span className="price">
                              ₹ {el.price}{" "}
                              <del className="dell">₹ {el.del}</del>
                            </span>
                            <p className="save">{el.save}</p>
                            {addtocart ? (
                              <button
                                className="butn"
                                onClick={() => Navigate("/cart")}
                              >
                                GO TO CART
                              </button>
                            ) : (
                              <button
                                className="but"
                                onClick={() => {
                                  addTocart(el);
                                }}
                              >
                                ADD TO CART
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Marvel
