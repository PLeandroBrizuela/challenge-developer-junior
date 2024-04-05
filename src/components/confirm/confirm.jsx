import React, { useContext } from "react";
import { ProgressContext } from "../../context/context";

const Confirm = () => {
  const { setMenuActive, allReset } = useContext(ProgressContext);
  return (
    <div className="relative px-4 flex items-center justify-center">
      <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
        <div className="text-center md:text-right mt-4 md:flex md:justify-end">
          <button
            onClick={allReset}
            className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-green-200 text-green-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
          >
            Book another appointment
          </button>
          <button
            onClick={() => {
              setMenuActive(1);
              allReset();
            }}
            className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
          md:mt-0 md:order-1"
          >
            See my appointments
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
