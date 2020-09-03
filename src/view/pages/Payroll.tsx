import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { selectAuth } from '../../domain/store/authSlice';
import { getManyEmployees, createOneEmployee, updateOneEmployee, deleteOneEmployee, selectEmployee, initialEmployee } from '../../domain/store/employeeSlice';
import { getManyPayrolls, createOnePayroll, updateOnePayroll, selectPayroll } from '../../domain/store/payrollSlice';
import { getManyDepartments, selectDepartment } from '../../domain/store/departmentSlice';
import { getManyEmploymentTypes, selectEmploymentType } from '../../domain/store/employmentTypeSlice';
import {
  networkFetchEmployeeList,
  networkCreateEmployee,
  networkUpdateEmployee,
  networkDeleteEmployee,
  networkFetchPayrollList,
  networkFetchDepartmentList,
  networkFetchEmploymentTypeList,
  networkCreatePayroll,
  networkUpdatePayroll,
} from '../../domain/network';
import { EmployeeMaster, FetchParams, Config, PayrollMaster } from '../../typings';
import { Table, Space, Popconfirm, Button, Row, Col, message, Modal, Upload, Input, Typography } from 'antd';
import { InboxOutlined, SearchOutlined, EditOutlined, DeleteOutlined, InfoCircleOutlined } from '@ant-design/icons';
import moment from 'moment';
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
  const [isNew, setIsNew] = useState(true);
  const [selectedItem, setSelectedItem] = useState(initialEmployee);
  const [fileList, setFileList] = useState([]);
  const [bulkEmployeeList, setBulkEmployeeList] = useState([]);
  const [payrollObj, setPayrollObj] = useState({});
  const [loading, setLoading] = useState(true);
  const DATE_FORMAT = 'DD/MM/YYYY';
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const targetMonthYear = `${month}/${year}`;

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
        title: 'Designation',
        dataIndex: 'designation',
        key: 'designation',
        width: 180,
        ellipsis: true,
        sorter: (a: any , b: any) => {
          const val = a.designation ? a.designation : '';
          return val.localeCompare(b.designation);
        },
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
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        width: 300,
        ellipsis: true,
        sorter: (a: any , b: any) => {
          const val = a.address ? a.address : '';
          return val.localeCompare(b.address);
        },
      },
      {
        title: 'Contact',
        dataIndex: 'contact',
        key: 'contact',
        width: 200,
        ellipsis: true,
        sorter: (a: any , b: any) => {
          const val = a.contact ? a.contact : '';
          return val.localeCompare(b.contact);
        }
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        width: 230,
        ellipsis: true,
        sorter: (a: any , b: any) => {
          const val = a.email ? a.email : '';
          return val.localeCompare(b.email);
        },
      },
      {
        title: 'Date of Join',
        dataIndex: 'joinDate',
        key: 'joinDate',
        width: 150,
        sorter: (a: any , b: any) => {
          const dateA = moment(a.joinDate, DATE_FORMAT).unix();
          const dateB = moment(b.joinDate, DATE_FORMAT).unix();

          return dateA - dateB;
        },
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a: any , b: any) => a.age - b.age,
      },
      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 85,
        render: (text: string, record: EmployeeMaster) => (
          <Space size="middle">
            <Button type="primary" shape="circle" icon={<EditOutlined />} size="small" onClick={() => onClickEditHandler(record.id as string)} />
            <Popconfirm title="Sure to delete?" onConfirm={() => deleteEmployeeHandler(record.id as string)}>
              <Button type="primary" danger shape="circle" icon={<DeleteOutlined />} size="small" />
            </Popconfirm>
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
        rules: [
          { type: 'number', message: 'Not a valid number' },
        ],
        span: 24,
      },
      {
        label: 'Salary',
        name: 'salary',
        type: 'number',
        min: 0,
        max: 1000000000000000,
        rules: [
          { type: 'number', message: 'Not a valid number' },
        ],
        span: 24,
      },
      {
        label: 'Rate',
        name: 'rate',
        type: 'number',
        min: 0,
        max: 1000000000000000,
        rules: [
          { type: 'number', message: 'Not a valid number' },
        ],
        span: 24,
      },
      {
        label: 'Fixed Rate',
        name: 'fixedRate',
        type: 'number',
        min: 0,
        max: 1000000000000000,
        rules: [
          { type: 'number', message: 'Not a valid number' },
        ],
        span: 24,
      },
      {
        label: 'Commission',
        name: 'commission',
        type: 'number',
        min: 0,
        max: 100,
        rules: [
          { type: 'number', message: 'Not a valid number' },
        ],
        span: 24,
        formatter: (value) => `${value}%`,
        parser: (value) => value ? value.replace('%', '') : '',
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
  }, [authState.isAuth]);

  useEffect(() => {
    const payrollListObj = {};
    _.each(payrollList.items, ({employeeId, id, ...rest}) => {
      payrollListObj[employeeId as string] = rest;
    });

    setPayrollObj(payrollListObj);
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

  const deleteEmployeeHandler = async (id: string) => {
    dispatch(deleteOneEmployee(await networkDeleteEmployee({ id })));
    message.success('Deleted successfully');
  }

  const createEmployeeHandler = async ({ joinDate, ...others }: any) => {
    const input = { joinDate: joinDate ? moment(joinDate).format(DATE_FORMAT) : '', ...others };

    dispatch(createOneEmployee(await networkCreateEmployee(input)));
    message.success('Created successfully');
    resetState();
  }

  const updateEmployeeHandler = async ({ joinDate, hoursWorked, bonus, ...others }: any) => {
    const empInput = {
      id: selectedItem.id,
      joinDate: moment(joinDate).format(DATE_FORMAT),
      ...others
    };

    const payrollItem = await validatePayrollInfo();
    const hourInput: PayrollMaster = {
      employeeId: selectedItem.id as string,
      hoursWorked,
      bonus,
      workedMonthYear: targetMonthYear,
    };

    // Create / Update work hour
    if (payrollItem.isNew) {
      dispatch(createOnePayroll(await networkCreatePayroll(hourInput)));
    } else {
      hourInput.id = payrollItem.id;
      dispatch(updateOnePayroll(await networkUpdatePayroll(hourInput)));
    }

    dispatch(updateOneEmployee(await networkUpdateEmployee(empInput)));

    message.success('Updated successfully');
    resetState();
  }

  // const onClickCreateHandler = async () => {
  //   setFormVisible(true);
  //   setIsNew(true);
  //   setSelectedItem(initialEmployee);
  // }

  // const onClickImportHandler = async () => {
  //   setModalVisible(true);
  // }

  const onClickEditHandler = async (id: string) => {
    setFormVisible(true);
    setIsNew(false);

    const targetItem = _.cloneDeep(employeeList.items.filter(item => item.id === id)[0]);

    targetItem.joinDate = targetItem.joinDate ? moment(targetItem.joinDate, DATE_FORMAT) : '';
    setSelectedItem({...targetItem, ...payrollObj[id]} );
  }

  const onSubmitFormHandler = (input: any) => {
    if (isNew) {
      createEmployeeHandler(input);
    } else {
      updateEmployeeHandler(input);
    }
  }

  const onUploadHandler = (info: UploadChangeParam) => {
    setFileList([info.file as never]);

    const reader = new FileReader();
    reader.readAsText(info.file as any);

    reader.onloadend = () => {
      setBulkEmployeeList(JSON.parse(reader.result as string));
    };
  }

  const onSubmitUploadHandler = async () => {
    const importList = await validateUserAccount();

    _.each(importList, ({isNew, ...rest}) => {
      if (isNew) {
        createEmployeeHandler(rest);
      } else {
        updateEmployeeHandler(rest);
      }
    })
  }

  const validateUserAccount = async () => {
    const response = await Promise.all(
      bulkEmployeeList.map(async (item: EmployeeMaster) => {
        const email = item.email as string;

        const filter = {
          or: [
            { email: { eq: email, },},
            { email: { eq: email.toUpperCase(), },},
            { email: { eq: email.toLowerCase(), },},
          ]
        };

        const result = await networkFetchEmployeeList({ filter });
        item.id = result.items.length ? result.items[0].id : null;
        item.isNew = result.items.length ? false : true;

        return item;
      })
    );

    setBulkEmployeeList(response as never[]);

    return response;
  }

  const validatePayrollInfo = async () => {
    const item = {
      id: null,
      isNew: true,
    };
    const filter = {
      and: [
        { employeeId: { eq: selectedItem.id, },},
        { workedMonthYear: { eq: targetMonthYear, },},
      ]
    };

    const result = await networkFetchPayrollList({ filter });

    if (result.items.length) {
      item.id = result.items[0].id;
      item.isNew = false;
    }

    return item;
  };

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

  const onCloseDrawerHandler = () => {
    resetState();
  }

  const resetState = () => {
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
        <Col span={6}>
          <Input prefix={<SearchOutlined className="site-form-item-icon" />} placeholder="Enter full name..." onChange={onSearchHandler} />
        </Col>
        <Col>
          <Row gutter={8} justify="end">
            {/* <Col span={12}>
              <Button
                type="primary"
                shape="round"
                icon={<UserAddOutlined />}
                onClick={onClickCreateHandler}
              >
                Add new
              </Button>
            </Col> */}
            {/* <Col span={24}>
              <Button
                type="primary"
                shape="round"
                icon={<ImportOutlined />}
                onClick={onClickImportHandler}
              >
                Import data
              </Button>
            </Col> */}
          </Row>
        </Col>
      </Row>

      <Table
        rowKey="id"
        columns={config.columns}
        dataSource={employeeList.items.map(item => {
          return {...item, ...payrollObj[item.id as string]}
        })}
        scroll={{ x: 2900 }}
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
        title="Import employee list"
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
