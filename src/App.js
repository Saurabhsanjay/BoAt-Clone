

import { ChakraProvider } from '@chakra-ui/react';
import Footer from './Components/Footer';
// import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/Routes/AllRoutes';

function App() {
  return (
    <div className="App">
    <Navbar/>

    <AllRoutes/>
      {/* <Home/> */}
      <ChakraProvider>

      <Footer/>
      </ChakraProvider>
    </div>
  );
}

export default App;


// npm i react-hover-image
