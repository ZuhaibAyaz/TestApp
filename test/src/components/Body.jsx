import React from "react";
import Slider from "./Slider";
import SubNav from "./SubNav";
import Cards from "./Cards";

function Body() {
  return (
    <div>
      <SubNav></SubNav>
      <Slider></Slider>

      <div class="container text-center ">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm">
            <Cards/>
          </div>
          <div class="col-lg-4 col-md-6 col-sm">
            
            <Cards/>
          </div>
          <div class="col-lg-4 col-md-6 col-sm">
            
            <Cards/>
          </div>
          <div class="col-lg-4 col-md-6 col-sm">
            <Cards/>
          </div>
          <div class="col-lg-4 col-md-6 col-sm">
            
            <Cards/>
          </div>
          <div class="col-lg-4 col-md-6 col-sm">
            
            <Cards/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
