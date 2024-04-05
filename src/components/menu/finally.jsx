import React, { useContext } from "react";
import { ProgressContext } from "../../context/context";

const Finally = () => {
  const { service, scheduleSave } = useContext(ProgressContext);
  return (
    <ul>
      <li>Service: {service.name}</li>
      <li>Date: {scheduleSave.scheduledDate} {scheduleSave.savedSchedule}</li>
    </ul>
  );
};

export default Finally;
