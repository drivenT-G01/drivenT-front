import styled from 'styled-components';
import { useContext, useState } from 'react';
import Section from '../../../components/Dashboard/Section';
import HotelCard from './HotelCard';
import RoomCard from './RoomCard';
import useHotelsById from '../../../hooks/api/useHotelsById';
import { toast } from 'react-toastify';

export default function HotelsList({ hotels }) {
  const { hotelbyIdLoading, hotelByIdFunction } = useHotelsById();
  const [rooms, setRooms] = useState([]);
  const [hotelClicked, setHotelClicked] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showReservationButton, setShowReservationButton] = useState(false);

  if (hotelbyIdLoading) return <div>Loading...</div>;

  async function handleHotelClick(hotelId) {
    setSelectedHotel(hotelId);
    setHotelClicked(true);
    setSelectedRoom(null);
    setShowReservationButton(false);

    try {
      const response = await hotelByIdFunction(hotelId);
      setRooms(response.Rooms);
    } catch (error) {
      toast('Ocorreu algum problema na hora de carregar os quartos, por favor, recarregue a página');
    }
  }

  const handleRoomClick = (roomId) => {
    const selectedRoom = rooms.find((room) => room.id === roomId);
    if (selectedRoom.Booking.length < selectedRoom.capacity) {
      setSelectedRoom(roomId);
      setShowReservationButton(true);
    }
  };

  const handleReservationClick = () => {
    const room = rooms.find((room) => room.id === selectedRoom);
    console.log('Reserva efetuada para o quarto', room.name);
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
                capacity={room.capacity}
                bookings={room.Booking.length}
                selected={selectedRoom === room.id}
                disabled={room.Booking.length === room.capacity}
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
