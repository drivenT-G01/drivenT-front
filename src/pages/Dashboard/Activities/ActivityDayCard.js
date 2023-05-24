import styled from 'styled-components';

export default function ActivityDayCard({ date }) {
  const options = { weekday: 'long', day: 'numeric', month: 'numeric' };
  const formattedDate = new Date(date).toLocaleDateString('pt-BR', options);
  const weekday = formattedDate.split(', ')[0].replace('-feira', '');
  const numericDate = formattedDate.split(', ')[1];

  return (
    <ActivityDayCardContainer>
      <h2>{weekday}, {numericDate}</h2>
    </ActivityDayCardContainer>
  );
}

const ActivityDayCardContainer = styled.main`
  display: flex;
  width: 6.5rem;
  height: 2.2rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #E0E0E0;
  margin-right: 1rem;
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  h2{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 17px;
    color: black;
  }
`;
