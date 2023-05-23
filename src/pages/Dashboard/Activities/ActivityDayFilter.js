import styled from 'styled-components';
import ActivityDayCard from './ActivityDayCard';

export default function ActivityDayFilter({ activities }) {
  const uniqueDates = new Set();

  activities.forEach((activity) => {
    const activityDate = new Date(activity.schedule.date).toDateString();
    uniqueDates.add(activityDate);
  });

  const uniqueDatesArray = Array.from(uniqueDates).sort((a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateA - dateB;
  }); 
  console.log(uniqueDatesArray);
  return (
    <ActivityDayFilterContainer>
      {uniqueDatesArray.map((date) => (
        <ActivityDayCard
          key={date}
          date={date}
        />
      ))}
    </ActivityDayFilterContainer>
  );
}

const ActivityDayFilterContainer = styled.main`
    display: flex;
`;
