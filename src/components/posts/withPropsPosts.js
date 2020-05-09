import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Posts from "./Posts";
import { getData } from "../../actions";

const withPropsPosts = (Component) => (props) => {
  //   const { } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return <Posts />;
};

export default withPropsPosts;
