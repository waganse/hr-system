/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEmployeeInput = {
  id?: string | null,
  fullName: string,
  email: string,
  designation: string,
  department: string,
  employmentType: string,
  age?: number | null,
  address?: string | null,
  contact?: string | null,
  salary?: number | null,
  rate?: number | null,
  fixedRate?: number | null,
  commission?: number | null,
  hoursWorked?: number | null,
  joinDate?: string | null,
  image?: S3ObjectInput | null,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelEmployeeConditionInput = {
  fullName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  designation?: ModelStringInput | null,
  department?: ModelStringInput | null,
  employmentType?: ModelStringInput | null,
  age?: ModelIntInput | null,
  address?: ModelStringInput | null,
  contact?: ModelStringInput | null,
  salary?: ModelFloatInput | null,
  rate?: ModelFloatInput | null,
  fixedRate?: ModelFloatInput | null,
  commission?: ModelFloatInput | null,
  hoursWorked?: ModelFloatInput | null,
  joinDate?: ModelStringInput | null,
  and?: Array< ModelEmployeeConditionInput | null > | null,
  or?: Array< ModelEmployeeConditionInput | null > | null,
  not?: ModelEmployeeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateEmployeeInput = {
  id: string,
  fullName?: string | null,
  email?: string | null,
  designation?: string | null,
  department?: string | null,
  employmentType?: string | null,
  age?: number | null,
  address?: string | null,
  contact?: string | null,
  salary?: number | null,
  rate?: number | null,
  fixedRate?: number | null,
  commission?: number | null,
  hoursWorked?: number | null,
  joinDate?: string | null,
  image?: S3ObjectInput | null,
};

export type DeleteEmployeeInput = {
  id?: string | null,
};

export type CreateWorkHourInput = {
  id?: string | null,
  hour: number,
  workedOn: string,
  employeeId: string,
};

export type ModelWorkHourConditionInput = {
  hour?: ModelFloatInput | null,
  workedOn?: ModelStringInput | null,
  employeeId?: ModelIDInput | null,
  and?: Array< ModelWorkHourConditionInput | null > | null,
  or?: Array< ModelWorkHourConditionInput | null > | null,
  not?: ModelWorkHourConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateWorkHourInput = {
  id: string,
  hour?: number | null,
  workedOn?: string | null,
  employeeId?: string | null,
};

export type DeleteWorkHourInput = {
  id?: string | null,
};

export type CreateDepartmentInput = {
  id?: string | null,
  name: string,
};

export type ModelDepartmentConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelDepartmentConditionInput | null > | null,
  or?: Array< ModelDepartmentConditionInput | null > | null,
  not?: ModelDepartmentConditionInput | null,
};

export type UpdateDepartmentInput = {
  id: string,
  name?: string | null,
};

export type DeleteDepartmentInput = {
  id?: string | null,
};

export type CreateEmploymentTypeInput = {
  id?: string | null,
  name: string,
};

export type ModelEmploymentTypeConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelEmploymentTypeConditionInput | null > | null,
  or?: Array< ModelEmploymentTypeConditionInput | null > | null,
  not?: ModelEmploymentTypeConditionInput | null,
};

export type UpdateEmploymentTypeInput = {
  id: string,
  name?: string | null,
};

export type DeleteEmploymentTypeInput = {
  id?: string | null,
};

export type ModelEmployeeFilterInput = {
  id?: ModelIDInput | null,
  fullName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  designation?: ModelStringInput | null,
  department?: ModelStringInput | null,
  employmentType?: ModelStringInput | null,
  age?: ModelIntInput | null,
  address?: ModelStringInput | null,
  contact?: ModelStringInput | null,
  salary?: ModelFloatInput | null,
  rate?: ModelFloatInput | null,
  fixedRate?: ModelFloatInput | null,
  commission?: ModelFloatInput | null,
  hoursWorked?: ModelFloatInput | null,
  joinDate?: ModelStringInput | null,
  and?: Array< ModelEmployeeFilterInput | null > | null,
  or?: Array< ModelEmployeeFilterInput | null > | null,
  not?: ModelEmployeeFilterInput | null,
};

export type ModelWorkHourFilterInput = {
  id?: ModelIDInput | null,
  hour?: ModelFloatInput | null,
  workedOn?: ModelStringInput | null,
  employeeId?: ModelIDInput | null,
  and?: Array< ModelWorkHourFilterInput | null > | null,
  or?: Array< ModelWorkHourFilterInput | null > | null,
  not?: ModelWorkHourFilterInput | null,
};

export type ModelDepartmentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelDepartmentFilterInput | null > | null,
  or?: Array< ModelDepartmentFilterInput | null > | null,
  not?: ModelDepartmentFilterInput | null,
};

