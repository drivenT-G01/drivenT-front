import { createContext } from 'react';
import useActivity from '../hooks/api/useActivity';

const ActivityContext = createContext();
export default ActivityContext;

export function ActivityProvider({ children }) {
  const { activities, activitiesLoading, activitiesFunction } = useActivity();

  const refreshTicket = () => {
    activitiesFunction().catch((_err) => {});
  };

  return <ActivityContext.Provider value={{ activities, activitiesLoading, refreshTicket }}>{children}</ActivityContext.Provider>;
}
