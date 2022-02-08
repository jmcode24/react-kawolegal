import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header'
import Home from '../pages/Home';
import Startups from '../pages/Startups';
import Register  from '../pages/Register';
import Login from '../pages/Login';

function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/startups' element={<Startups />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;