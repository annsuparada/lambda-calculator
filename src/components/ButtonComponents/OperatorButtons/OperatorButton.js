import React from "react";

const OperatorButton = (props) => {
  const {opera} = props
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="opera-btn">{opera}</button>
    </>
  );
};

export default OperatorButton;