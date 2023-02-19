

import { ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import Footer from './Components/Footer';
// import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/Routes/AllRoutes';

import Progressbar from './Components/Pages/Progressbar';
import { ToastContainer } from 'react-toastify';

function App() {
//   const[loading,setLoading]=useState(true)

// useEffect(()=>{
//   setTimeout(() => {
//     setLoading(false)
//   }, 2000);
// },[])


  // if(loading){
  //   return (
  //     <div style={{ textAlign:"center",margin:"auto",marginTop:"15%"}}>
  //       <img width="80px"  src={loader} alt="" />
  //     </div>
  //   )
  // }
  return (
    <div className="App">
      <ToastContainer />
      <Progressbar />
      <Navbar />

      <AllRoutes />
      {/* <Home/> */}
      <ChakraProvider>
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;


// npm i react-hover-image
