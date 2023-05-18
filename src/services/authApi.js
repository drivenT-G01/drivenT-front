import api from './api';

export async function signIn(email, password) {
  const response = await api.post('/auth/sign-in', { email, password });
  return response.data;
}

export async function signInWithGitHub(code) {
  const { data } = await api.post('/auth/oauth-github', { code });
  return data;
}
