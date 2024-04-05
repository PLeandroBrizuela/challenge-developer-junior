import React, { useContext } from "react";
import { ProgressContext } from "../../context/context";

const MyBoookings = () => {
  const { quotes, deleteQuotes } = useContext(ProgressContext);
  return (
    <div className="flex flex-col gap-y-4 md:min-w-[600px]">
      <h3 className="font-bold text-xl">My Bookings</h3>
      {quotes.length == 0 ? (
        <p>You don't have reservations yet...</p>
      ) : (
        quotes.map((element) => {
          return (
            <article key={element.id} className="border-2 p-2 rounded">
              <p>Service: {element.service.name}</p>
              <p>
                Date: {element.schedule.date} {element.schedule.savedSchedule}
              </p>
              <div className="flex justify-end">
                <button onClick={() => deleteQuotes(element.id)} className="bg-red-400 w-24 py-1 rounded">
                  Cancel
                </button>
              </div>
            </article>
          );
        })
      )}
    </div>
  );
};

export default MyBoookings;
