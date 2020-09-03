/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
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
      joinDate
      image {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        joinDate
        image {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPayroll = /* GraphQL */ `
  query GetPayroll($id: ID!) {
    getPayroll(id: $id) {
      id
      hoursWorked
      bonus
      workedMonthYear
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
        joinDate
        image {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPayrolls = /* GraphQL */ `
  query ListPayrolls(
    $filter: ModelPayrollFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayrolls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        hoursWorked
        bonus
        workedMonthYear
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
          joinDate
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDepartment = /* GraphQL */ `
  query GetDepartment($id: ID!) {
    getDepartment(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listDepartments = /* GraphQL */ `
  query ListDepartments(
    $filter: ModelDepartmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEmploymentType = /* GraphQL */ `
  query GetEmploymentType($id: ID!) {
    getEmploymentType(id: $id) {
      id
      name
      useSalary
      useRate
      useFixedRate
      useCommission
      createdAt
      updatedAt
    }
  }
`;
export const listEmploymentTypes = /* GraphQL */ `
  query ListEmploymentTypes(
    $filter: ModelEmploymentTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmploymentTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        useSalary
        useRate
        useFixedRate
        useCommission
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
