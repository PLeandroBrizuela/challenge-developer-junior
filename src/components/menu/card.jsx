import React, { useContext } from "react";
import { ProgressContext } from "../../context/context";

const Card = ({ isActive, element, data }) => {
  const { steps, incrementSteps, decrementSteps, service, setService } = useContext(ProgressContext);

  const handleClick = (el) => {
    if (service?.name == el.name) {
      setService(false);
      decrementSteps();
    } else {
      setService(el);
      if (steps < 1) incrementSteps();
    }
  };

  return (
    <>
      {isActive == element
        ? data[element].map((el) => {
            return (
              <article key={el.name} className="border-[1px] px-2 py-1 flex flex-col">
                <h3 className="text-sm">{el.name}</h3>
                <p className="text-xs font-normal">{el.description}</p>
                <div className="flex justify-end">
                  <button
                    onClick={() => handleClick(el)}
                    className={`${service?.name == el.name ? "bg-gray-600" : "bg-slate-500/80"} w-24 py-0.5 rounded text-white`}
                  >
                    {service?.name == el.name ? "Selected" : "Select"}
                  </button>
                </div>
              </article>
            );
          })
        : null}
    </>
  );
};

export default Card;
