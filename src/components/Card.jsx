import React from "react";
import PropTypes from "prop-types";

const Card = ({ img }) => {
  return (
    <div
      className="card m-1 p-0"
      style={{
        width: "10rem"
      }}
    >
      <img src={img} className="card-img-top" alt="random" />
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string
};

export default Card;
