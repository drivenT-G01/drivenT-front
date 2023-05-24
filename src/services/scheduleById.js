import api from './api';

export async function getScheduleById(token, scheduleId) {
  const { data } = await api.get(`/activities/${scheduleId}`, { headers: { Authorization: `Bearer ${token}` } });
  return data;
}
