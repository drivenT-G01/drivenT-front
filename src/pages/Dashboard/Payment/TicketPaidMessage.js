import { FaCheckCircle } from 'react-icons/fa';
import styled from 'styled-components';

export default function TicketPaidMessage() {
  return (
    <Container>
      <FaCheckCircle color="#36B853" size={42} />
      <Message>
        <p>Pagamento confirmado!</p>
        Prossiga para escolha de hospedagem e atividades
      </Message>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Message = styled.div`
  margin-left: 14px;
  color: #454545;

  p {
    font-size: 16px;

    :first-of-type {
      font-weight: 700;
      margin-bottom: 5px;
    }
  }
`;
