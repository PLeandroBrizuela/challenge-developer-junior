import React, { useContext } from "react";
import { ProgressContext } from "../../context/context";

const Header = () => {
  const { steps } = useContext(ProgressContext);

  return (
    <header className="pb-2">
      <h2>
        <span className="font-bold">
          {steps >= 4 ? "Confirm appointment" : steps >= 2 ? "Select schedule" : "Select services"}
        </span>
      </h2>
      <div className="h-4 w-full bg-gray-200">
        <div
          className={`h-full bg-teal-500 duration-500 
          ${steps >= 5 ? "w-6/6" : steps >= 4 ? "w-5/6" : steps >= 2 ? "w-3/6" : "w-1/6"}`}
        ></div>
      </div>
    </header>
  );
};

export default Header;
