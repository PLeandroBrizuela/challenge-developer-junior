import React, { useContext, useState } from "react";
import plus from "../../assets/plus.svg";
import sub from "../../assets/sub.svg";
import services from "../../assets/services.txt";
import Card from "./card";
import useFetch from "../../hooks/useFetch";
import Schedule from "../schedule/schedule";
import { ProgressContext } from "../../context/context";
import Finally from "./finally";
import Confirm from "../confirm/confirm";

const Menu = () => {
  const { data, loading, error } = useFetch(services);
  const { steps } = useContext(ProgressContext);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (element) => {
    if (element != isActive) setIsActive(element);
    else setIsActive(false);
  };

  return (
    <menu className="border-2 border-gray-200 font-semibold md:min-w-[600px]">
      <div className={`px-2 py-1 flex flex-col gap-y-2 ${loading && "items-center"}`}>
        {loading && <div className="loading"></div>}
        {error && <div>Error: An error has occurred</div>}
        {steps < 2 && <p>Categories</p>}
        {steps < 2 &&
          Object.keys(data)?.map((element, index) => {
            return (
              <>
                <div key={index} className="flex flex-col gap-y-2">
                  <a onClick={() => handleClick(element)} key={element} className="bg-gray-100 flex justify-between">
                    {element} <img src={element == isActive ? sub : plus} alt="plus-sub" width={22} />
                  </a>
                  <Card isActive={isActive} element={element} data={data} />
                </div>
              </>
            );
          })}
        {steps >= 2 && steps < 4 && <Schedule />}
        {steps >= 4 && steps < 5 && <Finally />}
        {steps >= 5 && <Confirm />}
      </div>
    </menu>
  );
};

export default Menu;
