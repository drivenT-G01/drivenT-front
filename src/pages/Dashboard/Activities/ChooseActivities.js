import styled from 'styled-components';
import ActivityDayFilter from './ActivityDayFilter';
import { useContext } from 'react';
import ScheduleContext from '../../../contexts/ScheduleContext';

export default function ChooseActivity() {
  const { schedule, scheduleLoading } = useContext(ScheduleContext);
  if (scheduleLoading) return <div>Loading...</div>;

  return (
    <ChooseActivityContainer>
      <h1>Primeiro, filtre pelo dia do evento</h1>
      <ActivityDayFilter schedule = {schedule}></ActivityDayFilter>
    </ChooseActivityContainer>
  );
}

const ChooseActivityContainer = styled.main`
    display: flex;
    flex-direction: column;
    h1{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 24px;
        color: #8E8E8E;
    }
`;
