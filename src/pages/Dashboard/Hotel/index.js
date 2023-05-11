import DashboardPageContainer from '../../../layouts/DashboardPageContainer';
import { useContext } from 'react';
import TicketContext from '../../../contexts/TicketContext';
import TicketStatus from './TicketStatus';
import IncludesHotel from './IncludesHotel';
import SelectHotel from './SelectHotel';

export default function Hotel() {
  const { ticket, ticketLoading } = useContext(TicketContext);
  console.log(ticket);

  return (
    <DashboardPageContainer title="Escolha de hotel e quarto">
      {ticketLoading ? (
        <>Loading...</>
      ) : (
        <>
          <TicketStatus ticket={ticket} />
          <IncludesHotel ticket={ticket} />
        </>
      )}
      
    </DashboardPageContainer>
  );
}
