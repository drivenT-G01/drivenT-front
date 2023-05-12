import api from './api';

export async function getAllHotels(token) {
  const { data } = await api.get('/hotels', { headers: { Authorization: `Bearer ${token}` } });
  return data;
}
