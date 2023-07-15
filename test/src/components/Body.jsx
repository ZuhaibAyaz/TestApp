import React from "react";
import Slider from "./Slider";

import Cards from "./Cards";

function Body() {
  return (
    <div>
      
      <Slider></Slider>

      <div class="container text-center ">
        
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm">
            <Cards title="Mobile Charger" subtitle="899" desc="Fast Charging" image="https://images2.imgbox.com/1f/92/8Ki7hMAd_o.jpg" />
          </div>

          <div class="col-lg-4 col-md-6 col-sm">
            <Cards title="Mobile Cover" subtitle="199" desc="Designer Case" image="https://images2.imgbox.com/a0/4a/8Dax1e0D_o.jpg" />
          </div>
          <div class="col-lg-4 col-md-6 col-sm">
            
            <Cards title="Gaming Monitor" subtitle="6999" desc="SAMSUNG" image="https://images2.imgbox.com/df/00/505Q1z6a_o.jpg"/>
          </div>
          <div class="col-lg-4 col-md-6 col-sm">
            <Cards title="Powerbank" subtitle="799" desc="Fast Charging" image="https://images2.imgbox.com/79/09/ws8GlhxC_o.jpg"/>
          </div>
          <div class="col-lg-4 col-md-6 col-sm">
            
            <Cards title="Laptop Skin" subtitle="199" desc="Stylish Designs" image="https://images2.imgbox.com/98/41/9uz167p3_o.jpg"/>
          </div>
          <div class="col-lg-4 col-md-6 col-sm">
            
            <Cards title="Watch" subtitle="1299" desc="Noise" image="https://images2.imgbox.com/7f/c9/NTG8BN2K_o.jpg"/>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Body;
