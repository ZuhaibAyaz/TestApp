import React from 'react'

function Cards(props) {
  return (
    <div className="card-container">
  <div className="card" >

  <img src= {props.image} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">  {props.title}</h5>
    <h6> ₹{props.subtitle}</h6>
    <p className="card-text">{props.desc}</p>
    
  </div>
</div>


    </div>
  )
}

export default Cards