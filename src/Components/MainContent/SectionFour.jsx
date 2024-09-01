import React from "react";
import one from "../../images/one.png";
import two from "../../images/tow.png";
import three from "../../images/three.png";
import four from "../../images/four.png";
import five from "../../images/faive.png";
import six from "../../images/six.png";
import seven from "../../images/seven.png";
import eight from "../../images/tiht.png";

const products = [
  {
    image: one,
    name: "Zone Sweatshirt",
    price: "$19.95 – $159.95",
    labels: ["Hot"],
  },
  {
    image: two,
    name: "Zoo Men's t-shirt",
    price: "$14.95 – $119.95",
    labels: [],
  },
  {
    image: three,
    name: "Toddler T-shirt",
    price: "$26.00",
    labels: [],
  },
  {
    image: four,
    name: "Fine Jersey",
    price: "$28.00",
    oldPrice: "$31.00",
    labels: ["Hot", "-10%"],
  },
  {
    image: five,
    name: "Kids Hoodie",
    price: "$26.00 – $29.00",
    labels: ["Sale", "New"],
  },
  {
    image: six,
    name: "Youth Short Sleeve",
    price: "$26.00 – $29.00",
    labels: ["Sale", "New"],
  },
  {
    image: seven,
    name: "Midweight Cotton",
    price: "$26.00 – $29.00",
    labels: [],
  },
  {
    image: eight,
    name: "Hooded Sweatshirt",
    price: "$28.00",
    labels: ["Hot"],
  },
];

const SectionFour = () => {
  return (
    <div className="container">
      <div className="text-center mb-4">
        <h1>Featured Products</h1>
        <p>This is the fourth section.</p>
      </div>
      <div className="row g-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center "
            style={{ position: "relative" }}
          >
            {/* Labels */}
            {product.labels.length > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "0.8rem",
                  left: "2rem",
                }}
              >
                {product.labels.map((label, idx) => (
                  <span
                    key={idx}
                    className={`badge me-1 ${
                      label === "Hot"
                        ? "bg-warning"
                        : label === "Sale"
                        ? "bg-success"
                        : label === "New"
                        ? "bg-info"
                        : "bg-success"
                    }`}
                    style={{
                      fontSize: "0.8rem",
                      marginBottom: "4px",
                      display: "flex",
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            )}
            <img
              src={product.image}
              alt={`Product ${index + 1}`}
              className="img-fluid mb-2"
            />
            <h4>{product.name}</h4>
            <h5 className={product.oldPrice ? "text-danger" : ""}>
              {product.price}
            </h5>
            {product.oldPrice && (
              <h6 className="text-muted text-decoration-line-through">
                {product.oldPrice}
              </h6>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFour;
