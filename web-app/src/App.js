import React from 'react';
import './App.css';
import Home from './pages/CustomerSide/Home';
import Cars from './pages/CustomerSide/Cars';
import Services from './pages/CustomerSide/Services';
import Contact from './pages/CustomerSide/Contact';
import About from './pages/CustomerSide/About';
import SignIn from './pages/CustomerSide/SignIn';
import SignUp from './pages/CustomerSide/SignUp';
import AdminDashboard from './pages/ManagementSide/AdminDashboard';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/*CUSTOMER SIDE*/}
          <Route exact path="/" element={<Home />} />
          <Route path="/Cars" element={<Cars />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />

          {/*ADMIN SIDE*/}
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
