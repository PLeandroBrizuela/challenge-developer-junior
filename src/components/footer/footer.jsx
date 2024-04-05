import React, { useContext } from "react";
import Coffe from "../../assets/coffe";
import { ProgressContext } from "../../context/context";
import PreviousNext from "../buttons/previousNext";

const Footer = () => {
  const { setMenuActive, menuActive } = useContext(ProgressContext);
  return (
    <footer className={`fixed h-20 bottom-16 w-screen max-w-[600px] flex flex-col max-sm:left-0`}>
      <PreviousNext />
      <div className="flex justify-evenly">
        <figure className="flex flex-col cursor-pointer">
          <Coffe
            className={`${menuActive == 0 ? "fill-indigo-600" : "fill-gray-500"} max-sm:w-12`}
            onClick={() => setMenuActive(0)}
          />
          <figcaption>
            <span
              className={`max-sm:text-sm font-bold ${menuActive == 0 ? "text-indigo-600 underline" : "text-gray-500"}`}
            >
              Reserve
            </span>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center cursor-pointer">
          <Coffe
            className={`${menuActive == 1 ? "fill-indigo-600" : "fill-gray-500"} max-sm:w-12`}
            onClick={() => setMenuActive(1)}
          />
          <figcaption>
            <span
              className={`max-sm:text-sm font-bold ${menuActive == 1 ? "text-indigo-600 underline" : "text-gray-500"}`}
            >
              My bookings
            </span>
          </figcaption>
        </figure>
      </div>
    </footer>
  );
};

export default Footer;
