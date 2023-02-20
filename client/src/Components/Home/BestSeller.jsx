import React, { useEffect, useState } from 'react'
import  '../../App.css'
import { FaStar } from 'react-icons/fa'
import HoverImage from "react-hover-image";
import { useDispatch, useSelector } from 'react-redux';
import { cartData, postCartData } from '../../redux/cart/cart.action';
 import { toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

 import { useNavigate } from "react-router-dom";
const BestSeller = ({data, Text}) => {
  const{id,username}=useSelector((state)=>state.user);
  const{cart}=useSelector((state)=>state.cart);
  const dispatch=useDispatch();
  const Navigate=useNavigate();
const [addtocart,setAddtocart]=useState(false)




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
  console.log(cartItem,"ccc")
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
      <div className='Apple' >
      {  data?.map((el)=>{
            return(
                <>
                    
                <div  key={el.id}  className='insidediv' >
                <HoverImage style={{width:"100%"}} src={el.image} hoverSrc={el.hoverimg} width="100%" />
                <div    className='textdiv' >
                <p className='heading'  >{el.a}</p> 
                <span  className='star' > <span style={{color:"red"}}>★</span> {el.span}</span> 
                <hr />
                <span className='price' >₹ {el.price} <del className='dell' >₹ {el.del}</del></span> 
                <p className='save'>{el.save}</p>
               { addtocart ? <button className='butn' onClick={()=>Navigate('/cart')} >GO TO CART</button>: <button className='but' onClick={()=>{addTocart(el)}} >ADD TO CART</button>}
                </div>
                </div>
                
                </>
            )
        })}
      </div>
    </div>
  )
}

export default BestSeller
