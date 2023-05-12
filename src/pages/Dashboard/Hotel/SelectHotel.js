import { useContext, useState } from 'react';
import HotelsContext from '../../../contexts/HotelsContext';

export default function SelectHotel({ ticket }) {
  const { hotels, hotelsLoading } = useContext(HotelsContext);
  console.log(hotels);
  return(ticket.status === 'PAID')&& (
    <>
      <h1>Primeiro, escolha seu hotel</h1>
    </>);
}
