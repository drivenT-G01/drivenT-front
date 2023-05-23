import api from './api';

export async function createBooking(token, roomId) {
  const { data } = await api.post('/booking', { roomId }, { headers: { Authorization: `Bearer ${token}` } });
  return data;
}

export async function updateBooking(token, roomId, bookingId) {
  const { data } = await api.put(
    `/booking/${bookingId}`,
    { roomId },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return data;
}
