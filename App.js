import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route } from 'react-router-dom';
import Navbar from './MultiPage website/Navbar';
import Home from './MultiPage website/Home';
import About from './MultiPage website/About';
import Services from './MultiPage website/Services';
import Contact from './MultiPage website/Contact';
const App = () => {

    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} >  </Route>
                <Route path='/About' element={<About />} >  </Route>
                <Route path='/Services' element={<Services />} >  </Route>
                <Route path='/Contact' element={<Contact />} >  </Route>

            </Routes>
        </>
    )
}

export default App