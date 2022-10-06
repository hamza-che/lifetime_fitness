import React from "react";
import { SignupFormContextConsumer } from "../contexts/SignupFormContext";
// Images
import womanPic from "../assets/images/woman.svg";
import linesPic from "../assets/images/topographic_6.svg";
// Components
import Plan from "../components/Plan";
import SignupForm from "../components/SignupForm";
import ChoosePlan from "../components/ChoosePlan";

const MembersPlans = () => {
  const {
    isModalOpen,
    onModalClose,
    selectedPlan,
  } = SignupFormContextConsumer();

  return (
    <section className="bg-dark text-white min-h-screen relative py-6">
      <img
        src={womanPic}
        alt="Fitness woman"
        className="absolute right-0 top-0 max-h-full"
      />
      <img
        src={linesPic}
        alt="Lines background"
        className="absolute left-0 top-0 max-h-full"
      />
      <div className="container flex justify-center lg:justify-start items-center gap-24 flex-wrap relative">
        <div className="text-center">
          <div className="max-w-sm mb-4">
            <h1 className="uppercase font-bold text-5xl mb-2">
              Become a member
            </h1>
            <p className="text-md">
              When you sign up, you also purchase and subscribe to the plan you
              choose
            </p>
          </div>
          <SignupForm />
        </div>
        <div className="text-center max-w-sm flex flex-col gap-2 justify-center items-center">
          <h2 className="uppercase text-3xl font-bold">Selected plan</h2>
          <p className="text-sm">
            Pay one subscription and visit different gyms. Use our app as a
            ticket to the gyms
          </p>
          <Plan planName={selectedPlan} />
        </div>
      </div>
      <ChoosePlan isOpen={isModalOpen} onClose={onModalClose} />
    </section>
  );
};

export default MembersPlans;
