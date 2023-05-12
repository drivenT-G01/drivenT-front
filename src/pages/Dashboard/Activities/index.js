import { useContext } from 'react';
import DashboardPageContainer from '../../../layouts/DashboardPageContainer';
import TicketContext from '../../../contexts/TicketContext';

export default function Activities() {
  const { ticket } = useContext(TicketContext);

  return (
    <DashboardPageContainer title="Escolha de atividades" message={selectMessage(ticket)}></DashboardPageContainer>
  );
}

const selectMessage = (ticket) => {
  const NoPaymentMessage = 'Você precisa ter confirmado pagamento antes de fazer a escolha de atividades';
  const RemoteTicketMessage =
    'Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.';

  if (ticket?.status !== 'PAID') return NoPaymentMessage;
  if (ticket.TicketType.isRemote) return RemoteTicketMessage;
  return null;
};
