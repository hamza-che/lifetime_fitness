import React from "react";
// Components
import Plan from "../components/Plan";

const MembersPlans = () => {
  return (
    <section className="bg-dark text-white min-h-screen">
      <div className="container">
        <Plan planName="bronze" />
      </div>
    </section>
  );
};

export default MembersPlans;
