import styled from 'styled-components';
import ActivityDayCard from './ActivityDayCard';

export default function ActivityDayFilter({ schedule }) {
  const uniqueDates = new Set();

  schedule.forEach((schedule) => {
    const activityDate = new Date(schedule.date).toDateString();
    uniqueDates.add(activityDate);
  });

  const uniqueDatesArray = Array.from(uniqueDates).sort((a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateA - dateB;
  }); 

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
