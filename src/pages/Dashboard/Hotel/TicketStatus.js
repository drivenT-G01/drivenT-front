import styled from 'styled-components';

export default function TicketStatus({ ticket }) {
  return (!ticket || ticket.status === 'RESERVED') && (
    <TicketStatusContainer>
      <Text>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</Text>
    </TicketStatusContainer>
  );
}

const TicketStatusContainer = styled.main`
    display: flex;
    height: 40%;
    width: auto;
    justify-content: center;
    align-items: center;
`;

const Text = styled.h1`
    width: 80%;
    text-align: center;
    line-height: 24px;
    font-family: 'Roboto';
    font-size: 1.3rem;
    font-weight: 400;
    color: #8E8E8E;
`;
