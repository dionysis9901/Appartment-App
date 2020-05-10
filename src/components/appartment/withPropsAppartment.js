import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Appartment from "./Appartment";
// import {  } from "../../actions";

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
  const dispatch = useDispatch();

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
