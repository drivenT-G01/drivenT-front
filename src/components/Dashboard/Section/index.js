import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export default function Section({ title = '', children }) {
  return (
    <Container>
      <StyledTypography>{title}</StyledTypography>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 10px !important;
  font-size: 20px !important;
  color: #8e8e8e;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 44px;
`;

const ChildrenContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
