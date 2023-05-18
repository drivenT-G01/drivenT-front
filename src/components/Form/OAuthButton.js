import MuiButton from '@material-ui/core/Button';
import styled from 'styled-components';

export default function OAuthButton({ logoImage, onClickHandler = () => {}, children, ...props }) {
  return (
    <StyledMuiButton variant="contained" {...props} onClick={onClickHandler}>
      <LogoImage src={logoImage} alt="logo" />
      {children}
    </StyledMuiButton>
  );
}

const StyledMuiButton = styled(MuiButton)`
  margin-top: 8px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 8px !important;

  background-color: ${({ bgcolor }) => bgcolor} !important;
  color: ${({ textcolor }) => textcolor} !important;
`;

const LogoImage = styled.img`
  height: 25px;
  margin-right: 20px;
`;
