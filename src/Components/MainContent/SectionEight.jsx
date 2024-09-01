import React from "react";
import Card from "react-bootstrap/Card";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const SectionEight = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "#B479D926" }}>
      <div>
        <h2>Simple pricing for every one</h2>
        <p>Choose a plan and get started</p>
      </div>
      <div
        className="px-3  py-3 rounded-4"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <Card
          className="px-3 bg-white py-3 rounded-4 border border-1 border-light shadow"
          style={{ width: "22rem" }}
        >
          <Card.Header className="bg-white">
            <h3 style={{ marginTop: "1rem" }}>Personal</h3>
            <strong class="h1 d-block my-5">
              $12.99 <span class="text-muted h4">/user</span>
            </strong>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <ul className="list-unstyled">
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "0.5rem",
                  }}
                >
                  <IoCheckmarkCircleOutline
                    className="text-success"
                    style={{
                      borderRadius: "50%",
                      fontSize: "2rem",
                      backgroundColor: "#11b1969d",
                    }}
                  />
                  Free licensed icons
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "0.5rem",
                  }}
                >
                  <IoCheckmarkCircleOutline
                    className="text-success"
                    style={{
                      borderRadius: "50%",
                      fontSize: "2rem",
                      backgroundColor: "#11b1969d",
                    }}
                  />
                  Fast and free standard shipping{" "}
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "0.5rem",
                  }}
                >
                  <IoCheckmarkCircleOutline
                    className="text-success"
                    style={{
                      borderRadius: "50%",
                      fontSize: "2rem",
                      backgroundColor: "#11b1969d",
                    }}
                  />
                  No credit card required{" "}
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "0.5rem",
                  }}
                >
                  <IoCheckmarkCircleOutline
                    className="text-success"
                    style={{
                      borderRadius: "50%",
                      fontSize: "2rem",
                      backgroundColor: "#11b1969d",
                    }}
                  />
                  Friendly supports
                </li>
              </ul>
            </Card.Text>
            <button
              style={{ backgroundColor: "#2EBB771A" }}
              className="btn  mt-5"
            >
              {" "}
              Get Started
            </button>
          </Card.Body>
        </Card>

        <Card
          className="px-3 bg-white py-3 rounded-4 border border-1 border-light shadow"
          style={{ width: "22rem" }}
        >
          <Card.Header className="bg-white">
            <h3 style={{ marginTop: "1rem" }}>Professional</h3>
            <strong class="h1 d-block my-5">
              $99.99<span class="text-muted h4">/teamr</span>
            </strong>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <ul className="list-unstyled">
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "0.5rem",
                  }}
                >
                  <IoCheckmarkCircleOutline
                    className="text-success"
                    style={{
                      borderRadius: "50%",
                      fontSize: "2rem",
                      backgroundColor: "#11b1969d",
                    }}
                  />
                  Full access to all features{" "}
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "0.5rem",
                  }}
                >
                  <IoCheckmarkCircleOutline
                    className="text-success"
                    style={{
                      borderRadius: "50%",
                      fontSize: "2rem",
                      backgroundColor: "#11b1969d",
                    }}
                  />
                  Fast and free standard shipping{" "}
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "0.5rem",
                  }}
                >
                  <IoCheckmarkCircleOutline
                    className="text-success"
                    style={{
                      borderRadius: "50%",
                      fontSize: "2rem",
                      backgroundColor: "#11b1969d",
                    }}
                  />
                  No credit card required{" "}
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "0.5rem",
                  }}
                >
                  <IoCheckmarkCircleOutline
                    className="text-success"
                    style={{
                      borderRadius: "50%",
                      fontSize: "2rem",
                      backgroundColor: "#11b1969d",
                    }}
                  />
                  Use on unlimited projects
                </li>

                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "0.5rem",
                  }}
                >
                  <IoCheckmarkCircleOutline
                    className="text-success"
                    style={{
                      borderRadius: "50%",
                      fontSize: "2rem",
                      backgroundColor: "#11b1969d",
                    }}
                  />
                  Team collaboration feature.
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "0.5rem",
                  }}
                >
                  <IoCheckmarkCircleOutline
                    className="text-success"
                    style={{
                      borderRadius: "50%",
                      fontSize: "2rem",
                      backgroundColor: "#11b1969d",
                    }}
                  />
                  Friendly supports
                </li>
              </ul>
            </Card.Text>
            <button className="btn btn-success  mt-5"> Get Started</button>
          </Card.Body>
        </Card>

        <Card
          className="px-3 bg-white py-3 rounded-4 border border-1 border-light shadow"
          style={{ width: "22rem" }}
        >
          <Card.Header className="bg-white">
            <h3 style={{ marginTop: "1rem" }}>Enterprise</h3>
            <strong class="h1 d-block my-5">
              $99.99 <span class="text-muted h4">/team</span>
            </strong>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <ul className="list-unstyled">
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "0.5rem",
                  }}
                >
                  <IoCheckmarkCircleOutline
                    className="text-success"
                    style={{
                      borderRadius: "50%",
                      fontSize: "2rem",
                      backgroundColor: "#11b1969d",
                    }}
                  />
                  All features in Pro Plan.
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "0.5rem",
                  }}
                >
                  <IoCheckmarkCircleOutline
                    className="text-success"
                    style={{
                      borderRadius: "50%",
                      fontSize: "2rem",
                      backgroundColor: "#11b1969d",
                    }}
                  />
                  Use on unlimited projects{" "}
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "0.5rem",
                  }}
                >
                  <IoCheckmarkCircleOutline
                    className="text-success"
                    style={{
                      borderRadius: "50%",
                      fontSize: "2rem",
                      backgroundColor: "#11b1969d",
                    }}
                  />
                  Team collaboration feature.
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "0.5rem",
                  }}
                >
                  <IoCheckmarkCircleOutline
                    className="text-success"
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "#11b1969d",
                      fontSize: "2rem",
                    }}
                  />
                  Friendly supports
                </li>
              </ul>
            </Card.Text>
            <button
              style={{ backgroundColor: "#2EBB771A" }}
              className="btn  mt-5"
            >
              {" "}
              Get Started
            </button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SectionEight;
