import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Master from './Master';
import Footer from './components/Footer';
import Premium from './Premium';
import Account from './Account';
import Bestseller from './Bestseller';
import Order from './Order';
import Electronics from './Electronics';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
<Nav>  </Nav>
      <Routes>
      
        <Route path="/" element={ <Master/> } />
        <Route path="/premium" element={<Premium/>}></Route>
        <Route path="/order" element={<Order/>}></Route>
        <Route path="/account" element={<Account/>}></Route>
        <Route path="/bestseller" element={<Bestseller/>}></Route>
        <Route path="/electronics" element={<Electronics/>}></Route>
      
      </Routes>
      <Footer></Footer>
    </BrowserRouter>


  
 
 
  </React.StrictMode>
);

