import styled from 'styled-components';
import AcomodationTypes from './AcomodationTypes';
import Availability from './Availability';

export default function HotelCard({ hotel, selected, onClick }) {
  return (
    <HotelCardContainer selected={selected} onClick={onClick}>
      <Image src={hotel.image}></Image>
      <h1>{hotel.name}</h1>
      <HotelDetailsContainer>
        <h2>Tipos de acomodação</h2>
        <AcomodationTypes></AcomodationTypes>
        <h2>Vagas disponiveis</h2>
        <Availability hotel={hotel}></Availability>
      </HotelDetailsContainer>
    </HotelCardContainer>
  );
}

const HotelCardContainer = styled.main`
  display: flex;
  width: 10rem;
  height: 14rem;
  align-items: center;
  flex-direction: column;
  background-color: ${({ selected }) => (selected ? '#FFEED2' : '#ebebeb')};
  margin-right: 1rem;
  border-radius: 10px;
  cursor: pointer;

  h1 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 24px;
    color: #343434;
    margin-top: 10px;
    align-self: flex-start;
    margin-left: 15px;
  }
  h2 {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 0.8rem;
    line-height: 24px;
    color: #3c3c3c;
  }
`;

const Image = styled.img`
  width: 80%;
  border-radius: 10px;
  margin-top: 16px;
`;

const HotelDetailsContainer = styled.section`
  width: auto;
`;
