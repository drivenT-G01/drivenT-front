import * as hotelsApi from '../../pages/Dashboard/Payment/services/hotelApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useHotels() {
  const token = useToken();

  const {
    data: hotels,
    loading: hotelsLoading,
    error: hotelsError,
    act: hotelsFunction,
  } = useAsync(() => hotelsApi.getAllHotels(token));

  return { hotels, hotelsLoading, hotelsError, hotelsFunction };
}
