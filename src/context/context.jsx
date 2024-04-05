import { createContext, useState } from "react";

export const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [steps, setSteps] = useState(0);
  const [service, setService] = useState(null);
  const [scheduleSave, setScheduleSave] = useState(null);
  const [menuActive, setMenuActive] = useState(0);
  const [quotes, setQuotes] = useState([]);

  const deleteQuotes = (id) => {
    setQuotes((prevQuotes) => {
      return prevQuotes
        .filter((quote) => quote.id !== id)
        .map((quote, index) => {
          // .map reasigna los valores de id
          return {
            ...quote,
            id: index + 1,
          };
        });
    });
  };

  const incrementSteps = () => setSteps(steps + 1);
  const decrementSteps = () => setSteps(steps - 1);
  const allReset = () => {
    setSteps(0);
    setService(null);
    setScheduleSave(null);
  };

  return (
    <ProgressContext.Provider
      value={{
        steps,
        incrementSteps,
        decrementSteps,
        service,
        setService,
        scheduleSave,
        setScheduleSave,
        menuActive,
        setMenuActive,
        allReset,
        setQuotes,
        quotes,
        deleteQuotes,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}
