/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
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
export const onCreateWorkHour = /* GraphQL */ `
  subscription OnCreateWorkHour {
    onCreateWorkHour {
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
export const onUpdateWorkHour = /* GraphQL */ `
  subscription OnUpdateWorkHour {
    onUpdateWorkHour {
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
export const onDeleteWorkHour = /* GraphQL */ `
  subscription OnDeleteWorkHour {
    onDeleteWorkHour {
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
      createdAt
      updatedAt
    }
  }
`;
