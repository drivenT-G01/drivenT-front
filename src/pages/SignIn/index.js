import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import qs from 'query-string';

import AuthLayout from '../../layouts/Auth';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import Link from '../../components/Link';
import { Row, Title, Label } from '../../components/Auth';
import OAuthButton from '../../components/Form/OAuthButton';

import EventInfoContext from '../../contexts/EventInfoContext';
import UserContext from '../../contexts/UserContext';

import useSignIn from '../../hooks/api/useSignIn';

import gitHubLogo from '../../assets/images/github-mark-white.svg';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loadingSignIn, signIn } = useSignIn();

  const { eventInfo } = useContext(EventInfoContext);
  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();

    try {
      const userData = await signIn(email, password);
      setUserData(userData);
      toast('Login realizado com sucesso!');
      navigate('/dashboard');
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  }

  async function handleGitHubOAuth() {
    const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

    const params = {
      response_type: 'code',
      scope: 'user',
      client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
      redirect_uri: process.env.REACT_APP_GITHUB_REDIRECT_URL,
    };

    const queryString = qs.stringify(params);
    const authUrl = `${GITHUB_URL}?${queryString}`;

    window.location.href = authUrl;
  }

  return (
    <AuthLayout background={eventInfo.backgroundImageUrl}>
      <Row>
        <img src={eventInfo.logoImageUrl} alt="Event Logo" width="60px" />
        <Title>{eventInfo.title}</Title>
      </Row>
      <Row>
        <Label>Entrar</Label>
        <form onSubmit={submit}>
          <Input label="E-mail" type="text" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input
            label="Senha"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignIn}>
            Entrar
          </Button>
          <OAuthButton
            bgcolor="#222222"
            color="white"
            logoImage={gitHubLogo}
            fullWidth
            onClickHandler={handleGitHubOAuth}
          >
            Entrar com GitHUb
          </OAuthButton>
        </form>
      </Row>
      <Row>
        <Link to="/enroll">Não possui login? Inscreva-se</Link>
      </Row>
    </AuthLayout>
  );
}
