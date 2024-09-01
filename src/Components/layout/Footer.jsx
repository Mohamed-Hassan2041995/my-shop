import React from "react";
import logo from "../../images/Logo.png";
import footer from "../../images/footer.png";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#F5F5F5" }}>
      <div className="container text-center py-5 mt-5">
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4 ">
            <ul className="list-unstyled">
              <li>
                <img src={logo} alt="" width={200} height={50} />
              </li>
              <li>hello@minaspace.io</li>
              <li style={{ color: "black", fontWeight: "800" }}>
                +02 036 038 3996
              </li>
              <li>3665 Paseo Place, Suite 0960</li>
              <li>San Diego, CA 92101</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <ul className="list-unstyled">
              <li className="h5 fs-5">Information</li>
              <li>About us</li>
              <li>Our Blog</li>
              <li>Start a Return</li>
              <li>Contact Us</li>
              <li>Shipping FAQ</li>
            </ul>
          </div>
          {/* <!-- Make this section order before Newsletter on small screens --> */}
          <div className="col-md-3 col-sm-6 mb-4 order-sm-1 order-md-3">
            <ul className="list-unstyled">
              <li className="h5 fs-5">Useful links</li>
              <li>My Account</li>
              <li>Print Provider</li>
              <li>Become a Partner</li>
              <li>Custom Products</li>
              <li>Make your own shirt</li>
            </ul>
          </div>
          {/* <!-- Make this section order after Useful links on small screens --> */}
          <div className="col-md-3 col-sm-6 mb-4 order-sm-2 order-md-4">
            <ul className="list-unstyled">
              <li className="h5 fs-5">Newsletter</li>
              <li className="py-3">
                Get the latest news, events & more delivered to your inbox.
              </li>
              <li>
                <input
                  type="text"
                  placeholder="Your email address"
                  className="form-control w-100"
                />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img src={footer} alt="" width={"100%"} height={50} />
          <p className="text-center text-muted py-4">
            © 2022 MinaSpace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
