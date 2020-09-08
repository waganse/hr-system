import { Auth, API } from 'aws-amplify';
import { AccountMaster } from '../../typings';

export const networkAddAccount = async ({ username, password, group }: { username: string; password: string; group: string }) => {
  return await Auth.signUp({
    username,
    password,
    attributes: {
      'custom:userGroup': group
    }
  });
}

// export const networkUpdateAccount = async ({ username, password, group }: { username: string; password: string; group: string }) => {
//   try {
//     return await Auth.verifyUserAttribute();
//   } catch(e) {
//     message.error(e.message);
//   }
// }

export const networkVerifyAccount = async (username: string, code: string) => {
  return await Auth.confirmSignUp(username, code);
}

export const networkDisableAccount = async (username: string) => {
  let apiName = 'AdminQueries';
  let path = '/disableUser';
  let myInit = {
      body: {
        "username" : username,
      },
      headers: {
        'Content-Type' : 'application/json',
        Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
      }
  }
  return await API.post(apiName, path, myInit);
}

export const networkAddAccountToGroup = async (username: string, groupname: string) => {
  let apiName = 'AdminQueries';
  let path = '/addUserToGroup';
  let myInit = {
      body: {
        "username" : username,
        "groupname": groupname,
      },
      headers: {
        'Content-Type' : 'application/json',
        Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
      }
  }
  return await API.post(apiName, path, myInit);
}

export const networkRemoveAccountFromGroup = async (username: string, groupname: string) => {
  let apiName = 'AdminQueries';
  let path = '/removeUserFromGroup';
  let myInit = {
      body: {
        "username" : username,
        "groupname": groupname,
      },
      headers: {
        'Content-Type' : 'application/json',
        Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
      }
  }
  return await API.post(apiName, path, myInit);
}

export const networkFetchManyAccounts = async (): Promise<AccountMaster[]> => {
  const apiName = 'AdminQueries';
  const path = '/listUsers';
  const myInit = {
      queryStringParameters: {},
      headers: {
        'Content-Type' : 'application/json',
        Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
      }
  }

  const accounts = await API.get(apiName, path, myInit);

  return accounts.Users.filter(({ Enabled }: {Enabled: boolean}) => Enabled);
}