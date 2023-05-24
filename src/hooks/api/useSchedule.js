import * as scheduleApi from '../../services/getAllScheduleDates';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useSchedule() {
  const token = useToken();

  const {
    data: schedule,
    loading: scheduleLoading,
    error: scheduleError,
    act: scheduleFunction,
  } = useAsync(() => scheduleApi.getAllScheduleDates(token));

  return { schedule, scheduleLoading, scheduleError, scheduleFunction };
}
