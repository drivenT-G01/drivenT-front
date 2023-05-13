import styled from 'styled-components';
import { useState } from 'react';
import Section from '../../../components/Dashboard/Section';
import HotelCard from './HotelCard';
import RoomCard from './RoomCard';

export default function HotelsList({ hotels }) {
  const [hotelClicked, setHotelClicked] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showReservationButton, setShowReservationButton] = useState(false);

  const rooms = [
    { id: 1, name: 101, vacancies: 3, bookings: 1 },
    { id: 2, name: 102, vacancies: 2, bookings: 0 },
    { id: 3, name: 103, vacancies: 1, bookings: 1 },
    { id: 4, name: 104, vacancies: 4, bookings: 2 },
  ];

  const handleHotelClick = (hotelId) => {
    setSelectedHotel(hotelId);
    setHotelClicked(true);
    setSelectedRoom(null);
    setShowReservationButton(false); // Redefinir a exibição do botão de reserva ao trocar de hotel
  };

  const handleRoomClick = (roomId) => {
    const selectedRoom = rooms.find((room) => room.id === roomId);
    if (selectedRoom.bookings < selectedRoom.vacancies) {
      setSelectedRoom(roomId);
      setShowReservationButton(true);
    }
  };

  const handleReservationClick = () => {
    // Lógica para realizar a reserva do quarto
    console.log('Reserva efetuada para o quarto', selectedRoom);
  };

  return (
    <>
      <Section title="Primeiro, escolha seu hotel">
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            name={hotel.name}
            selected={selectedHotel === hotel.id}
            onClick={() => handleHotelClick(hotel.id)}
            hotel={hotel}
          />
        ))}
      </Section>
      {hotelClicked ? (
        <>
          <Section title="Perfeito, agora escolha o quarto">
            {rooms.map((room) => (
              <RoomCard
                key={room.id}
                name={room.name}
                vacancies={room.vacancies}
                bookings={room.bookings}
                selected={selectedRoom === room.id}
                disabled={room.bookings === room.vacancies}
                onClick={() => handleRoomClick(room.id)}
              />
            ))}
          </Section>
          {showReservationButton && (
            <Section>
              <Button onClick={handleReservationClick}>Reservar Quarto</Button>
            </Section>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
const Button = styled.button`
  width: 182px;
  height: 37px;

  background: #e0e0e0;

  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;
