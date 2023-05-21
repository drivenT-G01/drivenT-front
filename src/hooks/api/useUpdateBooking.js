import * as createUpdate from '../../services/createBookingApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function updateUserBooking() {
  const token = useToken();
  const {
    data: updateUserBooking,
    loading: updateUserBookingLoading,
    error: updateUserBookingError,
    act: updateUserBookingFunction,
  } = useAsync((roomId, bookingId) => createUpdate.updateBooking(token, roomId, bookingId), false);

  return { updateUserBooking, updateUserBookingLoading, updateUserBookingError, updateUserBookingFunction };
}
