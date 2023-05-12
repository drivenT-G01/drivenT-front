import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export default function DashboardPageContainer({ title = '', message = '', children }) {
  return (
    <Container>
      <StyledTypography variant="h4">{title}</StyledTypography>
      {message && <OverlayMessage>{message}</OverlayMessage>}
      {children}
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
  z-index: 3;
`;

const OverlayMessage = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 15%;

  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 2;

  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-size: 20px;
  color: #8e8e8e;
`;
