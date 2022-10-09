import React from "react";
import { FaSearch } from "react-icons/fa";

const Help = () => {
  return (
    <div className="text-center min-h-screen bg-dark text-light py-8">
      <div className="container">
        <h1 className="font-bold text-4xl mb-8">Hi, how can we help you?</h1>
        <form>
          <div className="relative w-fit mx-auto">
            <input
              type="search"
              name="issue"
              placeholder="Describe your issue"
              className="p-2 pl-8 rounded bg-dark-800 w-80 placeholder:text-dark-400 text-light"
            />
            <span className="absolute top-3 left-2 text-dark-400">
              <FaSearch />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Help;
