import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import { selectAuth } from '../../domain/store/authSlice';
import { getManyEmployees, updateOneEmployee, selectEmployee, initialEmployee } from '../../domain/store/employeeSlice';
import { getManyPayrolls, createOnePayroll, updateOnePayroll, selectPayroll } from '../../domain/store/payrollSlice';
import { getManyDepartments, selectDepartment } from '../../domain/store/departmentSlice';
import { getManyEmploymentTypes, selectEmploymentType, initialEmploymentType } from '../../domain/store/employmentTypeSlice';
import {
  networkFetchEmployeeList,
  networkUpdateEmployee,
  networkFetchPayrollList,
  networkFetchDepartmentList,
  networkFetchEmploymentTypeList,
  networkCreatePayroll,
  networkUpdatePayroll,
} from '../../domain/network';
import { validateUserAccount, validatePayrollInfo, getTotalWage } from '../../domain/helper';
import { EmployeeMaster, FetchParams, Config, PayrollMaster } from '../../typings';
import { Table, Space, Button, Row, Col, message, Modal, Upload, Input, Typography, notification, DatePicker } from 'antd';
import { InboxOutlined, SearchOutlined, EditOutlined, InfoCircleOutlined, WarningOutlined, ImportOutlined } from '@ant-design/icons';
import { RegisterForm } from '../components/common/RegisterForm'
import { UploadChangeParam } from 'antd/lib/upload';
import { PageLayout } from '../Layout';


