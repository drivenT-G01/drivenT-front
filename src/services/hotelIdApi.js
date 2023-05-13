import api from './api';

export async function getHotelById(token, hotelId) {
  const { data } = await api.get(`/hotels/${hotelId}`, { headers: { Authorization: `Bearer ${token}` } });
  return data;
}
