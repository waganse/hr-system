export type AuthMaster = {
    isAuth: boolean;
    token?: string;
    user: {
        roles?: string[];
        name?: string;
    }
}

export type AccountMaster = {
  id: string | null;
  group?: string;
  updatedAt?: string;
  createdAt?: string;
  cognitoId?: string;
}

export type EmployeeMaster = {
  id?: string | null;
  fullName?: string;
  email?: string;
  designation?: string;
  department?: string;
  employmentType?: string;
  age?: number | null;
  address?: string;
  contact?: string;
  salary?: number;
  rate?: number;
  fixedRate?: number;
  commission?: number;
  joinDate?: string | moment.Moment;
  isNew?: boolean;
}

export type PayrollMaster = {
  id?: string | null;
  hoursWorked?: number;
  bonus?: number;
  workedMonthYear?: string;
  employeeId?: string;
  employee?: EmployeeMaster;
}

export type DepartmentMaster = {
  id?: string | null;
  name?: string;
}

export type EmploymentTypeMaster = {
  id?: string | null;
  name?: string;
  useBonus?: boolean;
  useSalary?: boolean;
  useRate?: boolean;
  useFixedRate?: boolean;
  useCommission?: boolean;
}

export type AccountState = {
  items: AccountMaster[];
  group: string;
}

export type EmployeeState = {
  items: EmployeeMaster[];
  nextToken: string | null;
}

export type PayrollState = {
  items: PayrollMaster[];
  nextToken: string | null;
}

export type DepartmentState = {
  items: DepartmentMaster[];
  nextToken: string | null;
}

export type EmploymentTypeState = {
  items: EmploymentTypeMaster[];
  nextToken: string | null;
}

export type FetchParams = {
  filter?: any | null;
  limit?: number;
  nextToken?: string | null;
}

export type DeleteParams = {
  id: string;
  condition?: any;
}

export type TableColumn = {
  title: string;
  key: string;
  dataIndex?: string;
  width?: number;
  fixed?: boolean | 'left' | 'right';
  ellipsis?: boolean;
  render?: (text: string, record: any) => React.ReactNode | JSX.Element;
  sorter?: any;
  filters?: {
      text: string;
      value: string;
  }[];
  onFilter?: any;
}

export type FormField = {
  label: string;
  name: string;
  type?: string;
  rules?: FormRule[];
  placeholder?: string;
  span?: number;
  options?: FormOption[];
  min?: number;
  max?: number;
  maxLength?: number;
  readOnly?: boolean;
  formatter?: (value: string | number | undefined) => string;
  parser?: (value: string | undefined) => string;
  disabled?: boolean;
}

export type Config = {
  columns: TableColumn[];
  fields: FormField[];
}

type FormRule = {
  required?: boolean;
  type?: string;
  min?: number;
  max?: number;
  message?: string;
}

type FormOption = {
  key: string;
  value: string;
}
