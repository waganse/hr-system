import { AccountMaster } from "../../typings";
import moment from 'moment';
import { DATE_FORMAT } from "../store/store";

export const normalizeFetchedAccounts = (accounts: any): AccountMaster[] => {
  return accounts.map((item: any) => {
    const id = item.Attributes.filter(({ Name }: { Name: string }) => {
      return Name === 'email'
    })[0].Value;

    const filteredGroup = item.Attributes.filter(({ Name }: { Name: string }) => {
      return Name === 'custom:userGroup'
    });
    const group = filteredGroup.length ? filteredGroup[0].Value : 'admin';

    const verified = item.Attributes.filter(({ Name }: { Name: string }) => {
      return Name === 'email_verified'
    })[0].Value;

    return {
      id,
      group,
      verified,
      updatedAt: moment(item.UserLastModifiedDate).format(DATE_FORMAT),
      createdAt: moment(item.UserCreateDate).format(DATE_FORMAT),
      cognitoId: item.Username,
    }
  });
};
