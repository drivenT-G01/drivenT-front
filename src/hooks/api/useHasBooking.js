import * as bookingApiByUserId from '../../services/getBookingByUserIdApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function userHasBooking() {
  const token = useToken();
  const {
    data: userHasBooking,
    loading: userHasBookingLoading,
    error: userHasBookingError,
    act: userHasBookingFunction,
  } = useAsync((userId) => bookingApiByUserId.getBookingByUserId(token, userId), false);

  return { userHasBooking, userHasBookingLoading, userHasBookingError, userHasBookingFunction };
}
