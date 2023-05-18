import useAsync from '../useAsync';

import * as authApi from '../../services/authApi';

export default function useGitHubSignIn() {
  const {
    loading: gitHubSignInLoading,
    error: gitHubSignInError,
    act: gitHubSignIn,
  } = useAsync((code) => authApi.signInWithGitHub(code), false);

  return {
    gitHubSignInLoading,
    gitHubSignInError,
    gitHubSignIn,
  };
}
