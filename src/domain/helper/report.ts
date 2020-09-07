import { PayrollMaster, DepartmentMaster, EmployeeMaster } from "../../typings";
import { getTotalWage } from "./payroll";

export const getTotalWageByDepartment = (
  payrollList: PayrollMaster[],
  departmentList: DepartmentMaster[],
  targetMonthYear: string) => {

  let totalAmount = 0;
  const targetMonthPayroll = payrollList.filter(item => {
      return item.workedMonthYear === targetMonthYear;
  });

  const totalWageData = departmentList.map(dept => {
    const targetDeptTotal = targetMonthPayroll.reduce((acc, item) => {
      console.log(acc, item, dept.name)
      return item.employee?.department === dept.name ? acc + getTotalWage(item.employee as EmployeeMaster, item) : acc;
    }, 0);

    totalAmount += targetDeptTotal;

    return {
      id: dept.name,
      label: dept.name,
      value: targetDeptTotal,
    }
  });

  return { totalWageData, totalAmount };
};