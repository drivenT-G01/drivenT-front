import DashboardPageContainer from '../../../layouts/DashboardPageContainer';
import { useContext } from 'react';
import TicketContext from '../../../contexts/TicketContext';
import TicketStatus from './TicketStatus';
import IncludesHotel from './IncludesHotel';
import SelectHotel from './SelectHotel';
import { HotelsProvider } from '../../../contexts/HotelsContext';
import {BookingProvider} from '../../../contexts/UserHaveBookingContext';

export default function Hotel() {
  const { ticket, ticketLoading } = useContext(TicketContext);

  return (
    <HotelsProvider>
      <BookingProvider>
      <DashboardPageContainer title="Escolha de hotel e quarto">
        {ticketLoading ? (
          <>Loading...</>
        ) : (
          <>
            <TicketStatus ticket={ticket} />
            <IncludesHotel ticket={ticket} />
            <SelectHotel ticket={ticket}></SelectHotel>
          </>
        )}
      </DashboardPageContainer>
      </BookingProvider>
    </HotelsProvider>
  );
}
