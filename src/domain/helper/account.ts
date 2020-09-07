import { AccountMaster } from "../../typings";
import moment from 'moment';
import { DATE_FORMAT } from "../store/store";

export const normalizeFetchedAccounts = (accounts: any): AccountMaster[] => {
  return accounts.map((item: any) => {
    const id = item.Attributes.filter(({ Name }: { Name: string }) => {
      return Name === 'email'
    })[0].Value;

    const group = item.Groups.map(({ GroupName }: { GroupName: string }) => {
      return GroupName;
    })[0];

    return {
      id,
      group,
      updatedAt: moment(item.UserLastModifiedDate).format(DATE_FORMAT),
      createdAt: moment(item.UserCreateDate).format(DATE_FORMAT),
      cognitoId: item.Username,
    }
  });
};
