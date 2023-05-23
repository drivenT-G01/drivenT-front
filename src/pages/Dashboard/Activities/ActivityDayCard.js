import styled from 'styled-components';

export default function ActivityDayCard({ activities }) {
  return (
    <ActivityDayCardContainer>

    </ActivityDayCardContainer>
  );
}

const ActivityDayCardContainer = styled.main`
  display: flex;
  width: 6.5rem;
  height: 2.2rem;
  align-items: center;
  flex-direction: column;
  background-color: #E0E0E0;
  margin-right: 1rem;
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
