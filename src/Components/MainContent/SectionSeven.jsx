import React from "react";
import labtop from "../../images/labtop.png";

const SectionSeven = () => {
  return (
    <div className="container">
      <div
        className="bg-light p-5 d-flex justify-content-center align-items-center position-relative"
        style={{ overflow: "hidden", minHeight: "80vh" }}
      >
        <div
          className="position-absolute rounded-circle"
          style={{
            width: "250px",
            height: "250px",
            backgroundColor: "hsla(151, 61%, 46%, 0.6)",
            left: "-6rem",
            top: "67%",
            zIndex: 1,
          }}
        ></div>
        <div
          className="position-absolute rounded-circle"
          style={{
            width: "45px",
            height: "45px",
            backgroundColor: "hsla(151, 61%, 46%, 0.6)",
            left: "48%",
            top: "50%",
            zIndex: 1,
          }}
        ></div>

        <div
          className="d-flex flex-column flex-lg-row align-items-center"
          style={{ zIndex: 2 }}
        >
          <div className="order-lg-1 text-center text-lg-start mb-4 mb-lg-0 ms-lg-4">
            <img
              src={labtop}
              alt="labtop"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="order-lg-2 text-center text-lg-start">
            <h2 className="fw-bold">
              10,000+ of free images, icons, and graphics
            </h2>
            <h5 className="mt-4">You’ve got the ideas, we’ve got the tools</h5>
            <button className="btn btn-success btn-lg mt-3">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
