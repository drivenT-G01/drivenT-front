import * as ticketApi from '../../services/ticketApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useTicket() {
  const token = useToken();

  const { data: ticket, loading: ticketLoading, error: ticketError } = useAsync(() => ticketApi.getUserTicket(token));

  return { ticket, ticketLoading, ticketError };
}
