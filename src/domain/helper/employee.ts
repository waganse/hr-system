import _ from 'lodash';
import { networkFetchEmployeeList } from '../../domain/network';
import { EmployeeMaster, DepartmentMaster, EmploymentTypeMaster } from '../../typings';
import { message } from 'antd';

const employeeStateKeys = [
  'fullName',
  'email',
  'designation',
  'department',
  'employmentType',
  'age',
  'address',
  'contact',
  'joinDate',
];

export const normalizeEmployeeImportObj = (jsonObjList: any, departmentList: DepartmentMaster[], employmentTypeList: EmploymentTypeMaster[]) => {
  const departments = departmentList.map(item => {
    return item.name;
  });
  const employmentTypes = employmentTypeList.map(item => {
    return item.name;
  });

  return jsonObjList.map((obj: any) => {
    const _obj = {};
    _.each(employeeStateKeys, (key => {
      let value = obj[key];

      switch (key) {
        case 'department':
          if (!departments.includes(value)) {
            message.error(`Invalid department: ${value}`);
            value = '';
          }
          break;
        case 'employmentType':
          if (!employmentTypes.includes(value)) {
            message.error(`Invalid employment type: ${value}`);
            value = '';
          }
          break;
      }

      _obj[key] = value;
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

