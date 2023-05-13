import { createContext } from 'react';
import useHotelsById from '../hooks/api/useHotelsById';

const HotelsByIdContext = createContext();
export default HotelsByIdContext;

export function HotelsByIdProvider({ children }, hotelId) {
  const { hotelById, hotelByIdLoading, hotelByIdFunction } = useHotelsById(hotelId);

  const refreshTicket = () => {
    hotelByIdFunction().catch((_err) => {});
  };

  return <HotelsByIdContext.Provider value={{ hotelById, hotelByIdLoading, refreshTicket }}>{children}</HotelsByIdContext.Provider>;
}
