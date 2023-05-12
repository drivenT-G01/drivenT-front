import { useContext, useState } from 'react';
import HotelsContext from '../../../contexts/HotelsContext';
import HotelsList from './HotelsList';

export default function SelectHotel({ ticket }) {
  const { hotels, hotelsLoading } = useContext(HotelsContext);
  return(ticket.status === 'PAID')&& (
    <>
      <h1>Primeiro, escolha seu hotel</h1>
      <HotelsList hotels = {hotels}></HotelsList>
    </>);
}
