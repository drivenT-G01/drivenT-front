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
  background-color: #ebebeb;
  margin-right: 1rem;
  border-radius: 10px;

  h1 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 24px;
    color: #343434;
    margin-top: 10px;
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

// height: 264px;
//   width: 196px;

//   margin-right: 24px;

//   display: flex;
//   justify-content: space-evenly;
//   flex-direction: column;

//   padding-left: 13px;

//   border-radius: 20px;
//   border: 1px solid #cecece;

//   background-color: ${({ selected }) => (selected ? '#FFEED2' : '#ffffff')};

//   font-size: 14px;
//   color: #898989;

//   cursor: pointer;

//   p {
//     color: #454545;
//     margin-bottom: 8px;
//     font-size: 12px;
//     padding-top: 2px;
//   }
