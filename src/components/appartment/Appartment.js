import React from "react";
import "./appartment.scss";
import { GrView } from "react-icons/gr";

const Appartment = ({
  title,
  price,
  amenities,
  bathrooms,
  bedrooms,
  image,
  maxpeople,
  nid,
}) => {
  return (
    <div className="appartment">
      <img className="appartment__image" src={image} alt="Appartment Image" />
      <p className="appartment__title">{title}</p>
      <button className="appartment__btn">
        <GrView />
      </button>
    </div>
  );
};

export default Appartment;
