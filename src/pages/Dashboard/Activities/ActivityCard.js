import styled from 'styled-components';

import { CgEnter } from 'react-icons/cg';
import { ImCancelCircle } from 'react-icons/im';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import useCreateNewActivity from '../../../hooks/api/useCreateActivity';
import { toast } from 'react-toastify';

const ActivityCard = ({ id, name, startsAt, endsAt, slots, isAvailable = true, sizeFactor = 1, isSubscribed = false }) => {
  
  const { createNewActivitiesFunction } = useCreateNewActivity()

  async function makeTheReserve(){
    try{
      await createNewActivitiesFunction(id)

      toast(`Inscrição para ${name} realizada com sucesso!`)
    }catch(err){
      toast(`ocorreu um erro, tente novamente em alguns segundos COD: ${err.message}`)
    }
  }
  
  return (
    <Container {...{ sizeFactor, isAvailable, isSubscribed }} disabled={!slots}>
      <LeftSide>
        <Title>{name}</Title>
        <p>
          {startsAt} - {endsAt}
        </p>
      </LeftSide>
      <Divisor {...{ isSubscribed }} />
      <RightSide isAvailable={isAvailable || isSubscribed}>
        {isSubscribed ? (
          <>
            <AiOutlineCheckCircle size={20} strokeWidth={30} color="#078632" />
            <p>Inscrito</p>
          </>
        ) : isAvailable ? (
          <div onClick={makeTheReserve}>
            <CgEnter size={20} color="#078632" />
            <p>{slots} vagas</p>
          </div>
        ) : (
          <>
            <ImCancelCircle size={20} color="#CC6666" />
            <p>Esgotado</p>
          </>
        )}
      </RightSide>
    </Container>
  );
};

const Container = styled.button`
  border: none;
  width: 100%;
  margin-bottom: 10px;
  height: ${({ sizeFactor }) => `${sizeFactor * 80 + (sizeFactor - 1) * 10}px`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ isSubscribed }) => (isSubscribed ? '#D0FFDB' : '#f1f1f1')};
  border-radius: 5px;
  padding: 12px 10px;
  cursor: ${({ isAvailable, isSubscribed }) => (isSubscribed ? 'default' : isAvailable ? 'pointer' : 'not-allowed')};
`;

const RightSide = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;

  p {
    color: ${({ isAvailable }) => (isAvailable ? '#078632' : '#CC6666')};
    font-size: 9px;
    margin-top: 6px;
  }
`;

const LeftSide = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 75%;
  font-size: 12px;
  color: #343434;
`;

const Title = styled.p`
  font-weight: 700;
  margin-bottom: 6px;
  text-align: start;
`;

const Divisor = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${({ isSubscribed }) => (isSubscribed ? '#99E8A1' : '#cfcfcf')};
`;

export default ActivityCard;
