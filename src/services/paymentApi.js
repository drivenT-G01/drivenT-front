import api from './api';

export async function processPayment(token, payload) {
  const { data } = await api.post('/payments/process', payload, { headers: { Authorization: `Bearer ${token}` } });
  return data;
}
