import React from "react";
import { useParams } from "react-router";

const Details = () => {
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
  const { id } = useParams();
  const record = data.filter((rec) => rec.id == id);
  return (
    <div>
      <h3>This is detail page of record {id}.</h3>
      <p>ID: {record[0].id}</p>
      <p>Name: {record[0].name}</p>
      <p>Address: {record[0].address}</p>
      <p>Profession: {record[0].profession}</p>
    </div>
  );
};

export default Details;
