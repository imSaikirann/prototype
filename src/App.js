import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router
import Home from './components/Home';


import Custum from './components/Custum';
import Top from "./components/Top"
import Navbar from './components/Navbar';
import Fabric from './components/Fabric';


function App() {
  return (
    <ChakraProvider>
    
      <Router> {/* Wrap your components with Router */}
      <Top></Top>
<Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/customize' element={<Custum />} />
          <Route path='/fab' element={<Fabric/>}></Route>
        </Routes>
     
      </Router>

    </ChakraProvider>
  );
}

export default App;
