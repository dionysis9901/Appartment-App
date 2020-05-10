import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Appartment from "../appartment";

import { getData } from "../../actions";

import "./posts.scss";

const Posts = () => {
  const { postsData } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (postsData === null) {
    return (
      <div className="awaiting">
        <p className="awaiting__text">Data Loading...</p>
      </div>
    );
  }

  return (
    <div className="posts">
      {postsData.map(
        (
          {
            title,
            price,
            amenities,
            bathrooms,
            bedrooms,
            image,
            maxpeople,
            nid,
          },
          index
        ) => {
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
        }
      )}
    </div>
  );
};
export default Posts;
