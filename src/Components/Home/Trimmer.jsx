import React from 'react'
import  '../../App.css'
import { FaStar } from 'react-icons/fa'

const Trimmer = ({data}) => {
  
   
    return (
        <div>
            <div className='Trimmer'  >
                {data.map((el) => {
                    return (

                        <div>


                            <div key={el.id} className='Trimdiv' >


                                <video
                                    style={{ width: "100%" }}
                                    playsInline
                                    loop
                                    autoPlay
                                    muted

                                    alt="All the devices"
                                    src={el.video}

                                />

                                {/* <HoverImage style={{width:"100%"}} src={el.image} hoverSrc={el.hoverimg} width="100%" /> */}
                                <div className='textdiv' >
                                    <a className='heading' style={{ textAlign: "center",marginTop:"1rem" }}   >{el.name}</a>
                                    <span className='star' style={{ textAlign: "center" }}  >{el.span}</span>
                                    <hr />
                                    <span className='star' style={{ textAlign: "center",display:"flex",alignItems:"center",justifyContent:"center" }} > <FaStar color="red" /> <FaStar color="red" /> <FaStar color="red" /> <FaStar color="red" /> {el.rat}</span>
                                    <span className='price' style={{ textAlign: "center" }}  >₹ {el.spanp} <del className='dell' >₹ {el.del}</del></span>

                                </div>
                            </div>
                            <div className='UpeerDiv'><img style={{width:"100%"}} src={el.upperimage} alt={el.rat} /></div>
                        </div>


                    )
                })}
            </div>
        </div>
    )
}

export default Trimmer


