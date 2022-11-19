import React, { useEffect } from 'react'
import  '../../App.css'
import { FaStar } from 'react-icons/fa'
import HoverImage from "react-hover-image";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from 'react';


const Marvel = ({ data, Text }) => {
    let MarvelData = data.Marvel
    let DcData = data.Dc
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
                {main.map((el) => {
                    return (
                        <>

                            <div key={el.id} className='insidediv' >
                                <img style={{ width: "100%" }} src={el.image} width="100%" />
                                <div className='textdiv' >
                                    <a className='heading'  >{el.a}</a>
                                    <span className='star' > <FaStar color="red" />{el.span}</span>
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

export default Marvel