export type ModelEmploymentTypeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelEmploymentTypeFilterInput | null > | null,
  or?: Array< ModelEmploymentTypeFilterInput | null > | null,
  not?: ModelEmploymentTypeFilterInput | null,
};

export type SearchableEmployeeFilterInput = {
  id?: SearchableIDFilterInput | null,
  fullName?: SearchableStringFilterInput | null,
  email?: SearchableStringFilterInput | null,
  designation?: SearchableStringFilterInput | null,
  department?: SearchableStringFilterInput | null,
  employmentType?: SearchableStringFilterInput | null,
  age?: SearchableIntFilterInput | null,
  address?: SearchableStringFilterInput | null,
  contact?: SearchableStringFilterInput | null,
  salary?: SearchableFloatFilterInput | null,
  rate?: SearchableFloatFilterInput | null,
  fixedRate?: SearchableFloatFilterInput | null,
  commission?: SearchableFloatFilterInput | null,
  hoursWorked?: SearchableFloatFilterInput | null,
  joinDate?: SearchableStringFilterInput | null,
  and?: Array< SearchableEmployeeFilterInput | null > | null,
  or?: Array< SearchableEmployeeFilterInput | null > | null,
  not?: SearchableEmployeeFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableFloatFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableEmployeeSortInput = {
  field?: SearchableEmployeeSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableEmployeeSortableFields {
  id = "id",
  fullName = "fullName",
  email = "email",
  designation = "designation",
  department = "department",
  employmentType = "employmentType",
  age = "age",
  address = "address",
  contact = "contact",
  salary = "salary",
  rate = "rate",
  fixedRate = "fixedRate",
  commission = "commission",
  hoursWorked = "hoursWorked",
  joinDate = "joinDate",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableWorkHourFilterInput = {
  id?: SearchableIDFilterInput | null,
  hour?: SearchableFloatFilterInput | null,
  workedOn?: SearchableStringFilterInput | null,
  employeeId?: SearchableIDFilterInput | null,
  and?: Array< SearchableWorkHourFilterInput | null > | null,
  or?: Array< SearchableWorkHourFilterInput | null > | null,
  not?: SearchableWorkHourFilterInput | null,
};

export type SearchableWorkHourSortInput = {
  field?: SearchableWorkHourSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableWorkHourSortableFields {
  id = "id",
  hour = "hour",
  workedOn = "workedOn",
  employeeId = "employeeId",
}


export type SearchableDepartmentFilterInput = {
  id?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  and?: Array< SearchableDepartmentFilterInput | null > | null,
  or?: Array< SearchableDepartmentFilterInput | null > | null,
  not?: SearchableDepartmentFilterInput | null,
};

export type SearchableDepartmentSortInput = {
  field?: SearchableDepartmentSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableDepartmentSortableFields {
  id = "id",
  name = "name",
}


export type SearchableEmploymentTypeFilterInput = {
  id?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  and?: Array< SearchableEmploymentTypeFilterInput | null > | null,
  or?: Array< SearchableEmploymentTypeFilterInput | null > | null,
  not?: SearchableEmploymentTypeFilterInput | null,
};

export type SearchableEmploymentTypeSortInput = {
  field?: SearchableEmploymentTypeSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableEmploymentTypeSortableFields {
  id = "id",
  name = "name",
}


export type CreateEmployeeMutationVariables = {
  input: CreateEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type CreateEmployeeMutation = {
  createEmployee:  {
    __typename: "Employee",
    id: string,
    fullName: string,
    email: string,
    designation: string,
    department: string,
    employmentType: string,
    age: number | null,
    address: string | null,
    contact: string | null,
    salary: number | null,
    rate: number | null,
    fixedRate: number | null,
    commission: number | null,
    hoursWorked: number | null,
    joinDate: string | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    workHours:  {
      __typename: "ModelWorkHourConnection",
      items:  Array< {
        __typename: "WorkHour",
        id: string,
        hour: number,
        workedOn: string,
        employeeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEmployeeMutationVariables = {
  input: UpdateEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type UpdateEmployeeMutation = {
  updateEmployee:  {
    __typename: "Employee",
    id: string,
    fullName: string,
    email: string,
    designation: string,
    department: string,
    employmentType: string,
    age: number | null,
    address: string | null,
    contact: string | null,
    salary: number | null,
    rate: number | null,
    fixedRate: number | null,
    commission: number | null,
    hoursWorked: number | null,
    joinDate: string | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    workHours:  {
      __typename: "ModelWorkHourConnection",
      items:  Array< {
        __typename: "WorkHour",
        id: string,
        hour: number,
        workedOn: string,
        employeeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEmployeeMutationVariables = {
  input: DeleteEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type DeleteEmployeeMutation = {
  deleteEmployee:  {
    __typename: "Employee",
    id: string,
    fullName: string,
    email: string,
    designation: string,
    department: string,
    employmentType: string,
    age: number | null,
    address: string | null,
    contact: string | null,
    salary: number | null,
    rate: number | null,
    fixedRate: number | null,
    commission: number | null,
    hoursWorked: number | null,
    joinDate: string | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    workHours:  {
      __typename: "ModelWorkHourConnection",
      items:  Array< {
        __typename: "WorkHour",
        id: string,
        hour: number,
        workedOn: string,
        employeeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWorkHourMutationVariables = {
  input: CreateWorkHourInput,
  condition?: ModelWorkHourConditionInput | null,
};

export type CreateWorkHourMutation = {
  createWorkHour:  {
    __typename: "WorkHour",
    id: string,
    hour: number,
    workedOn: string,
    employeeId: string,
    employee:  {
      __typename: "Employee",
      id: string,
      fullName: string,
      email: string,
      designation: string,
      department: string,
      employmentType: string,
      age: number | null,
      address: string | null,
      contact: string | null,
      salary: number | null,
      rate: number | null,
      fixedRate: number | null,
      commission: number | null,
      hoursWorked: number | null,
      joinDate: string | null,
      image:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      workHours:  {
        __typename: "ModelWorkHourConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWorkHourMutationVariables = {
  input: UpdateWorkHourInput,
  condition?: ModelWorkHourConditionInput | null,
};

export type UpdateWorkHourMutation = {
  updateWorkHour:  {
    __typename: "WorkHour",
    id: string,
    hour: number,
    workedOn: string,
    employeeId: string,
    employee:  {
      __typename: "Employee",
      id: string,
      fullName: string,
      email: string,
      designation: string,
      department: string,
      employmentType: string,
      age: number | null,
      address: string | null,
      contact: string | null,
      salary: number | null,
      rate: number | null,
      fixedRate: number | null,
      commission: number | null,
      hoursWorked: number | null,
      joinDate: string | null,
      image:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      workHours:  {
        __typename: "ModelWorkHourConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWorkHourMutationVariables = {
  input: DeleteWorkHourInput,
  condition?: ModelWorkHourConditionInput | null,
};

export type DeleteWorkHourMutation = {
  deleteWorkHour:  {
    __typename: "WorkHour",
    id: string,
    hour: number,
    workedOn: string,
    employeeId: string,
    employee:  {
      __typename: "Employee",
      id: string,
      fullName: string,
      email: string,
      designation: string,
      department: string,
      employmentType: string,
      age: number | null,
      address: string | null,
      contact: string | null,
      salary: number | null,
      rate: number | null,
      fixedRate: number | null,
      commission: number | null,
      hoursWorked: number | null,
      joinDate: string | null,
      image:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      workHours:  {
        __typename: "ModelWorkHourConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDepartmentMutationVariables = {
  input: CreateDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type CreateDepartmentMutation = {
  createDepartment:  {
    __typename: "Department",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDepartmentMutationVariables = {
  input: UpdateDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type UpdateDepartmentMutation = {
  updateDepartment:  {
    __typename: "Department",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDepartmentMutationVariables = {
  input: DeleteDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type DeleteDepartmentMutation = {
  deleteDepartment:  {
    __typename: "Department",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEmploymentTypeMutationVariables = {
  input: CreateEmploymentTypeInput,
  condition?: ModelEmploymentTypeConditionInput | null,
};

export type CreateEmploymentTypeMutation = {
  createEmploymentType:  {
    __typename: "EmploymentType",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEmploymentTypeMutationVariables = {
  input: UpdateEmploymentTypeInput,
  condition?: ModelEmploymentTypeConditionInput | null,
};

export type UpdateEmploymentTypeMutation = {
  updateEmploymentType:  {
    __typename: "EmploymentType",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEmploymentTypeMutationVariables = {
  input: DeleteEmploymentTypeInput,
  condition?: ModelEmploymentTypeConditionInput | null,
};

export type DeleteEmploymentTypeMutation = {
  deleteEmploymentType:  {
    __typename: "EmploymentType",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetEmployeeQueryVariables = {
  id: string,
};

export type GetEmployeeQuery = {
  getEmployee:  {
    __typename: "Employee",
    id: string,
    fullName: string,
    email: string,
    designation: string,
    department: string,
    employmentType: string,
    age: number | null,
    address: string | null,
    contact: string | null,
    salary: number | null,
    rate: number | null,
    fixedRate: number | null,
    commission: number | null,
    hoursWorked: number | null,
    joinDate: string | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    workHours:  {
      __typename: "ModelWorkHourConnection",
      items:  Array< {
        __typename: "WorkHour",
        id: string,
        hour: number,
        workedOn: string,
        employeeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEmployeesQueryVariables = {
  filter?: ModelEmployeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEmployeesQuery = {
  listEmployees:  {
    __typename: "ModelEmployeeConnection",
    items:  Array< {
      __typename: "Employee",
      id: string,
      fullName: string,
      email: string,
      designation: string,
      department: string,
      employmentType: string,
      age: number | null,
      address: string | null,
      contact: string | null,
      salary: number | null,
      rate: number | null,
      fixedRate: number | null,
      commission: number | null,
      hoursWorked: number | null,
      joinDate: string | null,
      image:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      workHours:  {
        __typename: "ModelWorkHourConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetWorkHourQueryVariables = {
  id: string,
};

export type GetWorkHourQuery = {
  getWorkHour:  {
    __typename: "WorkHour",
    id: string,
    hour: number,
    workedOn: string,
    employeeId: string,
    employee:  {
      __typename: "Employee",
      id: string,
      fullName: string,
      email: string,
      designation: string,
      department: string,
      employmentType: string,
      age: number | null,
      address: string | null,
      contact: string | null,
      salary: number | null,
      rate: number | null,
      fixedRate: number | null,
      commission: number | null,
      hoursWorked: number | null,
      joinDate: string | null,
      image:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      workHours:  {
        __typename: "ModelWorkHourConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWorkHoursQueryVariables = {
  filter?: ModelWorkHourFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkHoursQuery = {
  listWorkHours:  {
    __typename: "ModelWorkHourConnection",
    items:  Array< {
      __typename: "WorkHour",
      id: string,
      hour: number,
      workedOn: string,
      employeeId: string,
      employee:  {
        __typename: "Employee",
        id: string,
        fullName: string,
        email: string,
        designation: string,
        department: string,
        employmentType: string,
        age: number | null,
        address: string | null,
        contact: string | null,
        salary: number | null,
        rate: number | null,
        fixedRate: number | null,
        commission: number | null,
        hoursWorked: number | null,
        joinDate: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetDepartmentQueryVariables = {
  id: string,
};

export type GetDepartmentQuery = {
  getDepartment:  {
    __typename: "Department",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDepartmentsQueryVariables = {
  filter?: ModelDepartmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDepartmentsQuery = {
  listDepartments:  {
    __typename: "ModelDepartmentConnection",
    items:  Array< {
      __typename: "Department",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetEmploymentTypeQueryVariables = {
  id: string,
};

export type GetEmploymentTypeQuery = {
  getEmploymentType:  {
    __typename: "EmploymentType",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEmploymentTypesQueryVariables = {
  filter?: ModelEmploymentTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEmploymentTypesQuery = {
  listEmploymentTypes:  {
    __typename: "ModelEmploymentTypeConnection",
    items:  Array< {
      __typename: "EmploymentType",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SearchEmployeesQueryVariables = {
  filter?: SearchableEmployeeFilterInput | null,
  sort?: SearchableEmployeeSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SearchEmployeesQuery = {
  searchEmployees:  {
    __typename: "SearchableEmployeeConnection",
    items:  Array< {
      __typename: "Employee",
      id: string,
      fullName: string,
      email: string,
      designation: string,
      department: string,
      employmentType: string,
      age: number | null,
      address: string | null,
      contact: string | null,
      salary: number | null,
      rate: number | null,
      fixedRate: number | null,
      commission: number | null,
      hoursWorked: number | null,
      joinDate: string | null,
      image:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      workHours:  {
        __typename: "ModelWorkHourConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    total: number | null,
  } | null,
};

export type SearchWorkHoursQueryVariables = {
  filter?: SearchableWorkHourFilterInput | null,
  sort?: SearchableWorkHourSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SearchWorkHoursQuery = {
  searchWorkHours:  {
    __typename: "SearchableWorkHourConnection",
    items:  Array< {
      __typename: "WorkHour",
      id: string,
      hour: number,
      workedOn: string,
      employeeId: string,
      employee:  {
        __typename: "Employee",
        id: string,
        fullName: string,
        email: string,
        designation: string,
        department: string,
        employmentType: string,
        age: number | null,
        address: string | null,
        contact: string | null,
        salary: number | null,
        rate: number | null,
        fixedRate: number | null,
        commission: number | null,
        hoursWorked: number | null,
        joinDate: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    total: number | null,
  } | null,
};

export type SearchDepartmentsQueryVariables = {
  filter?: SearchableDepartmentFilterInput | null,
  sort?: SearchableDepartmentSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SearchDepartmentsQuery = {
  searchDepartments:  {
    __typename: "SearchableDepartmentConnection",
    items:  Array< {
      __typename: "Department",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    total: number | null,
  } | null,
};

export type SearchEmploymentTypesQueryVariables = {
  filter?: SearchableEmploymentTypeFilterInput | null,
  sort?: SearchableEmploymentTypeSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SearchEmploymentTypesQuery = {
  searchEmploymentTypes:  {
    __typename: "SearchableEmploymentTypeConnection",
    items:  Array< {
      __typename: "EmploymentType",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    total: number | null,
  } | null,
};

export type OnCreateEmployeeSubscription = {
  onCreateEmployee:  {
    __typename: "Employee",
    id: string,
    fullName: string,
    email: string,
    designation: string,
    department: string,
    employmentType: string,
    age: number | null,
    address: string | null,
    contact: string | null,
    salary: number | null,
    rate: number | null,
    fixedRate: number | null,
    commission: number | null,
    hoursWorked: number | null,
    joinDate: string | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    workHours:  {
      __typename: "ModelWorkHourConnection",
      items:  Array< {
        __typename: "WorkHour",
        id: string,
        hour: number,
        workedOn: string,
        employeeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEmployeeSubscription = {
  onUpdateEmployee:  {
    __typename: "Employee",
    id: string,
    fullName: string,
    email: string,
    designation: string,
    department: string,
    employmentType: string,
    age: number | null,
    address: string | null,
    contact: string | null,
    salary: number | null,
    rate: number | null,
    fixedRate: number | null,
    commission: number | null,
    hoursWorked: number | null,
    joinDate: string | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    workHours:  {
      __typename: "ModelWorkHourConnection",
      items:  Array< {
        __typename: "WorkHour",
        id: string,
        hour: number,
        workedOn: string,
        employeeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEmployeeSubscription = {
  onDeleteEmployee:  {
    __typename: "Employee",
    id: string,
    fullName: string,
    email: string,
    designation: string,
    department: string,
    employmentType: string,
    age: number | null,
    address: string | null,
    contact: string | null,
    salary: number | null,
    rate: number | null,
    fixedRate: number | null,
    commission: number | null,
    hoursWorked: number | null,
    joinDate: string | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    workHours:  {
      __typename: "ModelWorkHourConnection",
      items:  Array< {
        __typename: "WorkHour",
        id: string,
        hour: number,
        workedOn: string,
        employeeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWorkHourSubscription = {
  onCreateWorkHour:  {
    __typename: "WorkHour",
    id: string,
    hour: number,
    workedOn: string,
    employeeId: string,
    employee:  {
      __typename: "Employee",
      id: string,
      fullName: string,
      email: string,
      designation: string,
      department: string,
      employmentType: string,
      age: number | null,
      address: string | null,
      contact: string | null,
      salary: number | null,
      rate: number | null,
      fixedRate: number | null,
      commission: number | null,
      hoursWorked: number | null,
      joinDate: string | null,
      image:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      workHours:  {
        __typename: "ModelWorkHourConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWorkHourSubscription = {
  onUpdateWorkHour:  {
    __typename: "WorkHour",
    id: string,
    hour: number,
    workedOn: string,
    employeeId: string,
    employee:  {
      __typename: "Employee",
      id: string,
      fullName: string,
      email: string,
      designation: string,
      department: string,
      employmentType: string,
      age: number | null,
      address: string | null,
      contact: string | null,
      salary: number | null,
      rate: number | null,
      fixedRate: number | null,
      commission: number | null,
      hoursWorked: number | null,
      joinDate: string | null,
      image:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      workHours:  {
        __typename: "ModelWorkHourConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWorkHourSubscription = {
  onDeleteWorkHour:  {
    __typename: "WorkHour",
    id: string,
    hour: number,
    workedOn: string,
    employeeId: string,
    employee:  {
      __typename: "Employee",
      id: string,
      fullName: string,
      email: string,
      designation: string,
      department: string,
      employmentType: string,
      age: number | null,
      address: string | null,
      contact: string | null,
      salary: number | null,
      rate: number | null,
      fixedRate: number | null,
      commission: number | null,
      hoursWorked: number | null,
      joinDate: string | null,
      image:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      workHours:  {
        __typename: "ModelWorkHourConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDepartmentSubscription = {
  onCreateDepartment:  {
    __typename: "Department",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDepartmentSubscription = {
  onUpdateDepartment:  {
    __typename: "Department",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDepartmentSubscription = {
  onDeleteDepartment:  {
    __typename: "Department",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEmploymentTypeSubscription = {
  onCreateEmploymentType:  {
    __typename: "EmploymentType",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEmploymentTypeSubscription = {
  onUpdateEmploymentType:  {
    __typename: "EmploymentType",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEmploymentTypeSubscription = {
  onDeleteEmploymentType:  {
    __typename: "EmploymentType",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
