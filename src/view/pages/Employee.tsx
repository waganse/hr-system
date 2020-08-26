import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { getManyEmployees, createOneEmployee, updateOneEmployee, deleteOneEmployee, selectEmployee, initialEmployee } from '../../domain/store/employeeSlice';
import { getManyDepartments, selectDepartment } from '../../domain/store/departmentSlice';
import { EmployeeMaster, EmployeeFetchParams, TableColumn, DepartmentFetchParams } from '../../typings';
import { networkFetchEmployeeList, networkCreateEmployee, networkUpdateEmployee, networkDeleteEmployee } from '../../domain/network/employee';
import { networkFetchDepartmentList } from '../../domain/network/department';
import { Table, Space, Popconfirm, Button, Row, Col, message, Modal, Upload, Input } from 'antd';
import { InboxOutlined, ImportOutlined, SearchOutlined, UserAddOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import { RegisterForm } from '../components/employee/RegisterForm'
import { UploadChangeParam } from 'antd/lib/upload';

export function Employee(props: any) {
  const employeeList = useSelector(selectEmployee);
  const departmentList = useSelector(selectDepartment);
  const [formVisible, setFormVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isNew, setIsNew] = useState(true);
  const [selectedItem, setSelectedItem] = useState(initialEmployee);
  const [fileList, setFileList] = useState([]);
  const [bulkEmployeeList, setBulkEmployeeList] = useState([])
  const dispatch = useDispatch();
  const DATE_FORMAT = 'DD/MM/YYYY';

  const columns:TableColumn[] = [
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
      filters: departmentList.items.map(item => {
        return { text: item.name as string, value: item.name as string }
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
      title: 'Employment Type',
      dataIndex: 'employmentType',
      key: 'employmentType',
      width: 210,
      ellipsis: true,
      sorter: (a: any , b: any) => {
        const val = a.employeeType ? a.employeeType : '';
        return val.localeCompare(b.employeeType);
      },
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
      title: 'Hours Worked',
      dataIndex: 'hoursWorked',
      key: 'hoursWorked',
      width: 150,
      sorter: (a: any , b: any) => a.hoursWorked - b.hoursWorked,
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (text: string, record: EmployeeMaster) => (
        <Space size="middle">
          <Button type="primary" shape="circle" icon={<EditOutlined />} size="small" onClick={() => onClickEditHandler(record.id as string)} />
          <Popconfirm title="Sure to delete?" onConfirm={() => deleteEmployeeHandler(record.id as string)}>
            <Button type="primary" danger shape="circle" icon={<DeleteOutlined />} size="small" />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const uploadProps = {
    fileList,
    beforeUpload: (file: any) => {
      setFileList([]);
      return false;
    },
  };

  useEffect(() => {
    fetchEmployeeListHandler({});
    fetchDepartmentListHandler({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchEmployeeListHandler = async (params: EmployeeFetchParams) => {
    dispatch(getManyEmployees(await networkFetchEmployeeList(params)));
  }

  const fetchDepartmentListHandler = async (params: DepartmentFetchParams) => {
    dispatch(getManyDepartments(await networkFetchDepartmentList(params)));
  }

  const deleteEmployeeHandler = async (id: string) => {
    dispatch(deleteOneEmployee(await networkDeleteEmployee({ id })));
    message.success('Deleted successfully');
  }

  const createBulkEmployeeHandler = async (employeeList: EmployeeMaster[]) => {
    await Promise.all(
      employeeList.map(async (item) => {
        await createEmployeeHandler(item);
      })
    );
    message.success('Imported successfully');
    resetState();
  }

  const createEmployeeHandler = async ({ joinDate, ...others }: any) => {
    const input = { joinDate: joinDate ? moment(joinDate).format(DATE_FORMAT) : '', ...others };
    dispatch(createOneEmployee(await networkCreateEmployee(input)));
    message.success('Created successfully');
    resetState();
  }

  const updateEmployeeHandler = async ({ joinDate, ...others }: any) => {
    const input = { id: selectedItem.id, joinDate: moment(joinDate).format(DATE_FORMAT), ...others };
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

  const onSubmitFormHandler = (input: any) => {
    if (isNew) {
      createEmployeeHandler(input);
    } else {
      updateEmployeeHandler(input);
    }
  }

  const onSubmitUploadHandler = () => {
    console.log('===================');
    console.log(bulkEmployeeList);
    console.log('===================');
  }

  const onUploadHandler = (info: UploadChangeParam) => {
    console.log('FileList:', info);
    setFileList([info.file as never]);

    // if (e.file.type !== 'application/json') {
    //   message.error(`${e.file.name} is not a JSON file`);
    //   return;
    // }

    const reader = new FileReader();
    reader.readAsText(info.file as any);

    reader.onloadend = () => {
      console.log('===================');
      console.log(JSON.parse(reader.result as string));
      console.log('===================');
      setBulkEmployeeList(JSON.parse(reader.result as string));
    };
  }

  const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;



  }

  const onCloseDrawerHandler = () => {
    resetState();
  }

  const resetState = () => {
    setFormVisible(false);
    setSelectedItem({});
  }

  return (
    <>
      <h2>Employee List</h2>

      <Row justify="space-between" style={{ marginBottom: 16 }}>
        <Col span={6}>
          <Input prefix={<SearchOutlined className="site-form-item-icon" />} placeholder="Username" onChange={onSearchHandler} />
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

      { employeeList.items.length ? (
        <Table
          rowKey="id"
          columns={columns}
          dataSource={employeeList.items}
          scroll={{ x: 2600 }}
          pagination={{ position: ['bottomRight'], defaultPageSize: 100, size: 'small' }}
          bordered
        />
      ) : null }

      <RegisterForm
        visible={formVisible}
        title={isNew ? 'Add a new employee' : 'Edit employee information'}
        initialValues={selectedItem}
        departmentList={departmentList.items}
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
    </>
  );
}
