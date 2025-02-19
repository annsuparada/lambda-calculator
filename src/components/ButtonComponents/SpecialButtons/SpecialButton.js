import React from "react";

const SpecialButton = (props) => {
  const {special} = props
  console.log(props)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="special-btn">{special}</button>  
    </>
  );
};

export default SpecialButton;
