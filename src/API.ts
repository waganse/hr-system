/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEmployeeInput = {
  id?: string | null,
  fullName: string,
  email: string,
  employmentType: string,
  designation?: string | null,
  department?: string | null,
  age?: number | null,
  address?: string | null,
  contact?: string | null,
  salary?: number | null,
  rate?: number | null,
  fixedRate?: number | null,
  commission?: number | null,
  joinDate?: string | null,
};

export type ModelEmployeeConditionInput = {
  fullName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  employmentType?: ModelStringInput | null,
  designation?: ModelStringInput | null,
  department?: ModelStringInput | null,
  age?: ModelIntInput | null,
  address?: ModelStringInput | null,
  contact?: ModelStringInput | null,
  salary?: ModelFloatInput | null,
  rate?: ModelFloatInput | null,
  fixedRate?: ModelFloatInput | null,
  commission?: ModelFloatInput | null,
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
  employmentType?: string | null,
  designation?: string | null,
  department?: string | null,
  age?: number | null,
  address?: string | null,
  contact?: string | null,
  salary?: number | null,
  rate?: number | null,
  fixedRate?: number | null,
  commission?: number | null,
  joinDate?: string | null,
};

export type DeleteEmployeeInput = {
  id?: string | null,
};

export type CreatePayrollInput = {
  id?: string | null,
  hoursWorked?: number | null,
  bonus?: number | null,
  workedMonthYear?: string | null,
  employeeId: string,
};

