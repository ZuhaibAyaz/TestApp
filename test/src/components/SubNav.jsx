import React from 'react'
import {Link} from "react-router-dom";

function SubNav() {
  return (
    <div>
<nav class="navbar   navbar-expand-lg bg-body-tertiary bg-secondary border-bottom border-bottom-dark" data-bs-theme="secodary">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0  ms-auto">
        <li class="nav-item ">
          <Link class="nav-link " aria-current="page" to="/bestseller">Bestsellers</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">Mobiles</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">New Releases</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/electronics">Electronics</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">Home & Kitchen</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">Discounts</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">Customer Service</Link>
        </li>
       
        
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}

export default SubNav