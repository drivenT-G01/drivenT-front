import { useContext } from 'react';
import HotelsContext from '../../../contexts/HotelsContext';
import HotelsList from './HotelsList';

export default function SelectHotel({ ticket }) {
  const { hotels, hotelsLoading } = useContext(HotelsContext);
  if (hotelsLoading) return <div>Loading...</div>;
  if (!hotels || !hotels.length) return <div>Nenhum hotel encontrado</div>;

  return (
    ticket.status === 'PAID' && (
      <>
        <HotelsList hotels={hotels} ticket={ticket}></HotelsList>
      </>
    )
  );
}