export function Payroll(props: any) {
  const dispatch = useDispatch();
  const employeeList = useSelector(selectEmployee);
  const payrollList = useSelector(selectPayroll);
  const departmentList = useSelector(selectDepartment);
  const employmentTypeList = useSelector(selectEmploymentType);
  const authState = useSelector(selectAuth);
  const [formVisible, setFormVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(initialEmployee);
  const [selectedEmploymentType, setSelectedEmploymentType] = useState(initialEmploymentType);
  const [fileList, setFileList] = useState([]);
  const [bulkPayrollList, setBulkPayrollList] = useState([] as EmployeeMaster[]);
  const [payrollObj, setPayrollObj] = useState({});
  const [dataSource, setDataSource] = useState([] as any);
  const [loading, setLoading] = useState(true);
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const currentMonthYear = `${month}/${year}`;
  const [targetMonthYear, setTargetMonthYear] = useState(currentMonthYear);

  const config: Config = {
    columns: [
      {
        title: 'Full Name',
        dataIndex: 'fullName',
        key: 'fullName',
        fixed: 'left',
        width: 200,
        sorter: (a: any , b: any) => {
          const val = a.fullName ? a.fullName : '';
          return val.localeCompare(b.fullName);
        },
      },
      {
        title: 'Department',
        dataIndex: 'department',
        key: 'department',
        width: 180,
        ellipsis: true,
        sorter: (a: any , b: any) => {
          const val = a.department ? a.department : '';
          return val.localeCompare(b.department);
        },
        filters: departmentList.items.map(({name}) => {
          return { text: name as string, value: name as string }
        }),
        onFilter: (value: string, record: EmployeeMaster) => {
          const name = record.department ? record.department : '';
          return name.includes(value);
        }
      },
      {
        title: 'Employment Type',
        dataIndex: 'employmentType',
        key: 'employmentType',
        width: 210,
        ellipsis: true,
        sorter: (a: any , b: any) => {
          const val = a.employeeType ? a.employeeType : '';
          return val.localeCompare(b.employeeType);
        },
        filters: employmentTypeList.items.map(item => {
          return { text: item.name as string, value: item.name as string }
        }),
        onFilter: (value: string, record: EmployeeMaster) => {
          const name = record.employmentType ? record.employmentType : '';
          return name.includes(value);
        }
      },
      {
        title: 'Total Wage',
        dataIndex: 'totalWage',
        key: 'totalWage',
        width: 150,
        sorter: (a: any , b: any) => a.totalWage - b.totalWage,
      },
      {
        title: 'Hours Worked',
        dataIndex: 'hoursWorked',
        key: 'hoursWorked',
        width: 150,
        sorter: (a: any , b: any) => a.hoursWorked - b.hoursWorked,
      },
      {
        title: 'Bonus',
        dataIndex: 'bonus',
        key: 'bonus',
        width: 150,
        sorter: (a: any , b: any) => a.bonus - b.bonus,
      },
      {
        title: 'Salary',
        dataIndex: 'salary',
        key: 'salary',
        width: 150,
        sorter: (a: any , b: any) => a.salary - b.salary,
      },
      {
        title: 'Rate',
        dataIndex: 'rate',
        key: 'rate',
        width: 150,
        sorter: (a: any , b: any) => a.rate - b.rate,
      },
      {
        title: 'Fixed Rate',
        dataIndex: 'fixedRate',
        key: 'fixedRate',
        width: 150,
        sorter: (a: any , b: any) => a.fixedRate - b.fixedRate,
      },
      {
        title: 'Commission (%)',
        dataIndex: 'commission',
        key: 'commission',
        width: 170,
        sorter: (a: any , b: any) => a.commission - b.commission,
      },
      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 85,
        render: (text: string, record: EmployeeMaster) => (
          <Space size="middle">
            <Button type="primary" shape="circle" icon={<EditOutlined />} size="small" onClick={() => onClickEditHandler(record.id as string)} />
          </Space>
        ),
      },
    ],
    fields: [
      {
        label: 'Full name',
        name: 'fullName',
        span: 24,
        readOnly: true,
      },
      {
        label: 'E-mail',
        name: 'email',
        span: 24,
        readOnly: true,
      },
      {
        label: 'Department',
        name: 'department',
        span: 24,
        readOnly: true,
      },
      {
        label: 'Designation',
        name: 'designation',
        span: 24,
        readOnly: true,
      },
      {
        label: 'Employment type',
        name: 'employmentType',
        span: 24,
        readOnly: true,
      },
      {
        label: 'Hours Worked',
        name: 'hoursWorked',
        type: 'number',
        min: 0,
        max: 1000000000000000,
        rules: [
          { required: true, message: 'Please enter value' },
          { type: 'number', message: 'Not a valid number' },
        ],
        span: 24,
      },
      {
        label: 'Bonus',
        name: 'bonus',
        type: 'number',
        min: 0,
        max: 1000000000000000,
        rules: selectedEmploymentType.useBonus ? [
          { required: true, message: 'Please enter value' },
          { type: 'number', message: 'Not a valid number' },
        ] : [
          { type: 'number', message: 'Not a valid number' },
        ],
        span: 24,
        disabled: !selectedEmploymentType.useBonus,
      },
      {
        label: 'Salary',
        name: 'salary',
        type: 'number',
        min: 0,
        max: 1000000000000000,
        rules: selectedEmploymentType.useSalary ? [
          { required: true, message: 'Please enter value' },
          { type: 'number', message: 'Not a valid number' },
        ] : [
          { type: 'number', message: 'Not a valid number' },
        ],
        span: 24,
        disabled: !selectedEmploymentType.useSalary,
      },
      {
        label: 'Rate',
        name: 'rate',
        type: 'number',
        min: 0,
        max: 1000000000000000,
        rules: selectedEmploymentType.useRate ? [
          { required: true, message: 'Please enter value' },
          { type: 'number', message: 'Not a valid number' },
        ] : [
          { type: 'number', message: 'Not a valid number' },
        ],
        span: 24,
        disabled: !selectedEmploymentType.useRate,
      },
      {
        label: 'Fixed Rate',
        name: 'fixedRate',
        type: 'number',
        min: 0,
        max: 1000000000000000,
        rules: selectedEmploymentType.useFixedRate ? [
          { required: true, message: 'Please enter value' },
          { type: 'number', message: 'Not a valid number' },
        ] : [
          { type: 'number', message: 'Not a valid number' },
        ],
        span: 24,
        disabled: !selectedEmploymentType.useFixedRate,
      },
      {
        label: 'Commission',
        name: 'commission',
        type: 'number',
        min: 0,
        max: 100,
        rules: selectedEmploymentType.useCommission ? [
          { required: true, message: 'Please enter value' },
          { type: 'number', message: 'Not a valid number' },
        ] : [
          { type: 'number', message: 'Not a valid number' },
        ],
        span: 24,
        formatter: (value) => `${value}%`,
        parser: (value) => value ? value.replace('%', '') : '',
        disabled: !selectedEmploymentType.useCommission,
      },
    ],
  };

  const uploadProps = {
    fileList,
    beforeUpload: (file: any) => {
      setFileList([]);
      return false;
    },
  };

  useEffect(() => {
    if (authState.isAuth) {
      fetchEmployeeListHandler({});
      fetchPayrollListHandler({ filter: { workedMonthYear: { eq: targetMonthYear } } });
      fetchDepartmentListHandler({});
      fetchEmploymentTypeListHandler({});
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState.isAuth, targetMonthYear]);

  useEffect(() => {
    const payrollListObj = {};
    _.each(payrollList.items, ({employeeId, id, employee, ...rest}) => {
      payrollListObj[employeeId as string] = {...rest };
    });

    setPayrollObj(payrollListObj);

    const mergedList = employeeList.items.map(item => {
      const totalWage = getTotalWage(item, payrollListObj[item.id as string]);
      return {...item, ...payrollListObj[item.id as string], totalWage };
    });

    setDataSource(mergedList);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employeeList.items, payrollList.items]);

  const fetchEmployeeListHandler = async (params: FetchParams) => {
    dispatch(getManyEmployees(await networkFetchEmployeeList(params)));
  }

  const fetchPayrollListHandler = async (params: FetchParams) => {
    dispatch(getManyPayrolls(await networkFetchPayrollList(params)));
  }

  const fetchDepartmentListHandler = async (params: FetchParams) => {
    dispatch(getManyDepartments(await networkFetchDepartmentList(params)));
  }

  const fetchEmploymentTypeListHandler = async (params: FetchParams) => {
    dispatch(getManyEmploymentTypes(await networkFetchEmploymentTypeList(params)));
  }

  const createPayrollHandler = async ({ id, hoursWorked, bonus, salary, rate, fixedRate, commission }: any) => {
    // Update payroll info in Employee table
    const empInput = {
      id,
      salary,
      rate,
      fixedRate,
      commission,
    };

    dispatch(updateOneEmployee(await networkUpdateEmployee(empInput)));

    // Update payroll info in Payroll table
    const payrollItem = await validatePayrollInfo(id, targetMonthYear);
    const payrollInput: PayrollMaster = {
      employeeId: id as string,
      hoursWorked,
      bonus,
      workedMonthYear: targetMonthYear,
    };

    // Create / Update work hour
    if (payrollItem.isNew) {
      dispatch(createOnePayroll(await networkCreatePayroll(payrollInput)));
    } else {
      payrollInput.id = payrollItem.id;
      dispatch(updateOnePayroll(await networkUpdatePayroll(payrollInput)));
    }

    message.success('Updated successfully');
    resetState();
  }

  const onClickEditHandler = async (id: string) => {
    setFormVisible(true);

    const targetEmployee = _.cloneDeep(employeeList.items.filter(item => item.id === id)[0]);

    setSelectedItem({...targetEmployee, ...payrollObj[id]});

    const targetEmpTypeList = employmentTypeList.items.filter(item => item.name === targetEmployee.employmentType);

    let targetEmpType = initialEmploymentType;

    if (targetEmpTypeList.length) {
      targetEmpType = targetEmpTypeList[0];
    } else {
      notification.open({
        message: 'Invalid employment type detected',
        description:
          'The current value is invalid. Please update it in this form.',
        icon: <WarningOutlined style={{ color: '#f81d22' }} />,
      });
    }

    setSelectedEmploymentType(targetEmpType);
  }

  const onSubmitFormHandler = (input: any) => {
    createPayrollHandler({...input, id: selectedItem.id });
  }

  const onUploadHandler = (info: UploadChangeParam) => {
    setFileList([info.file as never]);

    const reader = new FileReader();
    reader.readAsText(info.file as any);

    reader.onloadend = () => {
      const { targetMonthYear, data } = JSON.parse(reader.result as string);
      setBulkPayrollList(data);
      setTargetMonthYear(targetMonthYear);
    };
  }

  const onSubmitUploadHandler = async () => {
    const importList = await validateUserAccount(bulkPayrollList);

    setBulkPayrollList(importList);

    _.each(importList, ({isNew, ...rest}) => {
      if (isNew) {
        // createPayrollHandler(rest);
        message.error(`User ${rest.fullName} does not exist`)
      } else {
        createPayrollHandler(rest);
      }
    })
  }

  const onSearchHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;

    const filter = value ? {
      or: [
        { fullName: { contains: value, },},
        { fullName: { contains: value.toUpperCase(), },},
        { fullName: { contains: value.toLowerCase(), },},
        { fullName: { contains: `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`, },},
      ]
    } : null;

    dispatch(getManyEmployees(await networkFetchEmployeeList({ filter })));
  }

  const onClickImportHandler = async () => {
    setModalVisible(true);
  }

  const onCloseDrawerHandler = () => {
    resetState();
  }

  const resetState = () => {
    setModalVisible(false);
    setFormVisible(false);
    setSelectedItem({});
  }

  return (
    <PageLayout>
      <h2>Employee Payroll List</h2>

      <div style={{marginBottom: 16}}>
        <Typography.Text type="warning">
          <InfoCircleOutlined />
          <span style={{ marginLeft: 8 }}>Payroll information can be edited after the target employee is registered by HR.</span>
        </Typography.Text>
      </div>

      <Row justify="space-between" style={{ marginBottom: 16 }}>
        <Col span={10}>
          <Space size="middle">
            <Input prefix={<SearchOutlined className="site-form-item-icon" />} placeholder="Enter name..." onChange={onSearchHandler} />
            <DatePicker
              picker="month"
              value={moment(`1/${targetMonthYear}`, 'D/MM/YYYY')}
              format="M/YYYY"
              allowClear={false}
              onChange={(date, dateString) => {
                setTargetMonthYear(dateString);
              }}
            />
          </Space>
        </Col>
        <Col>
          <Row gutter={8} justify="end">
            <Col span={24}>
              <Button
                type="primary"
                shape="round"
                icon={<ImportOutlined />}
                onClick={onClickImportHandler}
              >
                Import data
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Table
        rowKey="id"
        columns={config.columns}
        dataSource={dataSource}
        scroll={{ x: 2000 }}
        pagination={{ position: ['bottomRight'], defaultPageSize: 100, size: 'small' }}
        size="small"
        bordered
        loading={loading}
      />

      <RegisterForm
        visible={formVisible}
        title="Edit payroll information"
        fields={config.fields}
        initialValues={selectedItem}
        onSubmit={onSubmitFormHandler}
        onClose={onCloseDrawerHandler}
      />

      <Modal
        title="Import payroll data"
        centered
        visible={modalVisible}
        onOk={onSubmitUploadHandler}
        onCancel={() => setModalVisible(false)}
      >
        <Upload.Dragger name="files" {...uploadProps} fileList={fileList} accept="application/json" onChange={onUploadHandler}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
        </Upload.Dragger>
      </Modal>
    </PageLayout>
  );
}