export type ModelPayrollConditionInput = {
  hoursWorked?: ModelFloatInput | null,
  bonus?: ModelFloatInput | null,
  workedMonthYear?: ModelStringInput | null,
  employeeId?: ModelIDInput | null,
  and?: Array< ModelPayrollConditionInput | null > | null,
  or?: Array< ModelPayrollConditionInput | null > | null,
  not?: ModelPayrollConditionInput | null,
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

export type UpdatePayrollInput = {
  id: string,
  hoursWorked?: number | null,
  bonus?: number | null,
  workedMonthYear?: string | null,
  employeeId?: string | null,
};

export type DeletePayrollInput = {
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
  useBonus?: boolean | null,
  useSalary?: boolean | null,
  useRate?: boolean | null,
  useFixedRate?: boolean | null,
  useCommission?: boolean | null,
};

export type ModelEmploymentTypeConditionInput = {
  name?: ModelStringInput | null,
  useBonus?: ModelBooleanInput | null,
  useSalary?: ModelBooleanInput | null,
  useRate?: ModelBooleanInput | null,
  useFixedRate?: ModelBooleanInput | null,
  useCommission?: ModelBooleanInput | null,
  and?: Array< ModelEmploymentTypeConditionInput | null > | null,
  or?: Array< ModelEmploymentTypeConditionInput | null > | null,
  not?: ModelEmploymentTypeConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateEmploymentTypeInput = {
  id: string,
  name?: string | null,
  useBonus?: boolean | null,
  useSalary?: boolean | null,
  useRate?: boolean | null,
  useFixedRate?: boolean | null,
  useCommission?: boolean | null,
};

export type DeleteEmploymentTypeInput = {
  id?: string | null,
};

export type ModelEmployeeFilterInput = {
  id?: ModelIDInput | null,
  fullName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  employmentType?: ModelStringInput | null,
  designation?: ModelStringInput | null,
  department?: ModelStringInput | null,
  age?: ModelIntInput | null,
  address?: ModelStringInput | null,
  contact?: ModelStringInput | null,
  salary?: ModelFloatInput | null,
  rate?: ModelFloatInput | null,
  fixedRate?: ModelFloatInput | null,
  commission?: ModelFloatInput | null,
  joinDate?: ModelStringInput | null,
  and?: Array< ModelEmployeeFilterInput | null > | null,
  or?: Array< ModelEmployeeFilterInput | null > | null,
  not?: ModelEmployeeFilterInput | null,
};

export type ModelPayrollFilterInput = {
  id?: ModelIDInput | null,
  hoursWorked?: ModelFloatInput | null,
  bonus?: ModelFloatInput | null,
  workedMonthYear?: ModelStringInput | null,
  employeeId?: ModelIDInput | null,
  and?: Array< ModelPayrollFilterInput | null > | null,
  or?: Array< ModelPayrollFilterInput | null > | null,
  not?: ModelPayrollFilterInput | null,
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
  useBonus?: ModelBooleanInput | null,
  useSalary?: ModelBooleanInput | null,
  useRate?: ModelBooleanInput | null,
  useFixedRate?: ModelBooleanInput | null,
  useCommission?: ModelBooleanInput | null,
  and?: Array< ModelEmploymentTypeFilterInput | null > | null,
  or?: Array< ModelEmploymentTypeFilterInput | null > | null,
  not?: ModelEmploymentTypeFilterInput | null,
};

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
    employmentType: string,
    designation: string | null,
    department: string | null,
    age: number | null,
    address: string | null,
    contact: string | null,
    salary: number | null,
    rate: number | null,
    fixedRate: number | null,
    commission: number | null,
    joinDate: string | null,
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
    employmentType: string,
    designation: string | null,
    department: string | null,
    age: number | null,
    address: string | null,
    contact: string | null,
    salary: number | null,
    rate: number | null,
    fixedRate: number | null,
    commission: number | null,
    joinDate: string | null,
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
    employmentType: string,
    designation: string | null,
    department: string | null,
    age: number | null,
    address: string | null,
    contact: string | null,
    salary: number | null,
    rate: number | null,
    fixedRate: number | null,
    commission: number | null,
    joinDate: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePayrollMutationVariables = {
  input: CreatePayrollInput,
  condition?: ModelPayrollConditionInput | null,
};

export type CreatePayrollMutation = {
  createPayroll:  {
    __typename: "Payroll",
    id: string,
    hoursWorked: number | null,
    bonus: number | null,
    workedMonthYear: string | null,
    employeeId: string,
    employee:  {
      __typename: "Employee",
      id: string,
      fullName: string,
      email: string,
      employmentType: string,
      designation: string | null,
      department: string | null,
      age: number | null,
      address: string | null,
      contact: string | null,
      salary: number | null,
      rate: number | null,
      fixedRate: number | null,
      commission: number | null,
      joinDate: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePayrollMutationVariables = {
  input: UpdatePayrollInput,
  condition?: ModelPayrollConditionInput | null,
};

export type UpdatePayrollMutation = {
  updatePayroll:  {
    __typename: "Payroll",
    id: string,
    hoursWorked: number | null,
    bonus: number | null,
    workedMonthYear: string | null,
    employeeId: string,
    employee:  {
      __typename: "Employee",
      id: string,
      fullName: string,
      email: string,
      employmentType: string,
      designation: string | null,
      department: string | null,
      age: number | null,
      address: string | null,
      contact: string | null,
      salary: number | null,
      rate: number | null,
      fixedRate: number | null,
      commission: number | null,
      joinDate: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePayrollMutationVariables = {
  input: DeletePayrollInput,
  condition?: ModelPayrollConditionInput | null,
};

export type DeletePayrollMutation = {
  deletePayroll:  {
    __typename: "Payroll",
    id: string,
    hoursWorked: number | null,
    bonus: number | null,
    workedMonthYear: string | null,
    employeeId: string,
    employee:  {
      __typename: "Employee",
      id: string,
      fullName: string,
      email: string,
      employmentType: string,
      designation: string | null,
      department: string | null,
      age: number | null,
      address: string | null,
      contact: string | null,
      salary: number | null,
      rate: number | null,
      fixedRate: number | null,
      commission: number | null,
      joinDate: string | null,
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
    useBonus: boolean | null,
    useSalary: boolean | null,
    useRate: boolean | null,
    useFixedRate: boolean | null,
    useCommission: boolean | null,
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
    useBonus: boolean | null,
    useSalary: boolean | null,
    useRate: boolean | null,
    useFixedRate: boolean | null,
    useCommission: boolean | null,
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
    useBonus: boolean | null,
    useSalary: boolean | null,
    useRate: boolean | null,
    useFixedRate: boolean | null,
    useCommission: boolean | null,
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
    employmentType: string,
    designation: string | null,
    department: string | null,
    age: number | null,
    address: string | null,
    contact: string | null,
    salary: number | null,
    rate: number | null,
    fixedRate: number | null,
    commission: number | null,
    joinDate: string | null,
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
      employmentType: string,
      designation: string | null,
      department: string | null,
      age: number | null,
      address: string | null,
      contact: string | null,
      salary: number | null,
      rate: number | null,
      fixedRate: number | null,
      commission: number | null,
      joinDate: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPayrollQueryVariables = {
  id: string,
};

export type GetPayrollQuery = {
  getPayroll:  {
    __typename: "Payroll",
    id: string,
    hoursWorked: number | null,
    bonus: number | null,
    workedMonthYear: string | null,
    employeeId: string,
    employee:  {
      __typename: "Employee",
      id: string,
      fullName: string,
      email: string,
      employmentType: string,
      designation: string | null,
      department: string | null,
      age: number | null,
      address: string | null,
      contact: string | null,
      salary: number | null,
      rate: number | null,
      fixedRate: number | null,
      commission: number | null,
      joinDate: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPayrollsQueryVariables = {
  filter?: ModelPayrollFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPayrollsQuery = {
  listPayrolls:  {
    __typename: "ModelPayrollConnection",
    items:  Array< {
      __typename: "Payroll",
      id: string,
      hoursWorked: number | null,
      bonus: number | null,
      workedMonthYear: string | null,
      employeeId: string,
      employee:  {
        __typename: "Employee",
        id: string,
        fullName: string,
        email: string,
        employmentType: string,
        designation: string | null,
        department: string | null,
        age: number | null,
        address: string | null,
        contact: string | null,
        salary: number | null,
        rate: number | null,
        fixedRate: number | null,
        commission: number | null,
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
    useBonus: boolean | null,
    useSalary: boolean | null,
    useRate: boolean | null,
    useFixedRate: boolean | null,
    useCommission: boolean | null,
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
      useBonus: boolean | null,
      useSalary: boolean | null,
      useRate: boolean | null,
      useFixedRate: boolean | null,
      useCommission: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateEmployeeSubscription = {
  onCreateEmployee:  {
    __typename: "Employee",
    id: string,
    fullName: string,
    email: string,
    employmentType: string,
    designation: string | null,
    department: string | null,
    age: number | null,
    address: string | null,
    contact: string | null,
    salary: number | null,
    rate: number | null,
    fixedRate: number | null,
    commission: number | null,
    joinDate: string | null,
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
    employmentType: string,
    designation: string | null,
    department: string | null,
    age: number | null,
    address: string | null,
    contact: string | null,
    salary: number | null,
    rate: number | null,
    fixedRate: number | null,
    commission: number | null,
    joinDate: string | null,
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
    employmentType: string,
    designation: string | null,
    department: string | null,
    age: number | null,
    address: string | null,
    contact: string | null,
    salary: number | null,
    rate: number | null,
    fixedRate: number | null,
    commission: number | null,
    joinDate: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePayrollSubscription = {
  onCreatePayroll:  {
    __typename: "Payroll",
    id: string,
    hoursWorked: number | null,
    bonus: number | null,
    workedMonthYear: string | null,
    employeeId: string,
    employee:  {
      __typename: "Employee",
      id: string,
      fullName: string,
      email: string,
      employmentType: string,
      designation: string | null,
      department: string | null,
      age: number | null,
      address: string | null,
      contact: string | null,
      salary: number | null,
      rate: number | null,
      fixedRate: number | null,
      commission: number | null,
      joinDate: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePayrollSubscription = {
  onUpdatePayroll:  {
    __typename: "Payroll",
    id: string,
    hoursWorked: number | null,
    bonus: number | null,
    workedMonthYear: string | null,
    employeeId: string,
    employee:  {
      __typename: "Employee",
      id: string,
      fullName: string,
      email: string,
      employmentType: string,
      designation: string | null,
      department: string | null,
      age: number | null,
      address: string | null,
      contact: string | null,
      salary: number | null,
      rate: number | null,
      fixedRate: number | null,
      commission: number | null,
      joinDate: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePayrollSubscription = {
  onDeletePayroll:  {
    __typename: "Payroll",
    id: string,
    hoursWorked: number | null,
    bonus: number | null,
    workedMonthYear: string | null,
    employeeId: string,
    employee:  {
      __typename: "Employee",
      id: string,
      fullName: string,
      email: string,
      employmentType: string,
      designation: string | null,
      department: string | null,
      age: number | null,
      address: string | null,
      contact: string | null,
      salary: number | null,
      rate: number | null,
      fixedRate: number | null,
      commission: number | null,
      joinDate: string | null,
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
    useBonus: boolean | null,
    useSalary: boolean | null,
    useRate: boolean | null,
    useFixedRate: boolean | null,
    useCommission: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEmploymentTypeSubscription = {
  onUpdateEmploymentType:  {
    __typename: "EmploymentType",
    id: string,
    name: string,
    useBonus: boolean | null,
    useSalary: boolean | null,
    useRate: boolean | null,
    useFixedRate: boolean | null,
    useCommission: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEmploymentTypeSubscription = {
  onDeleteEmploymentType:  {
    __typename: "EmploymentType",
    id: string,
    name: string,
    useBonus: boolean | null,
    useSalary: boolean | null,
    useRate: boolean | null,
    useFixedRate: boolean | null,
    useCommission: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
