import api from './api';

export async function getActivitiesByScheduleId(id, token) {
  const { data } = await api.get(`/activities/${id}`, { headers: { Authorization: `Bearer ${token}` } });
  return data;
}

export async function scheduleNewActivityForUser(id, token) {
  const { data } = await api.post(`/activities/${id}`, { headers: { Authorization: `Bearer ${token}` } });
  return data;
}
