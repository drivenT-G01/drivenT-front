import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activitiesApi from '../../services/activitiesApi';

export default function useActivities() {
  const token = useToken();

  const {
    data,
    loading: activitiesLoading,
    error: activitiesError,
    act: activitiesFunction,
  } = useAsync((id) => activitiesApi.getActivitiesByScheduleId(id, token), false);

  return { activitiesData: data || [], activitiesLoading, activitiesError, activitiesFunction };
}
