import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { selectAuth } from '../../domain/store/authSlice';
import { setManyAccounts, selectAccount, initialAccount, createOneAccount, deleteOneAccount } from '../../domain/store/accountSlice';
import { networkFetchManyAccounts, networkAddAccount, networkDisableAccount, networkAddAccountToGroup } from '../../domain/network';
import { normalizeFetchedAccounts } from '../../domain/helper'
import { Config, AccountMaster } from '../../typings';
import { Table, Space, Button, Popconfirm, message, Row, Col } from 'antd';
import { EditOutlined, DeleteOutlined, UserAddOutlined } from '@ant-design/icons';
import { RegisterForm } from '../components/common/RegisterForm'
import { PageLayout } from '../Layout';
import { USER_GROUPS, DATE_FORMAT } from '../../domain/store/store';

export function Account() {
  const dispatch = useDispatch();
  const accountList = useSelector(selectAccount);
  const authState = useSelector(selectAuth);
  const [loading, setLoading] = useState(true);
  const [formVisible, setFormVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(initialAccount);
  const [isNew, setIsNew] = useState(true);

  const config: Config = {
    columns: [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        fixed: 'left',
        width: 250,
        sorter: (a: any , b: any) => {
          const val = a.id ? a.id : '';
          return val.localeCompare(b.id);
        },
      },
      {
        title: 'User Group',
        dataIndex: 'group',
        key: 'group',
        width: 150,
        ellipsis: true,
        sorter: (a: any , b: any) => {
          const val = a.group ? a.group : '';
          return val.localeCompare(b.group);
        },
        filters: USER_GROUPS.map((name) => {
          return { text: name as string, value: name as string }
        }),
        onFilter: (value: string, record: AccountMaster) => {
          const name = record.group ? record.group : '';
          return name.includes(value);
        }
      },
      {
        title: 'E-mail verified',
        dataIndex: 'verified',
        key: 'verified',
        width: 150,
      },
      {
        title: 'Last pdated at',
        dataIndex: 'updatedAt',
        key: 'updatedAt',
        width: 150,
        sorter: (a: any , b: any) => {
          const dateA = moment(a.updatedAt, DATE_FORMAT).unix();
          const dateB = moment(b.updatedAt, DATE_FORMAT).unix();

          return dateA - dateB;
        },
      },
      {
        title: 'Created at',
        dataIndex: 'createdAt',
        key: 'createdAt',
        width: 150,
        sorter: (a: any , b: any) => {
          const dateA = moment(a.createdAt, DATE_FORMAT).unix();
          const dateB = moment(b.createdAt, DATE_FORMAT).unix();

          return dateA - dateB;
        },
      },
      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 85,
        render: (text: string, record: AccountMaster) => (
          <Space size="middle">
            <Button type="primary" shape="circle" icon={<EditOutlined />} size="small" onClick={() => onClickEditHandler(record.id as string)} />
            <Popconfirm title="Sure to delete?" onConfirm={() => deleteHandler(record.id as string)}>
              <Button type="primary" danger shape="circle" icon={<DeleteOutlined />} size="small" />
            </Popconfirm>
          </Space>
        ),
      },
    ],
    fields: [
      {
        label: 'ID (e-mail)',
        name: 'id',
        type: 'email',
        rules: [
          { required: true, message: 'Please enter email' },
          { type: 'email', message: 'Not a valid email' },
        ],
        span: 24,
        readOnly: !isNew,
      },
      {
        label: 'Password',
        name: 'password',
        type: 'password',
        rules: [
          { required: false, min: 8, message: 'Please enter valid password (8 and more characters)' },
        ],
        placeholder: 'Enter new password',
        span: 24,
      },
      {
        label: 'User Group',
        name: 'group',
        span: 24,
        type: 'select',
        options: USER_GROUPS.map((name) => {
          return { key: name as string, value: name as string, }
        }),
        rules: [
          { required: true, message: 'Please select a group' },
        ],
      },
      {
        label: 'E-mail verified',
        name: 'verified',
        span: 24,
        readOnly: true,
      },
      {
        label: 'Updated at',
        name: 'updatedAt',
        span: 24,
        readOnly: true,
      },
      {
        label: 'Created at',
        name: 'createdAt',
        span: 24,
        readOnly: true,
      },
      {
        label: 'AWS ID',
        name: 'cognitoId',
        span: 24,
        readOnly: true,
      },
    ],
  };

  useEffect(() => {
    if (authState.isAuth) {
      fetchAccountHandler();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState.isAuth]);

  const fetchAccountHandler = async () => {
    const account = await networkFetchManyAccounts();
    const normalizedAccountList = normalizeFetchedAccounts(account);
    dispatch(setManyAccounts(normalizedAccountList));

    setLoading(false);
  }

  const onClickCreateHandler = async () => {
    setFormVisible(true);
    setIsNew(true);
    setSelectedItem(initialAccount);
  }

  const onClickEditHandler = async (id: string) => {
    setFormVisible(true);
    setIsNew(false);
    const targetItem = _.cloneDeep(accountList.items.filter(item => item.id === id)[0]);
    setSelectedItem(targetItem);
  }

  const deleteHandler = async (id: string) => {
    await networkDisableAccount(id);

    dispatch(deleteOneAccount({id}));
    message.success('Deleted successfully');
  }

  const createHandler = async ({ id, password, group }: any) => {
    try {
      const response = await networkAddAccount({username: id, password, group});

      if (response) {
        await networkAddAccountToGroup(response.userSub, group);
      }

      const userState: AccountMaster = {
        id,
        group,
        verified: false,
        cognitoId: response?.userSub,
      }

      dispatch(createOneAccount(userState));
      message.success('Created successfully');
      resetState();
    } catch(e) {
      message.error(e.message);
    }
  }

  const updateHandler = async ({ id, password, group, cognitoId }: any) => {
    message.success('Updated successfully');
    resetState();
  }

  const onSubmitFormHandler = (input: any) => {
    if (isNew) {
      createHandler(input);
    } else {
      updateHandler(input);
    }
  }

  const onCloseDrawerHandler = () => {
    resetState();
  }

  const resetState = () => {
    setFormVisible(false);
    setSelectedItem(initialAccount);
  }

  return (
    <PageLayout>
      <h2>Account list</h2>

      <Row justify="end" style={{ marginBottom: 16 }}>
        <Col>
          <Button
            type="primary"
            shape="round"
            icon={<UserAddOutlined />}
            onClick={onClickCreateHandler}
          >
            Add new
          </Button>
        </Col>
      </Row>

      <Table
        rowKey="id"
        columns={config.columns}
        dataSource={accountList.items}
        scroll={{ x: 800 }}
        pagination={{ position: ['bottomRight'], defaultPageSize: 100, size: 'small' }}
        size="small"
        bordered
        loading={loading}
      />

      <RegisterForm
        visible={formVisible}
        title={isNew ? 'Add a new account' : 'Edit account information'}
        fields={config.fields}
        initialValues={selectedItem}
        onSubmit={onSubmitFormHandler}
        onClose={onCloseDrawerHandler}
      />

    </PageLayout>
  );
}
