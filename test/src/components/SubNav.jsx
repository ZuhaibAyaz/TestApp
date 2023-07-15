import React from 'react'

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
          <a class="nav-link " aria-current="page" href="#">Bestsellers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Mobiles</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">New Releases</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Electronics</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Home & Kitchen</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Discounts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Customer Service</a>
        </li>
       
        
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}

export default SubNav