import React, { useContext } from "react";
import { ProgressContext } from "../../context/context";

const PreviousNext = () => {
  const { steps, incrementSteps, decrementSteps, setQuotes, scheduleSave, service, quotes } =
    useContext(ProgressContext);

  const increment = () => {
    incrementSteps();
    if (steps >= 4) {
      const save = {
        id: quotes.length + 1,
        service,
        schedule: {
          date: scheduleSave.scheduledDate,
          savedSchedule: scheduleSave.savedSchedule,
        },
      };
      setQuotes([...quotes, save]);
    }
  };
  return (
    <div
      className={`max-w-[600px] w-full min-h-14 flex max-sm:left-0 p-3
      ${steps > 1 ? "justify-between" : "justify-end"} ${steps > 0 && steps < 5 && "border-y-2"}`}
    >
      {steps > 1 && steps < 5 ? (
        <button
          disabled={steps == 3}
          onClick={decrementSteps}
          className={`${steps == 3 ? "bg-gray-400" : "bg-gray-600"} w-24 py-0.5 rounded text-white`}
        >
          Previous
        </button>
      ) : null}
      {steps > 0 && steps < 5 ? (
        <button
          disabled={steps == 2}
          onClick={increment}
          className={`w-24 py-0.5 rounded text-white ${steps == 2 ? "bg-gray-400" : "bg-gray-600"}`}
        >
          {steps >= 4 ? "Confirm" : "Next"}
        </button>
      ) : null}
    </div>
  );
};

export default PreviousNext;
