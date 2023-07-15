import React from "react";
import {Link} from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer className="bg-dark text-white pt-5 pb-4">
        <div className="container text-center text-md-left">
          <div className=" row  text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase  mb-4 font-weight-bold text-warning">
               
                Shopy
              </h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                quia culpa est odio placeat cupiditate esse molestiae reiciendis
                corrupti, ratione adipisci architecto illum consequuntur
                eligendi qui ut ducimus dicta animi.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase  mb-4 font-weight-bold text-warning">
                Products
              </h5>
              <p>
              <Link className="text-white link" to="">Electronics</Link>
              </p>
              <p>
                <Link className="text-white link">Toys</Link>
              </p>
              <p>
                <Link className="text-white link">Mobile Devices</Link>
              </p>
              <p>
                <Link className="text-white link">Kitchen Accessories</Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase  mb-4 font-weight-bold text-warning">
                Useful Links
              </h5>
              <p>
                <Link className="text-white link">Your Account</Link>
              </p>
              <p>
                <Link className="text-white link">Become Affiliate</Link>
              </p>
              <p>
                <Link className="text-white link">Shipping</Link>
              </p>
              <p>
                <Link className="text-white link">Help</Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase  mb-4 font-weight-bold text-warning">
                Contacts
              </h5>

              <address>
                <div>
                  <p>Lucknow,India</p>
                </div>

                <div>
                  <p>
                    <Link className="link text-white">+91 9876543210</Link>
                  </p>
                </div>

                <div>
                  <p>
                    <Link className="link  text-white">practice1@gmail.com</Link>
                  </p>
                </div>
              </address>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
