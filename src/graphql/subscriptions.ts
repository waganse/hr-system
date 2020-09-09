/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
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
export const onCreatePayroll = /* GraphQL */ `
  subscription OnCreatePayroll {
    onCreatePayroll {
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
export const onUpdatePayroll = /* GraphQL */ `
  subscription OnUpdatePayroll {
    onUpdatePayroll {
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
export const onDeletePayroll = /* GraphQL */ `
  subscription OnDeletePayroll {
    onDeletePayroll {
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
export const onCreateDepartment = /* GraphQL */ `
  subscription OnCreateDepartment {
    onCreateDepartment {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDepartment = /* GraphQL */ `
  subscription OnUpdateDepartment {
    onUpdateDepartment {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDepartment = /* GraphQL */ `
  subscription OnDeleteDepartment {
    onDeleteDepartment {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEmploymentType = /* GraphQL */ `
  subscription OnCreateEmploymentType {
    onCreateEmploymentType {
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
export const onUpdateEmploymentType = /* GraphQL */ `
  subscription OnUpdateEmploymentType {
    onUpdateEmploymentType {
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
export const onDeleteEmploymentType = /* GraphQL */ `
  subscription OnDeleteEmploymentType {
    onDeleteEmploymentType {
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
