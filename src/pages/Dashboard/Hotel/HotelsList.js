import styled from 'styled-components';
import HotelCard from './HotelCard';
import { useEffect, useState } from 'react';

export default function HotelsList({ hotels } ) {
  const [loaded, setLoaded] = useState(false);
  console.log(hotels[0].Rooms[0].capacity);

  useEffect(() => {
    if (hotels && hotels.length) {
      setLoaded(true);
    }
  }, [hotels]);

  if (!loaded) return <div>Carregando hotéis...</div>;
  if (!hotels || !hotels.length) return <div>Nenhum hotel encontrado</div>;

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
