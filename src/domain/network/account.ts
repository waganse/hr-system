import { Auth, API } from 'aws-amplify';
import { AccountMaster } from '../../typings';
import { message } from 'antd';

export const networkAddAccount = async ({ username, password, group }: { username: string; password: string; group: string }) => {
  try {
    const user = await Auth.signUp({username, password});
    console.clear();
console.log('===================');
console.log(user);
console.log('===================');
  } catch(e) {
    message.error('Failed to create');
  }
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
      queryStringParameters: {
      },
      headers: {
        'Content-Type' : 'application/json',
        Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
      }
  }

  const accounts = await API.get(apiName, path, myInit);

  return Promise.all(
    await accounts.Users.map(async (item: any) => {
      const apiName = 'AdminQueries';
      const path = '/listGroupsForUser';
      const myInit = {
          queryStringParameters: {
            username: item.Username,
          },
          headers: {
            'Content-Type' : 'application/json',
            Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
          }
      }

      const group = await API.get(apiName, path, myInit);

      return {...item, ...group};
    })
  );
}