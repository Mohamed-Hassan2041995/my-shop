import React from "react";
import { FaShoppingBasket } from "react-icons/fa";

const SecondSection = () => {
  return (
    <div className="container mt-5" style={{ marginBottom: "100px" }}>
      <div className="row text-left">
        <div className="col-md-4 mb-4 d-flex justify-content-between align-items-center">
          <FaShoppingBasket className="text-success" fontSize={"3rem"} />
          <div style={{ textAlign: "left" }}>
            <h4>Top quality</h4>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur <br />
              elit. Mollitia dolore repellendus.
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-4 d-flex justify-content-between align-items-center">
          <FaShoppingBasket className="text-success" fontSize={"3rem"} />
          <div style={{ textAlign: "left" }}>
            <h4>Top quality</h4>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur <br />
              elit. Mollitia dolore repellendus.
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-4 d-flex justify-content-between align-items-center">
          <FaShoppingBasket className="text-success" fontSize={"3rem"} />
          <div style={{ textAlign: "left" }}>
            <h4>Top quality</h4>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur <br />
              elit. Mollitia dolore repellendus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
