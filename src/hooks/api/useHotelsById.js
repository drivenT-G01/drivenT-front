import * as hotelApiById from '../../services/hotelIdApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useHotelsById(hotelId) {
  const token = useToken();

  const {
    data: hotelById,
    loading: hotelByIdLoading,
    error: hotelByIdError,
    act: hotelByIdFunction,
  } = useAsync(() => hotelApiById.getHotelById(token, hotelId));

  return { hotelById, hotelByIdLoading, hotelByIdError, hotelByIdFunction };
}
