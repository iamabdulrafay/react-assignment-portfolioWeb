import React from "react";
import "./Awwards.css";
const Awwards = ({ img, title, year }) => {
  return (
    <div>
      <div className="awward-sec">
        <div className="box">
          <div className="box-left">
            <img className="awwradsimg" src={img} alt="" />
          </div>
          <div className="box-right">
            <h2 className="awwards-heading">{title}</h2>
            <p>{year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awwards;
