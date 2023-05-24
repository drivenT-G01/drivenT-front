import { createContext, useState } from 'react';
import useSchedule from '../hooks/api/useSchedule';

const ScheduleContext = createContext();
export default ScheduleContext;

export function ScheduleProvider({ children }) {
  const { schedule, scheduleLoading, scheduleFunction } = useSchedule();
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  const refreshSchedule = () => {
    scheduleFunction().catch((_err) => {});
  };

  return (
    <ScheduleContext.Provider
      value={{ schedule, scheduleLoading, refreshSchedule, selectedSchedule, setSelectedSchedule }}
    >
      {children}
    </ScheduleContext.Provider>
  );
}
