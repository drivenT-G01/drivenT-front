import styled from 'styled-components';
import ActivityDayCard from './ActivityDayCard';

export default function ActivityDayFilter({ activities }) {
  console.log(activities);
  return (
    <ActivityDayFilterContainer>
      {activities.map((activity) => (
        <ActivityDayCard
          key={activity.id}
          name={activity.name}
        />
      ))}
    </ActivityDayFilterContainer>
  );
}

const ActivityDayFilterContainer = styled.main`
    display: flex;
`;
