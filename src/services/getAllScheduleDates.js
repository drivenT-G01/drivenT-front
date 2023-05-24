import api from './api';

export async function getAllScheduleDates(token) {
  const { data } = await api.get('/schedule', { headers: { Authorization: `Bearer ${token}` } });
  return data;
}
