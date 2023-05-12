import styled from 'styled-components';

export default function HotelCard({ hotel } ) {
  return (
    <HotelCardContainer>
      <Image src={hotel.image}></Image>
      <h1>{hotel.name}</h1>
      <h2>Tipos de acomodação</h2>
      <h2>Vagas disponiveis</h2>
    </HotelCardContainer>
  );
}

const HotelCardContainer = styled.main`
    display: flex;
    width: 10rem;
    height: 14rem;
    align-items: center;
    flex-direction: column;
    background-color: #EBEBEB;
    margin-right: 1rem;
    border-radius:10px;

    h1{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 1.1rem;
        line-height: 24px;
        color: #343434;
    }
    h2{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 0.8rem;
        line-height: 24px;
        color: #3C3C3C ;
    }
`;

const Image = styled.img`
    width: 80%;
    border-radius: 10px;
    margin-top: 16px;
`;
