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

export const getPdfOptions = (employeeList: EmployeeMaster[]): any => {
  const excludedKeys = ['id', 'updatedAt', 'createdAt', 'salary', 'rate', 'fixedRate', 'commission'];

  let keys: string[] = [];

  const records = employeeList.map(employee => {
    keys = Object.keys(employee).filter(key => !excludedKeys.includes(key));
    return _.compact(_.flatten(keys.map(key => {
      if (excludedKeys.includes(key)) {
        return null;
      }
      return employee[key] ?? '-';
    })));
  });

  return {
    info: {
      title: 'Employee list',
    },
    pageSize: 'A4',
    pageOrientation: 'landscape',
    footer: function(currentPage: number, pageCount: number) {
      return [
        { text: `Employee Management Sytem - ${currentPage.toString()} of ${pageCount}`, alignment: 'right', fontSize: 10, color: '#aaa', margin: [ 0, 0, 30, 10] }
      ]
    },
    content: [
      { text: 'Employee List', margin: [ 0, 16 ], fontSize: 16, bold: true },
      {
        layout: 'lightHorizontalLines',
        fontSize: 10,
        table: {
          // headers are automatically repeated if the table spans over multiple pages
          // you can declare how many rows should be treated as headers
          headerRows: 1,
          body: [ keys, ...records],
        }
      },
    ],
  }
}

