import { Button, ChakraProvider ,Modal,ModalBody,ModalCloseButton,ModalContent,ModalFooter,ModalHeader,ModalOverlay,Text, useDisclosure} from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Progressbar.css'
const Progressbar = () => {
  const[scrollTop,setScrollTop]=useState(0)


  const onScroll=()=>{
  const winscroll=document.documentElement.scrollTop;
  const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

  const scrolled=(winscroll/height)*100;

  setScrollTop(scrolled)
}

useEffect(()=>{
  window.addEventListener("scroll",onScroll)

  return()=>window.removeEventListener("scroll",onScroll)
},[])
   
  return (
    
    <div className='progressMainWrapper'>
    <div
    className='progressMainStyle' style={{width:`${scrollTop}%`}}></div>

</div>
   
  )
}

export default Progressbar
