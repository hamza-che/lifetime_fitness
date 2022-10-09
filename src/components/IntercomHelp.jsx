import React from "react";
import { Link } from "react-router-dom";
import intercomIcon from "../assets/icons/intercom.svg";

const IntercomHelp = () => {
  return (
    <Link to="/help" className="fixed right-20 bottom-20 w-20">
      <img src={intercomIcon} alt="Intercom help" />
    </Link>
  );
};

export default IntercomHelp;
