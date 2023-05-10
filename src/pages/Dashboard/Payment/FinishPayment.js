import Section from '../../../components/Dashboard/Section';
import Card from './Card';

export default function FinishPayment() {
  return (
    <>
      <Section title="Ingresso escolhido">
        <Card title="Presencial + Com Hotel" description="R$ 600" stretch active></Card>
      </Section>
    </>
  );
}
