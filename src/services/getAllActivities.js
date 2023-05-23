import api from './api';

export async function getAllActivities(token) {
  const { data } = await api.get('/activities', { headers: { Authorization: `Bearer ${token}` } });
  return data;
}
