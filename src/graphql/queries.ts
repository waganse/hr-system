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
      nextToken
    }
  }
`;
export const getWorkHour = /* GraphQL */ `
  query GetWorkHour($id: ID!) {
    getWorkHour(id: $id) {
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
export const listWorkHours = /* GraphQL */ `
  query ListWorkHours(
    $filter: ModelWorkHourFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkHours(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
export const searchEmployees = /* GraphQL */ `
  query SearchEmployees(
    $filter: SearchableEmployeeFilterInput
    $sort: SearchableEmployeeSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchEmployees(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      total
    }
  }
`;
export const searchWorkHours = /* GraphQL */ `
  query SearchWorkHours(
    $filter: SearchableWorkHourFilterInput
    $sort: SearchableWorkHourSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchWorkHours(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const searchDepartments = /* GraphQL */ `
  query SearchDepartments(
    $filter: SearchableDepartmentFilterInput
    $sort: SearchableDepartmentSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchDepartments(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const searchEmploymentTypes = /* GraphQL */ `
  query SearchEmploymentTypes(
    $filter: SearchableEmploymentTypeFilterInput
    $sort: SearchableEmploymentTypeSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchEmploymentTypes(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
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
      total
    }
  }
`;
