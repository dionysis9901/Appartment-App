import React from "react";

import Appartment from "./Appartment";

const withPropsAppartment = (Component) => ({
  index,
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
    <Appartment
      key={index}
      title={title}
      price={price}
      amenities={amenities}
      bathrooms={bathrooms}
      bedrooms={bedrooms}
      image={image}
      maxpeople={maxpeople}
      nid={nid}
    />
  );
};

export default withPropsAppartment;
