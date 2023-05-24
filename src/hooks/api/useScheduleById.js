import * as scheduleById from '../../services/scheduleById';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useScheduleById() {
  const token = useToken();

  const {
    data: scheduleByIdData,
    loading: scheduleByIdLoading,
    error: scheduleByIdError,
    act: scheduleByIdFunction,
  } = useAsync((scheduleId) => scheduleById.getScheduleById(token, scheduleId), false);

  return { scheduleByIdData, scheduleByIdLoading, scheduleByIdError, scheduleByIdFunction };
}
