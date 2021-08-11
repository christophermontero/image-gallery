import React from "react";
import PropTypes from "prop-types";

const FormImg = ({ handleSubmit }) => {
  return (
    <>
      <form className="row m-1 p-0" onSubmit={handleSubmit}>
        <label className="col-12 col-sm-2 col-lg-1 p-0 text-center">
          Search
        </label>
        <input
          className="col col-sm col-lg mx-1 p-0"
          type="text"
          placeholder=" write some awesome stuffs..."
          name="inputText"
        />
        <button
          type="submit"
          className="col-2 m-0 p-0 col-sm-1 col-lg-1 btn btn-warning btn-sm"
        >
          <span className="material-icons">search</span>
        </button>
      </form>
    </>
  );
};

FormImg.propTypes = {
  handleSubmit: PropTypes.func
};

export default FormImg;
