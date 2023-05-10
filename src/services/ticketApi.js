import api from './api';

export async function getUserTicket(token) {
  const { data } = await api.get('/tickets', { headers: { Authorization: `Bearer ${token}` } });
  return data;
}
