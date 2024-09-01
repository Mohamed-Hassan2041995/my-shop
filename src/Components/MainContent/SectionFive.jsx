import React from "react";
import steps from "../../images/steps.png";

const SectionFive = () => {
  return (
    <div className="bg-light py-5">
      <div className="text-center mb-5">
        <h1>T-shirt printing made easy.</h1>
        <h5>Let us show you how your product comes to life.</h5>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 order-lg-2 text-center text-lg-left mb-4 mb-lg-0">
            <img src={steps} alt="Steps" className="img-fluid" />
          </div>
          <div className="col-12 col-lg-6 order-lg-1">
            <div className="d-flex flex-column gap-4">
              {/* Step 1 */}
              <div className="d-flex align-items-center gap-3">
                <span
                  className="badge badge-pill badge-light text-success border border-success rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "3.2rem",
                    height: "3rem",
                    fontSize: "1.25rem",
                  }}
                >
                  1
                </span>
                <h5 className="mb-0">
                  Choose from 42 custom products in our catalog
                </h5>
              </div>
              {/* Step 2 */}
              <div className="d-flex align-items-center gap-3">
                <span
                  className="badge badge-pill badge-light text-success border border-success rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "3.8rem",
                    height: "3rem",
                    fontSize: "1.25rem",
                  }}
                >
                  2
                </span>
                <h5 className="mb-0">
                  Customize your design with graphics, text or your own uploaded
                  images.
                </h5>
              </div>
              {/* Step 3 */}
              <div className="d-flex align-items-center gap-3">
                <span
                  className="badge badge-pill badge-light text-success border border-success rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "3.8rem",
                    height: "3rem",
                    fontSize: "1.25rem",
                  }}
                >
                  3
                </span>
                <h5 className="mb-0">
                  Order prints by selecting your preferred T-shirt size, style,
                  and quantity.
                </h5>
              </div>
              {/* Step 4 */}
              <div className="d-flex align-items-center gap-3">
                <span
                  className="badge badge-pill badge-light text-success border border-success rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "3.8rem",
                    height: "3rem",
                    fontSize: "1.25rem",
                  }}
                >
                  4
                </span>
                <h5 className="mb-0">
                  Get your order sent to your door with free standard shipping
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
