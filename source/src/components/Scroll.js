import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "auto",
        border: "2px solid #fff",
        height: "900px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
