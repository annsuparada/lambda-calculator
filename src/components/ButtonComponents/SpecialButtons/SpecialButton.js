import React from "react";

const SpecialButton = (props) => {
  const {spaecial} = props
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="special-btn">{spaecial}</button>  
    </>
  );
};

export default SpecialButton;
