import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Master from './Master';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Nav>
  </Nav>
 <Master></Master>
  </React.StrictMode>
);

