import React from "react";
import "./About.css";

import profile from "/portfolio web/src/assets/profile.jpg";

import Cards from "../Cards/Cards";
import Awwards from "../Awwards/Awwards";
import Testamonials from "../Testamonials/Testamonials";
import Page2 from "./page2/Page2";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="top">
          <div className="left">
            <img src={profile} alt="" />
            <h2>web dev </h2>
            <h1 className="hero">Abdul Rafay khan</h1>
          </div>
          <div className="right">
            <h1>BioGraphy</h1>
            <p>
              I'm a Freelancer Front-end Developer with over 3 years of
              experience. I'm from San Francisco. I code and create web elements
              for amazing people around the world. I like work with new people.
              New people new Experiences.
            </p>
            <p>
              I'm a Freelancer Front-end Developer with over 3 years of
              experience. I'm from San Francisco. I code and create web elements
              for amazing people around the world. I like work with new people.
              New people new Experiences.
            </p>
            <div className="flex">
              <ul>
                <li>Name:Abdul rafay</li>
                <li>Phone:+92000000</li>
                <li>Email:upwork8000@gmail.com</li>
                <li>Linkdin:Abdul Rafay khan</li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
        <Page2></Page2>
        <div>
          {/* <div className="page2">
            <h1 className="my-expertiese">What I do?</h1>
            <div className="card-flex">
              <Cards title={"web developer"} subTitle={"Expert"} />
              <Cards title={"web design"} subTitle={"web design"} />
              <Cards title={"React"} subTitle={"Intermediates"} />
            </div>
            <h1 className="my-expertiese">Awwards</h1>
            <div className="card-flex">
              <Awwards
                img={"https://nairo.ibthemespro.com/img/award/a1.png"}
                title={"Creative Designer"}
                year={"2020"}
              />
              <Awwards
                img={"https://nairo.ibthemespro.com/img/award/a2.png"}
                title={"Yearly Best Performer"}
                year={"2021"}
              />
              <Awwards
                img={"https://nairo.ibthemespro.com/img/award/a3.png"}
                title={"Best Learner Award"}
                year={"2023"}
              />
            </div>
            <Testamonials />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default About;
