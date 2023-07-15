import React from 'react'

function Slider() {
  return (
    <div className="container-crousel">
 <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/b0c1cdd1036fb905.png?q=50" class="d-block w-100 " alt=""/>
    </div>
    <div class="carousel-item">
      <img src=  "https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/cb07c0f0b153ba95.jpg?q=50"class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src= "https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/b086f75214cff988.jpg?q=50" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src= "https://rukminim2.flixcart.com/fk-p-flap/844/140/image/64052861692b9bff.jpg?q=50" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}

export default Slider