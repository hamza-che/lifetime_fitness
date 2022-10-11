import React from "react";
import { MembersPlansContextConsumer } from "../contexts/MembersPlansContext";
// Data
import plansData from "../data/plansData";
// Icons
import checkedIcon from "../assets/icons/checked.svg";

const Plan = ({ planName, isSelectPlanBtn }) => {
  const { selectPlan } = MembersPlansContextConsumer();

  return (
    <div className="bg-dark-600 text-light w-fit rounded-md py-8 mt-5">
      {plansData.map(plan => {
        const { id, name, bg, price, features } = plan;
        return name === planName ? (
          <React.Fragment key={id}>
            <div className="text-center pb-6">
              <span className="text-6xl font-bold">
                {price}
                <span className="text-3xl">$</span>
              </span>/Month
            </div>
            <div className="relative flex justify-center items-center">
              <img src={bg} alt={`${name} background`} />
              <h5 className="absolute text-dark-600 font-bold text-xl tracking-widest uppercase">
                {name}
              </h5>
            </div>
            <ul className="pt-2 pb-6 px-12" style={{ minHeight: "190px" }}>
              {features.map((feature, index) => (
                <li key={index} className="flex mt-4 gap-3">
                  <img src={checkedIcon} alt="checked icon" />{" "}
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            {isSelectPlanBtn ? (
              <a
                href="#"
                className="text-white bg-green py-3 px-6 mt-4 mb-6 rounded text-center block w-fit mx-auto"
                onClick={() => selectPlan(planName)}
              >
                SELECT PLAN
              </a>
            ) : null}
            <a href="#" className="text-green text-center block w-fit mx-auto">
              Discover related gyms
            </a>
          </React.Fragment>
        ) : null;
      })}
    </div>
  );
};

export default Plan;
