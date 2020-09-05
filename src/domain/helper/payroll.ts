import { networkFetchPayrollList } from '../../domain/network';
import { EmployeeMaster } from '../../typings';
import { EMPLOYMENT_TYPE } from '../../domain/store/store';

export const validatePayrollInfo = async (employeeId: string, targetMonthYear: string) => {
  const item = {
    id: null,
    isNew: true,
  };

  const filter = {
    and: [
      { employeeId: { eq: employeeId, },},
      { workedMonthYear: { eq: targetMonthYear, },},
    ]
  };

  console.log('VALID===================');
  console.log(filter, employeeId);
  console.log('===================');

  const result = await networkFetchPayrollList({ filter });

  if (result.items?.length) {
    item.id = result.items[0].id;
    item.isNew = false;
  }

  return item;
};

export const getTotalWage = (employee: EmployeeMaster, payroll: any) => {
  let totalWage = 0;

console.log('===================');
console.log(employee, payroll);
console.log('===================');
  const salary = employee?.salary as number || 0;
  const rate = employee?.rate as number || 0;
  const fixedRate = employee?.fixedRate as number || 0;
  const commission = employee?.commission as number || 0;
  const bonus = payroll?.bonus || 0;
  const hoursWorked = payroll?.hoursWorked || 0;

  switch (employee.employmentType) {
    case EMPLOYMENT_TYPE.FULL_TIME:
      totalWage = salary + bonus;
      break;
    case EMPLOYMENT_TYPE.PART_TIME_COMMISSIONED:
      totalWage = rate * hoursWorked +
        rate * commission * 0.01;
      break;
    case EMPLOYMENT_TYPE.PART_TIME_FIXED:
      totalWage = rate * hoursWorked + fixedRate;
      break;
    case EMPLOYMENT_TYPE.INTERN:
      totalWage = salary;
      break;
  }

  return totalWage;
};
