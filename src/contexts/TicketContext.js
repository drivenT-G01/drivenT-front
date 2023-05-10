import { createContext } from 'react';
import useTicket from '../hooks/api/useTicket';

const TicketContext = createContext();
export default TicketContext;

export function TicketProvider({ children }) {
  const { ticket, ticketLoading, ticketFunction } = useTicket();

  const refreshTicket = () => {
    ticketFunction().catch((_err) => {});
  };

  return <TicketContext.Provider value={{ ticket, ticketLoading, refreshTicket }}>{children}</TicketContext.Provider>;
}
