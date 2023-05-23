import { useContext } from 'react';
import HotelsContext from '../../../contexts/HotelsContext';
import styled from 'styled-components';

export default function AcomodationTypes() {
  const { hotels } = useContext(HotelsContext);
  if (!hotels || !hotels.length) return null;

  const capacities = {};

  hotels.forEach((hotel) => {
    hotel.Rooms.forEach((room) => {
      capacities[room.capacity] = (capacities[room.capacity] || 0) + 1;
    });
  }); //O(n²)

  const capacityLabels = ['Single', 'Double', 'Triple'];
  let capacityString = '';
  for (let i = 0; i < capacityLabels.length; i++) {
    const capacityLabel = capacityLabels[i];
    if (capacities[i + 1]) {
      capacityString += capacityLabel + ' ';
    }
  }
  capacityString = capacityString.trim();

  return <AcomodationTypesContainer>{capacityString}</AcomodationTypesContainer>;
}

const AcomodationTypesContainer = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 14px;
  color: #3c3c3c;
  font-size: 0.6rem;
`;
