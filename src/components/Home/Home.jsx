import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import profileImage from "../../assets/profile.jpg";
const Home = ({ dark, text }) => {
  return (
    <div className={`main bg-${dark}   text-${text}`}>
      <div className={`left text-${text}`}>
        <h3>Hello, My name is</h3>
        <h1 className="name">Abdul Rafay</h1>
        <div class="animate-text">
          <div class={`line text-${text}`}>Beautiful UI</div>
          <div class="line">Latest Tech</div>
          <div class="line">Modern UX</div>
          <div class="line">Performance</div>
        </div>
        <p>
          I design and develop services for customers of all sizes, specializing
          in creating modern websites and web services
        </p>
        <button
          onClick={() => {
            apifnc;
          }}>
          Download Cv
        </button>
      </div>
      <div className="right">
        <img src={profileImage} alt="" />
      </div>
    </div>
  );
};

export default Home;
