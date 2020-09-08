import { Auth } from 'aws-amplify';

export const networkFetchAuthState = async () => {
  return await Auth.currentAuthenticatedUser();
}

export const networkSignIn = async (name: string, password: string) => {
  return await Auth.signIn(name, password);
}

export const networkSignOut = async () => {
  return await Auth.signOut();
}
