import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { getManyDepartments, createOneDepartment, updateOneDepartment, deleteOneDepartment, selectDepartment, initialDepartment } from '../../domain/store/departmentSlice';
import { DepartmentMaster, TableColumn, DepartmentFetchParams } from '../../typings';
import { networkFetchDepartmentList, networkCreateDepartment, networkUpdateDepartment, networkDeleteDepartment } from '../../domain/network/department';
import { Table, Space, Popconfirm, Button, Row, Col, message, Input, Tabs } from 'antd';
import { EditOutlined, DeleteOutlined, SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { RegisterForm } from '../components/department/RegisterForm'

export function Setting(props: any) {
  const departmentList = useSelector(selectDepartment);
  const [formVisible, setFormVisible] = useState(false);
  const [isNew, setIsNew] = useState(true);
  const [selectedItem, setSelectedItem] = useState(initialDepartment);
  const dispatch = useDispatch();

  const columns:TableColumn[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: any , b: any) => {
        const val = a.fullName ? a.fullName : '';
        return val.localeCompare(b.fullName);
      },
    },
    {
      title: 'Action',
      key: 'operation',
      width: 100,
      render: (text: string, record: DepartmentMaster) => (
        <Space size="middle">
          <Button type="primary" shape="circle" icon={<EditOutlined />} size="small" onClick={() => onClickEditHandler(record.id as string)} />
          <Popconfirm title="Sure to delete?" onConfirm={() => deleteDepartmentHandler(record.id as string)}>
            <Button type="primary" danger shape="circle" icon={<DeleteOutlined />} size="small" />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    fetchDepartmentListHandler({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchDepartmentListHandler = async (params: DepartmentFetchParams) => {
    dispatch(getManyDepartments(await networkFetchDepartmentList(params)));
  }

  const deleteDepartmentHandler = async (id: string) => {
    dispatch(deleteOneDepartment(await networkDeleteDepartment({ id })));
    message.success('Deleted successfully');
  }

  const createDepartmentHandler = async (input: any) => {
    dispatch(createOneDepartment(await networkCreateDepartment(input)));
    message.success('Created successfully');
    resetState();
  }

  const updateDepartmentHandler = async (input: any) => {
    dispatch(updateOneDepartment(await networkUpdateDepartment(input)));
    message.success('Updated successfully');
    resetState();
  }

  const onClickCreateHandler = async () => {
    setFormVisible(true);
    setIsNew(true);
    setSelectedItem({});
  }

  const onClickEditHandler = async (id: string) => {
    setFormVisible(true);
    setIsNew(false);
    const targetItem = _.cloneDeep(departmentList.items.filter(item => item.id === id)[0]);
    setSelectedItem(targetItem);
  }

  const onSubmitFormHandler = (input: any) => {
    if (isNew) {
      createDepartmentHandler(input);
    } else {
      updateDepartmentHandler(input);
    }
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
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Department" key="1">
          <h2>Departments</h2>

          <Row justify="space-between" style={{ marginBottom: 16 }}>
            <Col span={6}>
              <Input prefix={<SearchOutlined className="site-form-item-icon" />} placeholder="Name" />
            </Col>
            <Col span={18} style={{textAlign: 'right'}}>
              <Button
                type="primary"
                shape="round"
                icon={<PlusOutlined />}
                onClick={onClickCreateHandler}
              >
                Add new
              </Button>
            </Col>
          </Row>

          { departmentList.items.length ? (
            <Table
              rowKey="id"
              columns={columns}
              dataSource={departmentList.items}
              pagination={{ position: ['bottomRight'], defaultPageSize: 100, size: 'small' }}
              bordered
            />
          ) : null }

          <RegisterForm
            visible={formVisible}
            title={isNew ? 'Add new item' : 'Edit item'}
            initialValues={selectedItem}
            onSubmit={onSubmitFormHandler}
            onClose={onCloseDrawerHandler}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Employment Type" key="2">
          <h2>Employment Types</h2>

          <Row justify="space-between" style={{ marginBottom: 16 }}>
            <Col span={6}>
              <Input prefix={<SearchOutlined className="site-form-item-icon" />} placeholder="Name" />
            </Col>
            <Col span={18} style={{textAlign: 'right'}}>
              <Button
                type="primary"
                shape="round"
                icon={<PlusOutlined />}
                onClick={onClickCreateHandler}
              >
                Add new
              </Button>
            </Col>
          </Row>

          { departmentList.items.length ? (
            <Table
              rowKey="id"
              columns={columns}
              dataSource={departmentList.items}
              pagination={{ position: ['bottomRight'], defaultPageSize: 100, size: 'small' }}
              bordered
            />
          ) : null }

          <RegisterForm
            visible={formVisible}
            title={isNew ? 'Add new item' : 'Edit item'}
            initialValues={selectedItem}
            onSubmit={onSubmitFormHandler}
            onClose={onCloseDrawerHandler}
          />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
}
