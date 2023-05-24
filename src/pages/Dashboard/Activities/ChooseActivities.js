import styled from 'styled-components';
import ActivityDayFilter from './ActivityDayFilter';
import ActivityContext from '../../../contexts/ActivityContext';
import { useEffect, useState } from 'react';
import useScheduleById from '../../../hooks/api/useScheduleById';

export default function ChooseActivity() {
  const { scheduleByIdLoading, scheduleByIdFunction } = useScheduleById();
  const [scheduleDays, setScheduleDays] = useState([]);
  
  useEffect(async() => {
    if (!scheduleByIdLoading) {
      try {
        const scheduleId = await scheduleByIdFunction(1);
        setScheduleDays(scheduleId);
      } catch (error) {
        console.log(error.message);
      }
    }
  }, []);
  
  console.log(scheduleDays);
  
  return (
    <ChooseActivityContainer>
      {scheduleByIdLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Primeiro, filtre pelo dia do evento</h1>
          {/* <ActivityDayFilter></ActivityDayFilter> */}
        </>
      )}
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
