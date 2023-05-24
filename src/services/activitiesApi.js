import api from './api';

export async function getActivitiesByScheduleId(id, token) {
  const { data } = await api.get(`/activities/${id}`, { headers: { Authorization: `Bearer ${token}` } });
  return data;
}
