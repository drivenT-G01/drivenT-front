import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export default function DashboardPageContainer({ title = '', children }) {
  return (
    <>
      <StyledTypography variant="h4">{title}</StyledTypography>
      {children}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
