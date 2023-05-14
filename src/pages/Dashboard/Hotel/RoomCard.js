import styled from 'styled-components';
import { HiUser, HiOutlineUser } from 'react-icons/hi';
export default function RoomCard({ name, capacity, bookings, selected, disabled, onClick }) {
  const renderVacanciesIcons = () => {
    const icons = [];
    for (let i = 0; i < capacity - bookings; i++) {
      icons.push(
        <HiOutlineUser
          key={i}
          className={selected && i === 0 ? 'selected' : ''}
          onClick={() => handleVacancyClick(i)}
        />
      );
    }
    for (let i = capacity; i < bookings + capacity; i++) {
      icons.push(<HiUser key={i} />);
    }
    return icons;
  };

  const handleVacancyClick = (vacancyIndex) => {
    if (selected && vacancyIndex === 0) {
      // Remove a seleção se a vaga já estiver selecionada
      onClick();
    }
  };

  return (
    <Container selected={selected} onClick={onClick} disabled={disabled}>
      <RoomNumber>
        <h1>{name}</h1>
      </RoomNumber>
      <Occupants>{renderVacanciesIcons()}</Occupants>
    </Container>
  );
}

const Container = styled.div`
  min-height: 45px;
  min-width: 190px;

  margin-right: 24px;
  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  padding-left: 13px;

  border-radius: 10px;
  border: 1px solid #cecece;

  background-color: ${({ selected, disabled }) => (selected ? '#FFEED2' : disabled ? '#cccccc' : '#ffffff')};

  font-size: 14px;
  color: #898989;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  svg {
    font-size: 24px;
    margin-right: 3px;
  }
  p {
    color: #454545;
    margin-bottom: 8px;
    font-size: 12px;
    padding-top: 2px;
  }
  h1 {
    color: #000000;
    font-size: 18px;
  }

  .selected {
    fill: #ff4791;
  }
`;

const RoomNumber = styled.div``;
const Occupants = styled.div``;
