import React from "react";
import img1 from "../../images/banner-43.png";
import img2 from "../../images/banner-46.png";
import img3 from "../../images/banner-44.png";
import img4 from "../../images/banner-45.png";

const ThirdSection = () => {
  return (
    <div className="container my-5">
      <div className="row g-4">
        <div className="col-md-3">
          <div
            className="position-relative rounded overflow-hidden"
            style={{
              backgroundImage: `url(${img1})`,
              height: "300px",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          >
            <button
              type="button"
              className="btn btn-light position-absolute bottom-0 start-50 translate-middle-x mb-4"
            >
              Shop Hoodies
            </button>
          </div>
          <div
            className="position-relative rounded overflow-hidden mt-4"
            style={{
              backgroundImage: `url(${img2})`,
              height: "300px",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          >
            <button
              type="button"
              className="btn btn-light position-absolute bottom-0 start-50 translate-middle-x mb-4"
            >
              Shop Tanktop
            </button>
          </div>
        </div>

        <div className="col-md-6">
          <div
            className="d-none d-md-block position-relative rounded overflow-hidden"
            style={{
              backgroundImage: `url(${img3})`,
              height: "100%",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          >
            <button
              type="button"
              className="btn btn-light position-absolute bottom-0 start-50 translate-middle-x mb-4"
            >
              Shop T-Shirt
            </button>
          </div>
          <div
            className="d-block d-md-none position-relative rounded overflow-hidden"
            style={{
              backgroundImage: `url(${img3})`,
              height: "300px",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          >
            <button
              type="button"
              className="btn btn-light position-absolute bottom-0 start-50 translate-middle-x mb-4"
            >
              Shop T-Shirt
            </button>
          </div>
        </div>

        <div className="col-md-3">
          <div
            className="position-relative rounded overflow-hidden"
            style={{
              backgroundImage: `url(${img4})`,
              height: "300px",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          >
            <button
              type="button"
              className="btn btn-light position-absolute bottom-0 start-50 translate-middle-x mb-4"
            >
              Shop Sweater
            </button>
          </div>
          <div
            className="position-relative rounded overflow-hidden mt-4"
            style={{
              backgroundImage: `url(${img2})`,
              height: "300px",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          >
            <button
              type="button"
              className="btn btn-light position-absolute bottom-0 start-50 translate-middle-x mb-4"
            >
              Shop Designer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
