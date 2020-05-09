import React, { useState } from "react";
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
  viewDetails,
}) => {
  const [details, setDetails] = useState(true);

  if (details) {
    return (
      <div className="appartmentUncensored">
        <img className="appartment__image" src={image} alt="Appartment" />

        <p className="appartment__title">{title}</p>

        <button className="appartment__btn" onClick={() => setDetails(false)}>
          <GrView />
        </button>

        <p className="appartment__price">From {price} € / night</p>
        <p className="appartment__mainInfo">
          {maxpeople} Guests • {bathrooms} Bathroom • {bedrooms} Bedrooms
        </p>
        <p className="appartment__amenities">{amenities}</p>

        <button className="appartment__bookNowBtn">Book Now</button>
      </div>
    );
  }

  return (
    <div className="appartment">
      <img className="appartment__image" src={image} alt="Appartment" />
      <p className="appartment__title">{title}</p>

      <button className="appartment__btn" onClick={() => setDetails(true)}>
        <GrView />
      </button>
    </div>
  );
};

export default Appartment;
