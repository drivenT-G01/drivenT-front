import * as ticketApi from '../../services/ticketApi';
import useToken from '../useToken';
import useAsync from '../useAsync';

export default function useTicketTypes() {
  const token = useToken();

  const {
    data,
    loading: ticketTypesLoading,
    error: ticketTypesError,
  } = useAsync(() => ticketApi.getTicketTypes(token));

  return { ticketTypes: data ? data.sort((a, b) => a.price - b.price) : [], ticketTypesLoading, ticketTypesError };
}
