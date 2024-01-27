import React from "react";
import "./Page2.css";
import Cards from "../../Cards/Cards";
import Awwards from "../../Awwards/Awwards";
import Testamonials from "../../Testamonials/Testamonials";

const Page2 = () => {
  return (
    <div>
      <div className="page2">
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
      </div>
    </div>
  );
};

export default Page2;
