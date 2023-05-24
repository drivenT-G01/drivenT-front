import * as activityApi from '../../services/getAllActivities';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useActivity() {
  const token = useToken();

  const {
    data: activities,
    loading: activitiesLoading,
    error: activitiesError,
    act: activitiesFunction,
  } = useAsync(() => activityApi.getAllActivities(token));

  return { activities, activitiesLoading, activitiesError, activitiesFunction };
}
