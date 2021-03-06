/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
      id
      fullName
      email
      employmentType
      designation
      department
      age
      address
      contact
      salary
      rate
      fixedRate
      commission
      joinDate
      createdAt
      updatedAt
    }
  }
`;
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
      id
      fullName
      email
      employmentType
      designation
      department
      age
      address
      contact
      salary
      rate
      fixedRate
      commission
      joinDate
      createdAt
      updatedAt
    }
  }
`;
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
      id
      fullName
      email
      employmentType
      designation
      department
      age
      address
      contact
      salary
      rate
      fixedRate
      commission
      joinDate
      createdAt
      updatedAt
    }
  }
`;
export const createPayroll = /* GraphQL */ `
  mutation CreatePayroll(
    $input: CreatePayrollInput!
    $condition: ModelPayrollConditionInput
  ) {
    createPayroll(input: $input, condition: $condition) {
      id
      hoursWorked
      bonus
      workedMonthYear
      employeeId
      employee {
        id
        fullName
        email
        employmentType
        designation
        department
        age
        address
        contact
        salary
        rate
        fixedRate
        commission
        joinDate
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePayroll = /* GraphQL */ `
  mutation UpdatePayroll(
    $input: UpdatePayrollInput!
    $condition: ModelPayrollConditionInput
  ) {
    updatePayroll(input: $input, condition: $condition) {
      id
      hoursWorked
      bonus
      workedMonthYear
      employeeId
      employee {
        id
        fullName
        email
        employmentType
        designation
        department
        age
        address
        contact
        salary
        rate
        fixedRate
        commission
        joinDate
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePayroll = /* GraphQL */ `
  mutation DeletePayroll(
    $input: DeletePayrollInput!
    $condition: ModelPayrollConditionInput
  ) {
    deletePayroll(input: $input, condition: $condition) {
      id
      hoursWorked
      bonus
      workedMonthYear
      employeeId
      employee {
        id
        fullName
        email
        employmentType
        designation
        department
        age
        address
        contact
        salary
        rate
        fixedRate
        commission
        joinDate
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createDepartment = /* GraphQL */ `
  mutation CreateDepartment(
    $input: CreateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    createDepartment(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateDepartment = /* GraphQL */ `
  mutation UpdateDepartment(
    $input: UpdateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    updateDepartment(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteDepartment = /* GraphQL */ `
  mutation DeleteDepartment(
    $input: DeleteDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    deleteDepartment(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createEmploymentType = /* GraphQL */ `
  mutation CreateEmploymentType(
    $input: CreateEmploymentTypeInput!
    $condition: ModelEmploymentTypeConditionInput
  ) {
    createEmploymentType(input: $input, condition: $condition) {
      id
      name
      useBonus
      useSalary
      useRate
      useFixedRate
      useCommission
      createdAt
      updatedAt
    }
  }
`;
export const updateEmploymentType = /* GraphQL */ `
  mutation UpdateEmploymentType(
    $input: UpdateEmploymentTypeInput!
    $condition: ModelEmploymentTypeConditionInput
  ) {
    updateEmploymentType(input: $input, condition: $condition) {
      id
      name
      useBonus
      useSalary
      useRate
      useFixedRate
      useCommission
      createdAt
      updatedAt
    }
  }
`;
export const deleteEmploymentType = /* GraphQL */ `
  mutation DeleteEmploymentType(
    $input: DeleteEmploymentTypeInput!
    $condition: ModelEmploymentTypeConditionInput
  ) {
    deleteEmploymentType(input: $input, condition: $condition) {
      id
      name
      useBonus
      useSalary
      useRate
      useFixedRate
      useCommission
      createdAt
      updatedAt
    }
  }
`;
