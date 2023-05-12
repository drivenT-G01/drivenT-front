import styled from 'styled-components';
import HotelCard from './HotelCard';
import { useEffect, useState } from 'react';

export default function HotelsList({ hotels } ) {
  return (
    <HotelsListContainer>
      {hotels.map((hotel) => {
        return <HotelCard key= {hotel.id} hotel={hotel}/>;
      })}
    </HotelsListContainer>
  );
}

const HotelsListContainer = styled.main`
    display: flex;
    margin-top: 20px;
`;
