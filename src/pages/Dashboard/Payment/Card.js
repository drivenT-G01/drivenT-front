import { useState } from 'react';
import styled from 'styled-components';

export default function Card({ title, description = '', disableSelection = false, stretch = false }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Container
      activeColor={isSelected && '#FFEED2'}
      customWidth={stretch && '290px'}
      customHeight={stretch && '108px'}
      onClick={() => {
        if (disableSelection) return;
        setIsSelected(!isSelected);
      }}
    >
      <p>{title}</p>
      {description}
    </Container>
  );
}

const Container = styled.div`
  height: ${({ customHeight }) => customHeight || '145px'};
  width: ${({ customWidth }) => customWidth || '145px'};

  margin-right: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 20px;
  border: 1px solid ${({ activeColor }) => activeColor || '#cecece'};

  background-color: ${({ activeColor }) => activeColor};

  font-size: 14px;
  color: #898989;

  p {
    color: #454545;
    margin-bottom: 10px;
    font-size: 16px;
  }
`;
