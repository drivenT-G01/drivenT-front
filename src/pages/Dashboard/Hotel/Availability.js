import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Availability({ hotel }) {
  const [availability, setAvailability] = useState({});
  const newAvailabilities = {};

  const calculateAvailability = () => {
    const available = hotel.Rooms.map((room) => {
      const bookings = room.Booking?.length ?? 0;
      const available = room.capacity - bookings;
      return available;
    });
    const totalAvailable = available.reduce((accumulator, currentValue) => accumulator + currentValue);
    newAvailabilities[hotel.id] = totalAvailable;
    setAvailability(newAvailabilities);
  };

  useEffect(() => {
    if (hotel) {
      calculateAvailability();
    }
  }, [hotel]);

  return (
    <AvailabilityContainer>
      <AvailabilityText key={hotel.id}>{availability[hotel.id] || ''}</AvailabilityText>
    </AvailabilityContainer>
  );
}

const AvailabilityText = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 14px;
  color: #3c3c3c;
  font-size: 0.7rem;
  align-self: start;
`;

const AvailabilityContainer = styled.section`
  display: flex;
  justify-content: flex-start;
`;
