import 'react-credit-cards/es/styles-compiled.css';
import Cards from 'react-credit-cards';
import Input from '../../../components/Form/Input';
import { useState, useCallback } from 'react';
import styled from 'styled-components';
import Button from '../../../components/Form/Button';
import { useContext } from 'react';
import TicketContext from '../../../contexts/TicketContext';
import { toast } from 'react-toastify';
import useProcessPayment from '../../../hooks/api/useProcessPayment';

export default function CreditCardForm() {
  const [focus, setFocus] = useState('');
  const [cardData, setCardData] = useState(
    new Map()
      .set('issuer', '')
      .set('number', '')
      .set('name', '')
      .set('expiry', '')
      .set('cvc', '')
  );

  const {
    ticket: { id: ticketId },
    refreshTicket,
  } = useContext(TicketContext);

  const onChangeHandler = ({ target: { name, value } }) => {
    if (name === 'number') value.replaceAll(' ', '');
    setCardData(new Map(cardData.set(name, value)));
  };

  const onFocusHandler = ({ target: { name } }) => setFocus(name);

  const onBlurHandler = ({ currentTarget }) => {
    requestAnimationFrame(() => {
      if (!currentTarget.contains(document.activeElement)) setFocus('');
    });
  };

  const validateFields = () => {
    const [issuer, number, name, expiry, cvc] = [...cardData.values()];

    if (issuer === 'unknown' || number.length < 16) throw new Error('Número de cartão inválido!');
    if (!name) throw new Error('Preencha o campo nome!');
    if (!expiry || expiry.length < 5) throw new Error('Preencha o campo de validade!');
    if (!cvc || cvc.length < 3) throw new Error('Preencha o campo CVC!');
  };

  const { paymentLoading, paymentFunction } = useProcessPayment();

  const submit = useCallback(async() => {
    try {
      validateFields();
    } catch (error) {
      toast(error.message);
      return;
    }

    const paymentData = { ticketId, cardData: Object.fromEntries(cardData) };

    try {
      await paymentFunction(paymentData);
      toast('Pagamento feito!');
      refreshTicket();
    } catch (error) {
      toast('Não foi possível realizar o pagamento!');
    }
  });

  return (
    <Container>
      <FormContainer>
        <CardContainer>
          <Cards
            focused={focus}
            {...Object.fromEntries(cardData)}
            callback={({ issuer }) => setCardData(new Map(cardData.set('issuer', issuer)))}
          />
        </CardContainer>

        <Form onBlur={onBlurHandler}>
          <StyledInput
            label="Number"
            name="number"
            type="text"
            mask="9999 9999 9999 9999"
            value={cardData.get('number')}
            onChange={onChangeHandler}
            onFocus={onFocusHandler}
            disabled={paymentLoading}
          />

          <StyledInput
            label="Name"
            name="name"
            type="text"
            value={cardData.get('name')}
            onChange={onChangeHandler}
            onFocus={onFocusHandler}
            disabled={paymentLoading}
          />

          <InputContainer>
            <InputWrapper>
              <StyledInput
                label="Valid Thru"
                name="expiry"
                type="text"
                mask="99/99"
                value={cardData.get('expiry')}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                disabled={paymentLoading}
              />
            </InputWrapper>
            <InputWrapper>
              <StyledInput
                label="CVC"
                name="cvc"
                type="text"
                mask="999"
                value={cardData.get('cvc')}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                disabled={paymentLoading}
              />
            </InputWrapper>
          </InputContainer>
        </Form>
      </FormContainer>
      <Button onClick={submit} disabled={paymentLoading}>
        Finalizar Pagamento
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 750px) {
    align-items: center;
  }
`;

const FormContainer = styled.div`
  margin-bottom: 20px;

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
