import React from "react";
import Appartment from "../appartment";
const Posts = ({ postsData }) => {
  if (postsData === null) {
    return <div className="awaining">awaiting...</div>;
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
