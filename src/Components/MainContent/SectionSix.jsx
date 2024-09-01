import React from "react";
import pone from "../../images/pone.jpg";
import quality from "../../images/quality.jpg";
import shirts from "../../images/shirts.jpg";

const SectionSix = () => {
  return (
    <div className="container mt-3 mb-5">
      <div className="text-center mb-5">
        <h1>T-shirt printing made easy.</h1>
        <p>Let us show you how your product comes to life.</p>
      </div>

      <div className="row gy-4">
        {/* Card one */}
        <div className="col-12 col-lg-4">
          <div
            className="d-flex flex-column justify-content-end text-center text-lg-start"
            style={{
              backgroundImage: `url(${quality})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "350px",
              position: "relative",
              padding: "1rem",
              borderRadius: "1rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "0",
                width: "100%",
                padding: "1rem",
                marginTop: "1rem",
              }}
            >
              <h4>Premium quality shirts</h4>
              <p>
                Lorem ipsum det, radipiscing elit duis necfringi det, consec
                tetur adipiscing e
              </p>
            </div>
          </div>
        </div>

        {/* Card two */}
        <div className="col-12 col-lg-4">
          <div
            className="d-flex flex-column justify-content-end text-center text-lg-start"
            style={{
              backgroundImage: `url(${pone})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "350px",
              position: "relative",
              padding: "1rem",
              borderRadius: "1rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "0",
                width: "100%",
                padding: "1rem",
                marginTop: "1rem",
              }}
            >
              <h4>Premium quality shirts</h4>
              <p>
                Lorem ipsum det, radipiscing elit duis necfringi det, consec
                tetur adipiscing e
              </p>
            </div>
          </div>
        </div>

        {/* Card three */}
        <div className="col-12 col-lg-4">
          <div
            className="d-flex flex-column justify-content-end text-center text-lg-start"
            style={{
              backgroundImage: `url(${shirts})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "350px",
              position: "relative",
              padding: "1rem",
              borderRadius: "1rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "0",
                width: "100%",
                padding: "1rem",
                marginTop: "1rem",
              }}
            >
              <h4>Premium quality shirts</h4>
              <p>
                Lorem ipsum det, radipiscing elit duis necfringi det, consec
                tetur adipiscing e
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
