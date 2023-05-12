import styled from 'styled-components';
import { useState } from 'react';

export default function MakeTheReserve() {
  const [setSelectedTypeOfPayment] = useState(false);
  const [endOfPayment, setEndOfPayment] = useState(false);
  const [value, setValue] = useState(0);
  return (
    <StyledPayment>
      <h1>Ingresso e pagamento</h1>

      <h2>Primeiro, escolha sua modalidade de ingresso</h2>
      <div className="boxClasses">
        <BoxSelect
          onClick={() => {
            setValue(250);
            setEndOfPayment(false);
            setSelectedTypeOfPayment(true);
          }}
        >
          <h3>Presencial</h3>
          <h4>R$ 250</h4>
        </BoxSelect>
        <BoxSelect
          onClick={() => {
            setValue(100);
            setSelectedTypeOfPayment(false);
            setEndOfPayment(true);
          }}
        >
          <h3>Online</h3>
          <h4>R$ 100</h4>
        </BoxSelect>
      </div>

      {endOfPayment && (
        <>
          <h2>
            Fechado! O total ficou <span style={{ fontWeight: 'bold' }}>R$ {value}.</span> Agora só confirmar:
          </h2>
          <button className="finishButton">RESERVAR INGRESSO</button>
        </>
      )}
    </StyledPayment>
  );
}

const StyledPayment = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;

  margin-left: 35px;
  margin-top: 34px;

  h1 {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
  }
  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    margin-top: 37px;
    color: #8e8e8e;
    margin-bottom: 17px;
  }
  .finishButton {
    width: 162px;
    height: 37px;
    left: 335px;
    top: 749px;

    background: #e0e0e0;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    border: 1px;

    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
  }
  .finishButton:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px rgba(145, 92, 182, 0.4);
  }
  .boxClasses {
    display: flex;
    margin-bottom: 7px;
    gap: 25px;
    height: 145px;
  }
`;
const BoxSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  box-sizing: border-box;

  background-color: ${(props) => (props.selected === true ? '' : '#ffffff')};

  width: 145px;
  height: 145px;

  border: 1px solid #cecece;
  border-radius: 20px;

  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
  h4 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #898989;
  }
`;
