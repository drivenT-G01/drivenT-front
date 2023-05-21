import { createContext, useState } from 'react';

const hasBookingContext = createContext();
export default hasBookingContext;

export function BookingProvider({ children }) {
    const [hasBooking, setHasBooking] = useState(false);
    const [isChangingRoom, setIsChangingRoom] = useState(false);
  
  return (
    <hasBookingContext.Provider value={{ hasBooking, setHasBooking, isChangingRoom, setIsChangingRoom }}>
      {children}
    </hasBookingContext.Provider>
  );
}
