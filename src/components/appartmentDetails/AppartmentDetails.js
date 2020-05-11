import React from "react";

const AppartmentDetails = ({
  price,
  maxpeople,
  bedrooms,
  bathrooms,
  amenities,
  bookNowFunc,
}) => (
  <>
    <p className="appartment__details__price">From {price} € / night</p>
    <p className="appartment__details__mainInfo">
      {maxpeople} Guests • {bathrooms} Bathroom • {bedrooms} Bedrooms
    </p>
    <p className="appartment__details__amenities">{amenities}</p>
    <button
      className="appartment__details__bookNowBtn btn"
      onClick={bookNowFunc}
    >
      Book Now
    </button>
  </>
);

export default AppartmentDetails;
