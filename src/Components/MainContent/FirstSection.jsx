import React from "react";
import bg1 from "../../images/banner-41.png";
import bg2 from "../../images/banner-42.png";

const FirstSection = () => {
  return (
    <div className="container-fluid px-0" style={{ overflowX: "hidden" }}>
      <div className="row g-1">
        {/* First section */}
        <div className="col-12 col-md-6 position-relative">
          <div
            className="w-100 d-flex align-items-end p-3 text-secondary"
            style={{
              backgroundImage: `url(${bg1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "60vh",
              minHeight: "60vh",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "2rem",
                width: "35%",
                maxWidth: "400px",
              }}
              className="text-center text-md-start"
            >
              <h3 className="text-black">T-shirt printing made easy.</h3>
              <p>Create your design for your online business</p>
              <button type="button" className="btn btn-success mt-2">
                Create a T-Shirt
              </button>
            </div>
          </div>
        </div>

        {/* Second section */}
        <div className="col-12 col-md-6 position-relative">
          <div
            className="w-100 d-flex align-items-end p-3 text-secondary"
            style={{
              backgroundImage: `url(${bg2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "60vh",
              minHeight: "60vh",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "2rem",
                width: "35%",
                maxWidth: "400px",
              }}
              className="text-center text-md-start"
            >
              <h3 className="text-black">T-shirt printing made easy.</h3>
              <p>Create your design for your online business</p>
              <button type="button" className="btn btn-success mt-2">
                Create a T-Shirt
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
