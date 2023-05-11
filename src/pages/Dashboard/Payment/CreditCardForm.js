import Cards from 'react-credit-cards';
import Input from '../../../components/Form/Input';
import { useState } from 'react';
import styled from 'styled-components';

export default function CreditCardForm() {
  const [number, setNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [issuer, setIssuer] = useState('');
  const [focus, setFocus] = useState('');
  const [name, setName] = useState('');
  const [cvc, setCvc] = useState('');

  const onFocusHandler = ({ target: { name } }) => setFocus(name);
  const onChangeHandler = ({ target: { value } }, setValueFunction) => setValueFunction(value);

  const onBlurHandler = ({ currentTarget }) => {
    requestAnimationFrame(() => {
      if (!currentTarget.contains(document.activeElement)) setFocus('');
    });
  };

  return (
    <Container>
      <CardContainer>
        <Cards
          focused={focus}
          {...{ number, expiry, name, cvc, issuer }}
          callback={({ issuer }) => setIssuer(issuer)}
        />
      </CardContainer>

      <Form onBlur={onBlurHandler}>
        <StyledInput
          label="Number"
          name="number"
          type="text"
          mask="9999 9999 9999 9999"
          value={number}
          onChange={(e) => onChangeHandler(e, setNumber)}
          onFocus={onFocusHandler}
        />

        <StyledInput
          label="Name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => onChangeHandler(e, setName)}
          onFocus={onFocusHandler}
        />

        <InputContainer>
          <InputWrapper>
            <StyledInput
              label="Valid Thru"
              name="expiry"
              type="text"
              mask="99/99"
              value={expiry}
              onChange={(e) => onChangeHandler(e, setExpiry)}
              onFocus={onFocusHandler}
            />
          </InputWrapper>
          <InputWrapper>
            <StyledInput
              label="CVC"
              name="cvc"
              type="text"
              mask="999"
              value={cvc}
              onChange={(e) => onChangeHandler(e, setCvc)}
              onFocus={onFocusHandler}
            />
          </InputWrapper>
        </InputContainer>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

const CardContainer = styled.div`
  margin-right: 30px;

  @media screen and (max-width: 750px) {
    margin-right: 0px;
    margin-bottom: 15px;
  }
`;

const Form = styled.form`
  max-width: 290px;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputWrapper = styled.div`
  width: 47%;
`;

const StyledInput = styled(Input)`
  margin-bottom: 8px !important;

  input {
    text-transform: uppercase;
  }
`;
