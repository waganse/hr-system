import { Auth } from 'aws-amplify';

export const networkFetchAuthState = async () => {
  return await Auth.currentAuthenticatedUser();
}

export const networkSignIn = async (name: string, password: string) => {
  const response = await Auth.signIn(name, password);

  if (!response) {
    throw new Error();
  }

  return response;
}

export const networkSignOut = async () => {
  return await Auth.signOut();
}
