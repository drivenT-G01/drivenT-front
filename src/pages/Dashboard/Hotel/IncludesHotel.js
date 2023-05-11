import styled from 'styled-components';

export default function IncludesHotel({ ticket: { TicketType: { isRemote, includesHotel } } }) {
  return (isRemote || !includesHotel) ? (
    <IncludesHotelContainer>
      <Text>Sua modalidade de ingresso não inclui hospedagem. Prossiga para a escolha de atividades</Text>
    </IncludesHotelContainer>
  ): null;
}

const IncludesHotelContainer = styled.main`
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

