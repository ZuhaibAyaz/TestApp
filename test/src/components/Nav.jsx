import React from 'react'
import {Link} from "react-router-dom";

function Nav() {
  return (
   <section>
    <nav className="navbar navbar-expand-lg bg-body-tertiary  bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand font-weight-bold" to="/">Shopy</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav  ms-auto ">
        <li className="nav-item">
          <Link class="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/premium">Premium</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/order">Orders</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/account">Account</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Cart</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
</section>

  )
}

export default Nav