import ActivityDayFilter from './ActivityDayFilter';
import { useContext } from 'react';
import ScheduleContext from '../../../contexts/ScheduleContext';
import Section from '../../../components/Dashboard/Section';

export default function ChooseActivity() {
  const { schedule, scheduleLoading, selectedSchedule } = useContext(ScheduleContext);
  if (scheduleLoading) return <div>Loading...</div>;

  return (
    <Section title={!selectedSchedule && 'Primeiro, filtre pelo dia do evento'}>
      <ActivityDayFilter {...{ schedule }}></ActivityDayFilter>
    </Section>
  );
}
