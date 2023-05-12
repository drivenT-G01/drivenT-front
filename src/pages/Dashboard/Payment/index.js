import DashboardPageContainer from '../../../layouts/DashboardPageContainer';
import FinishPayment from './FinishPayment';
import { useContext } from 'react';
import TicketContext from '../../../contexts/TicketContext';
import MakeTheReserve from './MakeTheReserve';
import useEnrollment from '../../../hooks/api/useEnrollment';

const NoEnrollmentMessage = 'Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso';

export default function Payment() {
  const { ticket, ticketLoading } = useContext(TicketContext);
  const { enrollment } = useEnrollment();

  return (
    <DashboardPageContainer title="Ingresso e pagamento" message={!enrollment && NoEnrollmentMessage}>
      {ticketLoading ? <>Loading</> : <>{ticket ? <FinishPayment {...ticket} /> : <MakeTheReserve />}</>}
    </DashboardPageContainer>
  );
}
