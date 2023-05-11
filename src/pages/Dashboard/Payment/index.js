import DashboardPageContainer from '../../../layouts/DashboardPageContainer';
import FinishPayment from './FinishPayment';
import { useContext } from 'react';
import TicketContext from '../../../contexts/TicketContext';

export default function Payment() {
  const { ticket, ticketLoading } = useContext(TicketContext);

  return (
    <DashboardPageContainer title="Ingresso e pagamento">
      {ticketLoading ? <>Loading</> : <>{ticket ? <FinishPayment {...ticket} /> : <>Em breve: ReserveTicket</>}</>}
    </DashboardPageContainer>
  );
}
