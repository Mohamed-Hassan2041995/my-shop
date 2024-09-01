import React from "react";
import Card from "react-bootstrap/Card";
import People_2 from "../../images/People_2.png";
import People_3 from "../../images/People_3.png";
import People_1 from "../../images/People_1.png";
import bg_people from "../../images/bg_people.png";

const SectionNine = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg_people})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "50%",
      }}
    >
      <div style={{ marginBottom: "4rem ", marginTop: "5rem" }}>
        <h4> What People Are Saying</h4>
        <h6> We provide support for more than 15K+ Businesses.</h6>
      </div>

      <div
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
          <div
            style={{ display: "flex", alignItems: "center", padding: "1rem" }}
          >
            <Card.Img
              variant="left"
              style={{ marginTop: "5px", marginRight: "1rem" }}
              src={People_1}
              alt="People_1"
              width={70}
              height={70}
            />
            <Card.Title>Dean D.</Card.Title>
            <span>Director</span>
          </div>
          <Card.Body>
            <Card.Text style={{ fontSize: "14px", textAlign: "start" }}>
              “ Great quality products - Flags, programs for exceptional
              capacities, birthday, and occasion welcome are largely still
              mainstream on paper.”
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="px-3 bg-white py-3 rounded-4 border border-1 border-light shadow"
          style={{ width: "22rem" }}
        >
          <div
            style={{ display: "flex", alignItems: "center", padding: "1rem" }}
          >
            <Card.Img
              variant="left"
              style={{ marginTop: "5px", marginRight: "1rem" }}
              src={People_2}
              alt="People_2"
              width={70}
              height={70}
            />
            <Card.Title>Cristian L.</Card.Title>
            <span>Manager</span>
          </div>
          <Card.Body>
            <Card.Text style={{ fontSize: "14px", textAlign: "start" }}>
              “ Best services ever - Flags, programs for exceptional capacities,
              birthday, and are largely still mainstream on paper occasion
              welcome.”
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="px-3 bg-white py-3 rounded-4 border border-1 border-light shadow"
          style={{ width: "22rem" }}
        >
          <div
            style={{ display: "flex", alignItems: "center", padding: "1rem" }}
          >
            <Card.Img
              variant="left"
              style={{ marginTop: "5px", marginRight: "1rem" }}
              src={People_3}
              alt="People_3"
              width={70}
              height={70}
            />
            <Card.Title>Leonel R.</Card.Title>
            <span>Designer</span>
          </div>
          <Card.Body>
            <Card.Text style={{ fontSize: "14px", textAlign: "start" }}>
              “ Top noth support - Flags, programs for, birthday, and occasion
              welcome are largely still mainstream on paper exceptional
              capacities.”
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SectionNine;
