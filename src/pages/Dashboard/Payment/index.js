import DashboardPageContainer from '../../../layouts/DashboardPageContainer';
import FinishPayment from './FinishPayment';
import { useContext } from 'react';
import TicketContext from '../../../contexts/TicketContext';
import MakeTheReserve from './makeTheReserve';

export default function Payment() {
  const { ticket, ticketLoading } = useContext(TicketContext);

  return (
    <DashboardPageContainer title="Ingresso e pagamento">
      {ticketLoading ? <>Loading</> : <>{ticket ? <FinishPayment {...ticket} /> : <MakeTheReserve/>}</>}
    </DashboardPageContainer>
  );
}
