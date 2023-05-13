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

export async function reserveTicket(ticketTypeId, token) {
  const { data } = await api.post(baseRouteUrl, { ticketTypeId }, setAuthToken(token));
  return data;
}
