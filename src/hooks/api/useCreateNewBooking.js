import * as createUpdate from '../../services/createBookingApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function createNewBooking() {
  const token = useToken();

  const {
    data: createNewBooking,
    loading: createNewBookingLoading,
    error: createNewBookingError,
    act: createNewBookingFunction,
  } = useAsync((roomId) => createUpdate.createBooking(token, roomId), false);

  return { createNewBooking, createNewBookingLoading, createNewBookingError, createNewBookingFunction };
}
