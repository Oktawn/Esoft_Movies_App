import Cards from "../Cards/Cards";
import React from "react";

function CardList({ props }) {
  return (
    <div className="container">
      {props.map((f) => (
        <Cards id={f.id} film={f} />
      ))}
    </div>
  );
}

export default CardList;
