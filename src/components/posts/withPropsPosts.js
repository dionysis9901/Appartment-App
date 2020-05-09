import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Posts from "./Posts";
// import {} from "../../actions";

const withPropsPosts = (Component) => (props) => {
  //   const { } = useSelector((state) => state);
  const dispatch = useDispatch();
  return <Posts />;
};

export default withPropsPosts;
