import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router
import Home from './components/Home';

import Custum from './components/Custum';
import Top from "./components/Top"
import Navbar from './components/Navbar';

function App() {
  return (
    <ChakraProvider>
      <Top></Top>
<Navbar/>
      <Router> {/* Wrap your components with Router */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/customize' element={<Custum />} />
         
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
