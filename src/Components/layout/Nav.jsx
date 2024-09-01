import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Nav = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(247, 245, 245)",
      }}
    >
      <nav className="navbar p-3">
        <div className="container-fluid">
          <div className="row w-100">
            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <a href="https://x.com/">
                  <FaTwitter style={{ color: "gray" }} />
                </a>
                <a href="https://www.facebook.com/">
                  <FaFacebook style={{ color: "gray" }} />
                </a>
                <a href="https://www.instagram.com/">
                  <FaInstagram style={{ color: "gray" }} />
                </a>
                <a href="https://www.youtube.com/">
                  <FaYoutube style={{ color: "gray" }} />
                </a>
              </div>
            </div>

            <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
              <p className="fw-bold m-0">free shipping on all U.S Order $50+</p>
            </div>

            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end">
              <button
                type="button"
                className="btn me-2"
                data-bs-toggle="button"
              >
                Login{" "}
              </button>
              <button type="button" className="btn btn-dark">
                SignUp{" "}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
