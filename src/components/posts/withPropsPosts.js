import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Posts from "./Posts";
import { getData } from "../../actions";

const withPropsPosts = (Component) => (props) => {
  const dispatch = useDispatch();
  const { postsData } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return <Posts postsData={postsData} />;
};

export default withPropsPosts;
