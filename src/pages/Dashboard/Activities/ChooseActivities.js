import styled from 'styled-components';
import ActivityDayFilter from './ActivityDayFilter';

export default function ChooseActivity() {
  return (
    <ChooseActivityContainer>
      <h1>Primeiro, filtre pelo dia do evento</h1>
      <ActivityDayFilter></ActivityDayFilter>
    </ChooseActivityContainer>
  );
}

const ChooseActivityContainer = styled.main`
    display: flex;
    h1{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 24px;
        color: #8E8E8E;
    }
`;
