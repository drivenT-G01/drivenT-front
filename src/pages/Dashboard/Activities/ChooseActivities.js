import styled from 'styled-components';
import ActivityDayFilter from './ActivityDayFilter';
import ActivityContext from '../../../contexts/ActivityContext';
import { useContext } from 'react';

export default function ChooseActivity() {
  const { activities, activitiesLoading } = useContext(ActivityContext);
  if (activitiesLoading) return <div>Loading...</div>;
  return (
    <ChooseActivityContainer>
      <h1>Primeiro, filtre pelo dia do evento</h1>
      <ActivityDayFilter activities = {activities}></ActivityDayFilter>
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
