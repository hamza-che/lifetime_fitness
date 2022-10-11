import ReactDOM from "react-dom";
import Plan from "./Plan";

const ChoosePlan = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="flex flex-col gap-3 text-center absolute top-0 left-0 h-full w-full z-50 py-6 bg-white overflow-hidden">
      <button
        className="absolute top-7 right-7 text-3xl text-dark font-bold"
        onClick={onClose}
      >
        X
      </button>
      <div>
        <h2 className="text-3xl font-bold uppercase mb-4">
          Select another plan
        </h2>
        <p className="text-md font-semibold">
          Pay one subscription and visit different gyms. <br /> Use our app as a
          ticket to the gyms.
        </p>
      </div>
      <div className="flex justify-center items-center flex-col lg:flex-row gap-4 text-white">
        <Plan planName="bronze" isSelectPlanBtn={true} />
        <Plan planName="silver" isSelectPlanBtn={true} />
        <Plan planName="gold" isSelectPlanBtn={true} />
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default ChoosePlan;
