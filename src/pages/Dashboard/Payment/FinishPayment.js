import Section from '../../../components/Dashboard/Section';
import Card from './Card';

export default function FinishPayment({ TicketType: { price, isRemote, includesHotel } }) {
  const firstText = isRemote ? 'Online' : 'Presencial';
  const secondText = includesHotel ? ' + Com Hotel' : ' + Sem Hotel';
  const fullText = firstText + (isRemote ? '' : secondText);

  return (
    <>
      <Section title="Ingresso escolhido">
        <Card title={fullText} description={`R$ ${price}`} stretch active></Card>
      </Section>
    </>
  );
}
