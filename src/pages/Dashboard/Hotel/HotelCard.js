import styled from 'styled-components';

export default function HotelCard({ name, selected, onClick }) {
  return (
    <Container selected={selected} onClick={onClick}>
      <HotelImage>
        <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
      </HotelImage>
      <HotelName>
        <h1>{name}</h1>
      </HotelName>
      <Accommodations>
        <h2>Tipos de acomodações:</h2>
        <p>Single, Double, Triple</p>
      </Accommodations>
      <Vacancies>
        <h2>Vagas Disponiveis:</h2>
        <p>23</p>
      </Vacancies>
    </Container>
  );
}

const Container = styled.div`
  height: 264px;
  width: 196px;

  margin-right: 24px;

  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  padding-left: 13px;

  border-radius: 20px;
  border: 1px solid #cecece;

  background-color: ${({ selected }) => (selected ? '#FFEED2' : '#ffffff')};

  font-size: 14px;
  color: #898989;

  cursor: pointer;

  p {
    color: #454545;
    margin-bottom: 8px;
    font-size: 12px;
    padding-top: 2px;
  }
  h1 {
    color: #000000;
    font-size: 22px;
  }
  h2 {
    color: #000000;
    font-size: 14px;
  }
  img {
    width: 168px;
    height: 109px;
    border-radius: 10px;
  }
`;

const HotelImage = styled.div``;
const HotelName = styled.div``;
const Accommodations = styled.div``;
const Vacancies = styled.div``;
