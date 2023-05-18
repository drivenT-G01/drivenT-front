import api from './api';

export async function getBookingByUserId(token, userId) {
  const { data } = await api.get(`/booking?${userId}`, { headers: { Authorization: `Bearer ${token}` } });
  return data;
}
