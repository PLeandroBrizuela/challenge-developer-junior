import React, { useContext } from "react";
import schedule from "../../assets/slots.txt";
import useFetch from "../../hooks/useFetch";
import ShowDate from "../../functions/show-date";
import { ProgressContext } from "../../context/context";

const Schedule = () => {
  const { steps, incrementSteps, decrementSteps, scheduleSave, service, setScheduleSave } = useContext(ProgressContext);
  const { data, loading, error } = useFetch(schedule);
  const date = ShowDate(data, service);

  const handleClick = (el) => {
    if (scheduleSave?.savedSchedule == el) {
      decrementSteps();
      setScheduleSave(false);
    } else {
      setScheduleSave({ savedSchedule: el, scheduledDate: data.date });
      if (steps < 3) incrementSteps();
    }
  };
  return (
    <div className={`px-2 py-4 flex flex-col gap-y-2 ${loading && "items-center"}`}>
      {loading && <div className="loading"></div>}
      {error && <div>Error: An error has occurred</div>}
      {service.id == data.serviceId ? (
        Object.keys(data).length > 0 && (
          <>
            <h3>Next available shifts</h3>
            {date}
            <div className="grid grid-cols-2 gap-y-2 justify-items-center">
              {data.availableTimeslots.map((el) => {
                return (
                  <button
                    key={el}
                    onClick={() => handleClick(el)}
                    className={`${
                      scheduleSave?.savedSchedule == el ? "bg-gray-700" : "bg-gray-400"
                    } w-24 py-1 roundeds text-white`}
                  >
                    {el}
                  </button>
                );
              })}
            </div>
          </>
        )
      ) : (
        <>
          <p>There are no schedules...</p>
          <p>There are only appointments for Cut and Style in the Hair category.</p>
        </>
      )}
    </div>
  );
};

export default Schedule;
