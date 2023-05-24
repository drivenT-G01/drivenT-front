import { createContext } from 'react';
import useSchedule from '../hooks/api/useSchedule';

const ScheduleContext = createContext();
export default ScheduleContext;

export function ScheduleProvider({ children }) {
  const { schedule, scheduleLoading, scheduleFunction } = useSchedule();

  const refreshTicket = () => {
    scheduleFunction().catch((_err) => {});
  };

  return <ScheduleContext.Provider value={{ schedule, scheduleLoading, refreshTicket }}>{children}</ScheduleContext.Provider>;
}
