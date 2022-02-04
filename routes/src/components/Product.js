import React from "react";
import { Link, useHistory } from "react-router-dom";

const Product = () => {
  const history = useHistory();
  console.log(history);
  const data = [
    {
      id: 1,
      name: "Hassan",
      address: "Chargano chock",
      profession:
        "Studied software engineering from Islamia College University Peshawar.",
    },
    {
      id: 2,
      name: "Waleed",
      address: "Hayatabad",
      profession:
        "Teacher of English department, Islamia College university peshawar.",
    },
    {
      id: 3,
      name: "Ayaan",
      address: "Battagram",
      profession:
        "Student of class 3rd, studied in Alsyed Garden School Battagram.",
    },
  ];
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>
        Product Component about Dynamic Routing:
      </h3>
      {data.map((rec) => {
        return (
          <div>
            <p>
              <Link to={"details/" + rec.id}>{rec.name}</Link>
            </p>
            <hr />
          </div>
        );
      })}
      <button onClick={() => history.push("/")}>Go To Home Page</button>
      <button onClick={() => history.goForward()}>Go Forward</button>
    </div>
  );
};

export default Product;
