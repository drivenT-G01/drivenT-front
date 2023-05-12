import { createContext } from 'react';
import useHotels from '../hooks/api/useHotels';

const HotelsContext = createContext();
export default HotelsContext;

export function HotelsProvider({ children }) {
  const { hotels, hotelsLoading, hotelsFunction } = useHotels();

  const refreshTicket = () => {
    hotelsFunction().catch((_err) => {});
  };

  return <HotelsContext.Provider value={{ hotels, hotelsLoading, refreshTicket }}>{children}</HotelsContext.Provider>;
}
