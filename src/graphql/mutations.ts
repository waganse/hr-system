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
      designation
      department
      employmentType
      age
      address
      contact
      salary
      rate
      fixedRate
      commission
      hoursWorked
      joinDate
      image {
        bucket
        region
        key
      }
      workHours {
        items {
          id
          hour
          workedOn
          employeeId
          createdAt
          updatedAt
        }
        nextToken
      }
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
      designation
      department
      employmentType
      age
      address
      contact
      salary
      rate
      fixedRate
      commission
      hoursWorked
      joinDate
      image {
        bucket
        region
        key
      }
      workHours {
        items {
          id
          hour
          workedOn
          employeeId
          createdAt
          updatedAt
        }
        nextToken
      }
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
      designation
      department
      employmentType
      age
      address
      contact
      salary
      rate
      fixedRate
      commission
      hoursWorked
      joinDate
      image {
        bucket
        region
        key
      }
      workHours {
        items {
          id
          hour
          workedOn
          employeeId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createWorkHour = /* GraphQL */ `
  mutation CreateWorkHour(
    $input: CreateWorkHourInput!
    $condition: ModelWorkHourConditionInput
  ) {
    createWorkHour(input: $input, condition: $condition) {
      id
      hour
      workedOn
      employeeId
      employee {
        id
        fullName
        email
        designation
        department
        employmentType
        age
        address
        contact
        salary
        rate
        fixedRate
        commission
        hoursWorked
        joinDate
        image {
          bucket
          region
          key
        }
        workHours {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateWorkHour = /* GraphQL */ `
  mutation UpdateWorkHour(
    $input: UpdateWorkHourInput!
    $condition: ModelWorkHourConditionInput
  ) {
    updateWorkHour(input: $input, condition: $condition) {
      id
      hour
      workedOn
      employeeId
      employee {
        id
        fullName
        email
        designation
        department
        employmentType
        age
        address
        contact
        salary
        rate
        fixedRate
        commission
        hoursWorked
        joinDate
        image {
          bucket
          region
          key
        }
        workHours {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteWorkHour = /* GraphQL */ `
  mutation DeleteWorkHour(
    $input: DeleteWorkHourInput!
    $condition: ModelWorkHourConditionInput
  ) {
    deleteWorkHour(input: $input, condition: $condition) {
      id
      hour
      workedOn
      employeeId
      employee {
        id
        fullName
        email
        designation
        department
        employmentType
        age
        address
        contact
        salary
        rate
        fixedRate
        commission
        hoursWorked
        joinDate
        image {
          bucket
          region
          key
        }
        workHours {
          nextToken
        }
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
      createdAt
      updatedAt
    }
  }
`;
