import Section from '../../../components/Dashboard/Section';
import Card from './Card';
import CreditCardForm from './CreditCardForm';
import { useContext } from 'react';
import TicketContext from '../../../contexts/TicketContext';

export default function FinishPayment() {
  const {
    ticket: {
      status,
      TicketType: { price, isRemote, includesHotel },
    },
  } = useContext(TicketContext);

  return (
    <>
      <Section title="Ingresso escolhido">
        <Card title={createTicketReviewText(isRemote, includesHotel)} description={`R$ ${price}`} stretch active></Card>
      </Section>

      <Section title="Pagamento">{status === 'PAID' ? <>Pago!</> : <CreditCardForm />}</Section>
    </>
  );
}

const createTicketReviewText = (isRemote, includesHotel) => {
  const firstPartOfText = isRemote ? 'Online' : 'Presencial';
  const secondPartOfText = includesHotel ? ' + Com Hotel' : ' + Sem Hotel';
  return firstPartOfText + (isRemote ? '' : secondPartOfText);
};
