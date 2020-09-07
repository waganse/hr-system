import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { selectAuth } from '../../domain/store/authSlice';
import { getManyEmployees, createOneEmployee, updateOneEmployee, deleteOneEmployee, selectEmployee, initialEmployee } from '../../domain/store/employeeSlice';
import { getManyDepartments, selectDepartment } from '../../domain/store/departmentSlice';
import { getManyEmploymentTypes, selectEmploymentType } from '../../domain/store/employmentTypeSlice';
import {
  networkFetchEmployeeList,
  networkCreateEmployee,
  networkUpdateEmployee,
  networkDeleteEmployee,
  networkFetchDepartmentList,
  networkFetchEmploymentTypeList,
} from '../../domain/network';
import { validateUserAccount, normalizeEmployeeImportObj } from '../../domain/helper';
import { EmployeeMaster, FetchParams, Config } from '../../typings';
import { Table, Space, Popconfirm, Button, Row, Col, message, Modal, Upload, Input } from 'antd';
import { InboxOutlined, ImportOutlined, SearchOutlined, UserAddOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import { RegisterForm } from '../components/common/RegisterForm'
import { UploadChangeParam } from 'antd/lib/upload';
import { PageLayout } from '../Layout';

export function Employee(props: any) {
  const dispatch = useDispatch();
  const employeeList = useSelector(selectEmployee);
  const departmentList = useSelector(selectDepartment);
  const employmentTypeList = useSelector(selectEmploymentType);
  const authState = useSelector(selectAuth);
  const [formVisible, setFormVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isNew, setIsNew] = useState(true);
  const [selectedItem, setSelectedItem] = useState(initialEmployee);
  const [fileList, setFileList] = useState([]);
  const [bulkEmployeeList, setBulkEmployeeList] = useState([] as EmployeeMaster[]);
  const [loading, setLoading] = useState(true)
  const DATE_FORMAT = 'DD/MM/YYYY';

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
        type: 'text',
        rules: [{ required: true, message: 'Please enter employee name' }],
        span: 24,
        maxLength: 50,
      },
      {
        label: 'E-mail',
        name: 'email',
        type: 'email',
        rules: [
          { required: true, message: 'Please enter email address' },
          { type: 'email', message: 'Not a valid email' },
        ],
        span: 24,
      },
      {
        label: 'Department',
        name: 'department',
        type: 'select',
        options: departmentList.items.map(({name}) => {
          return { key: name as string, value: name as string, }
        }),
        rules: [
          { required: true, message: 'Please select a department' },
        ],
        span: 24,
      },
      {
        label: 'Designation',
        name: 'designation',
        type: 'text',
        rules: [
          { required: true, message: 'Please enter designation' },
        ],
        span: 24,
        maxLength: 20,
      },
      {
        label: 'Employment type',
        name: 'employmentType',
        type: 'select',
        options: employmentTypeList.items.map(({name}) => {
          return { key: name as string, value: name as string, }
        }),
        rules: [
          { required: true, message: 'Please select a employment type' },
        ],
        span: 24,
      },
      {
        label: 'Contact',
        name: 'contact',
        type: 'text',
        span: 24,
        maxLength: 20,
      },
      {
        label: 'Age',
        name: 'age',
        type: 'number',
        min: 0,
        max: 100,
        span: 24,
      },
      {
        label: 'Address',
        name: 'address',
        type: 'text',
        span: 24,
        maxLength: 150,
      },
      {
        label: 'Date of join',
        name: 'joinDate',
        type: 'date',
        span: 24,
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
      fetchDepartmentListHandler({});
      fetchEmploymentTypeListHandler({});
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState.isAuth]);

  const fetchEmployeeListHandler = async (params: FetchParams) => {
    dispatch(getManyEmployees(await networkFetchEmployeeList(params)));
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

  const createEmployeeHandler = async (params: any) => {
    dispatch(createOneEmployee(await networkCreateEmployee(params)));
    message.success('Created successfully');
    resetState();
  }

  const updateEmployeeHandler = async (params: any) => {
    const input = { id: selectedItem.id, ...params };

    dispatch(updateOneEmployee(await networkUpdateEmployee(input)));
    message.success('Updated successfully');
    resetState();
  }

  const onClickCreateHandler = async () => {
    setFormVisible(true);
    setIsNew(true);
    setSelectedItem(initialEmployee);
  }

  const onClickImportHandler = async () => {
    setModalVisible(true);
  }

  const onClickEditHandler = async (id: string) => {
    setFormVisible(true);
    setIsNew(false);
    const targetItem = _.cloneDeep(employeeList.items.filter(item => item.id === id)[0]);
    targetItem.joinDate = targetItem.joinDate ? moment(targetItem.joinDate, DATE_FORMAT) : '';
    setSelectedItem(targetItem);
  }

  const onSubmitFormHandler = ({joinDate, ...rest}: any) => {
    const input = { joinDate: joinDate ? moment(joinDate).format(DATE_FORMAT) : '', ...rest };

    if (isNew) {
      createEmployeeHandler(input);
    } else {
      updateEmployeeHandler(input);
    }
  }

  const onSubmitUploadHandler = async () => {
    const importList = await validateUserAccount(bulkEmployeeList);

    setBulkEmployeeList(importList);

    _.each(importList, ({isNew, ...rest}) => {
      if (isNew) {
        createEmployeeHandler(rest);
      } else {
        updateEmployeeHandler(rest);
      }
    });

    resetState();
  }

  const onUploadHandler = (info: UploadChangeParam) => {
    setFileList([info.file as never]);

    const reader = new FileReader();
    reader.readAsText(info.file as any);

    reader.onloadend = () => {
      setBulkEmployeeList(
        normalizeEmployeeImportObj(
          JSON.parse(reader.result as string),
          departmentList.items,
          employmentTypeList.items
        )
      );
    };
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

  const onCloseDrawerHandler = () => {
    resetState();
  }

  const resetState = () => {
    setFormVisible(false);
    setModalVisible(false);
    setSelectedItem({});
  }

  return (
    <PageLayout>
      <h2>Employee List</h2>

      <Row justify="space-between" style={{ marginBottom: 16 }}>
        <Col span={6}>
          <Input prefix={<SearchOutlined className="site-form-item-icon" />} placeholder="Enter name..." onChange={onSearchHandler} />
        </Col>
        <Col>
          <Row gutter={8} justify="end">
            <Col span={12}>
              <Button
                type="primary"
                shape="round"
                icon={<UserAddOutlined />}
                onClick={onClickCreateHandler}
              >
                Add new
              </Button>
            </Col>
            <Col span={12}>
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
        dataSource={employeeList.items}
        scroll={{ x: 1800 }}
        pagination={{ position: ['bottomRight'], defaultPageSize: 100, size: 'small' }}
        size="small"
        bordered
        loading={loading}
      />

      <RegisterForm
        visible={formVisible}
        title={isNew ? 'Add a new employee' : 'Edit employee information'}
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
