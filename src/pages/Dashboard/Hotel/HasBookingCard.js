import styled from 'styled-components';

export default function HasBookingCard({ booking }) {
  const capacityMapping = {
    1: 'Single',
    2: 'Double',
    3: 'Triple',
  };

  const roomType = capacityMapping[booking.Room.capacity] || 'Unknown';

  let bookPhrase = 'Você';
  if (booking.Room.Booking.length > 1) {
    const peopleCount = booking.Room.Booking.length - 1;
    bookPhrase = `Você e mais ${peopleCount}`;
  }

  console.log(booking);

  return (
    <HotelCardContainer selected={true}>
      <Image src={booking.Room.Hotel.image}></Image>
      <h1>{booking.Room.Hotel.name}</h1>
      <HotelDetailsContainer>
        <h2>Quarto Reservado</h2>
        <h3>
          {booking.Room.name} ({roomType})
        </h3>
        <h2>Pessoas no seu quarto</h2>
        <h3>{bookPhrase}</h3>
      </HotelDetailsContainer>
    </HotelCardContainer>
  );
}

const HotelCardContainer = styled.main`
  display: flex;
  width: 12rem;
  height: 18rem;
  // align-items: center;
  flex-direction: column;
  background-color: ${({ selected }) => (selected ? '#FFEED2' : '#ebebeb')};
  margin-right: 1rem;
  border-radius: 10px;
  cursor: pointer;

  h1 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 24px;
    color: #343434;
    margin-top: 10px;
    align-self: flex-start;
    margin-left: 15px;
  }
  h2 {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 0.9rem;
    line-height: 24px;
    color: #3c3c3c;
    
  }

  h3 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 24px;
    color: #3c3c3c;
  }
`;

const Image = styled.img`
  width: 80%;
  border-radius: 10px;
  margin-top: 16px;
  align-self: center;
`;

const HotelDetailsContainer = styled.section`
  width: auto;
  margin-left: 15px;
  margin-top: 10px;
`;
