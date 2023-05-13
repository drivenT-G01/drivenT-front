import api from './api';

const baseRouteUrl = '/tickets';

const setAuthToken = (token) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};

export async function getUserTicket(token) {
  const { data } = await api.get(baseRouteUrl, setAuthToken(token));
  return data;
}

export async function getTicketTypes(token) {
  const { data } = await api.get(`${baseRouteUrl}/types`, setAuthToken(token));
  return data;
}
