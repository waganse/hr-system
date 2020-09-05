import _ from 'lodash';
import { networkFetchEmployeeList } from '../../domain/network';
import { EmployeeMaster } from '../../typings';

const employeeStateKeys = [
  'fullName',
  'email',
  'designation',
  'department',
  'employmentType',
  'age',
  'address',
  'contact',
];

export const normalizeEmployeeImportObj = (jsonObjList: any) => {
  return jsonObjList.map((obj: any) => {
    const _obj = {};
    _.each(employeeStateKeys, (key => {
      _obj[key] = obj[key];
    }));

    return _obj;
  });
}

export const validateUserAccount = async (employeeList: EmployeeMaster[]) => {
  const response = await Promise.all(
    employeeList.map(async (item: EmployeeMaster) => {
      const email = item.email as string;

      const filter = {
        or: [
        { email: { eq: email, },},
        { email: { eq: email.toUpperCase(), },},
        { email: { eq: email.toLowerCase(), },},
        ]
      };

      const result = await networkFetchEmployeeList({ filter });
      item.id = result.items.length ? result.items[0].id : null;
      item.isNew = result.items.length ? false : true;

      return item;
    })
  );

  return response;
}

