import styled from 'styled-components';
import ActivityDayCard from './ActivityDayCard';
import { useContext } from 'react';
import ScheduleContext from '../../../contexts/ScheduleContext';

export default function ActivityDayFilter({ schedule }) {
  const { setSelectedSchedule, selectedSchedule } = useContext(ScheduleContext);

  const uniqueDates = new Set();

  schedule.forEach((schedule) => {
    const activityDate = new Date(schedule.date).toDateString();
    uniqueDates.add({ activityDate, id: schedule.id });
  });

  const uniqueDatesArray = Array.from(uniqueDates).sort((a, b) => {
    const dateA = new Date(a.activityDate);
    const dateB = new Date(b.activityDate);
    return dateA - dateB;
  });

  return (
    <ActivityDayFilterContainer>
      {uniqueDatesArray.map((date) => (
        <ActivityDayCard
          key={date.id}
          date={date.activityDate}
          isSelected={date.id === selectedSchedule}
          onClick={() => setSelectedSchedule(date.id)}
        />
      ))}
    </ActivityDayFilterContainer>
  );
}

const ActivityDayFilterContainer = styled.main`
  display: flex;
  margin-top: 10px;
`;
