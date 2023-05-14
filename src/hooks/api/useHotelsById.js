import * as hotelApiById from '../../services/hotelIdApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useHotelsById() {
  const token = useToken();

  const {
    data: hotelById,
    loading: hotelByIdLoading,
    error: hotelByIdError,
    act: hotelByIdFunction,
  } = useAsync((hotelId) => hotelApiById.getHotelById(token, hotelId), false);

  return { hotelById, hotelByIdLoading, hotelByIdError, hotelByIdFunction };
}
