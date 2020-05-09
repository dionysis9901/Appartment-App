import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Appartment from "./Appartment";
// import {  } from "../../actions";

const withPropsAppartment = (Component) => (props) => {
  const dispatch = useDispatch();

  return (
    <Appartment
      key={props.index}
      title={props.title}
      price={props.price}
      amenities={props.amenities}
      bathrooms={props.bathrooms}
      bedrooms={props.bedrooms}
      image={props.image}
      maxpeople={props.maxpeople}
      nid={props.nid}
    />
  );
};

export default withPropsAppartment;
