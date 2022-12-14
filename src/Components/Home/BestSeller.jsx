import React from 'react'
import  '../../App.css'
import { FaStar } from 'react-icons/fa'
import HoverImage from "react-hover-image";

const BestSeller = ({data, Text}) => {
  console.log(data)
  return (
    <div >
    <h3 className='hc' >{Text}</h3>
      <div className='Apple' >
      {  data.map((el)=>{
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
                <button className='but' >ADD TO CART</button>
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
