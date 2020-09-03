import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { DepartmentMaster, EmploymentTypeMaster, TableColumn } from '../../../typings';
import { Table, Space, Popconfirm, Button, Row, Col } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { RegisterForm } from '../../components/common/RegisterForm'

type MasterData = DepartmentMaster | EmploymentTypeMaster;

type Props = {
  title: string;
  type: string;
  initialState: MasterData;
  itemList: MasterData[];
  loading: boolean;
  onCreate: (input: MasterData) => void;
  onUpdate: (input: MasterData) => void;
  onDelete: (id: string) => void;
};


export function MasterList({
  title,
  type,
  initialState,
  itemList,
  loading,
  onCreate,
  onUpdate,
  onDelete,
}: Props) {
  const [normalizedList, setNormalizedList] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [isNew, setIsNew] = useState(true);
  const [selectedItem, setSelectedItem] = useState(initialState);

  const config = {
    department: {
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          sorter: (a: any , b: any) => {
            const val = a.name ? a.name : '';
            return val.localeCompare(b.name);
          },
        }
      ],
      fields: [
        {
          label: 'Name',
          name: 'name',
          type: 'text',
          rules: [{ required: true, message: 'Please enter name' }],
          placeholder: 'Please enter name',
          span: 24,
        },
      ]
    },
    employmentType: {
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          sorter: (a: any , b: any) => {
            const val = a.name ? a.name : '';
            return val.localeCompare(b.name);
          },
        },
        {
          title: 'Salary',
          dataIndex: 'useSalary',
          key: 'useSalary',
          width: 150,
        },
        {
          title: 'Rate',
          dataIndex: 'useRate',
          key: 'useRate',
          width: 150,
        },
        {
          title: 'Fixed Rate',
          dataIndex: 'useFixedRate',
          key: 'useFixedRate',
          width: 150,
        },
        {
          title: 'Commission',
          dataIndex: 'useCommission',
          key: 'useCommission',
          width: 150,
        },
      ],
      fields: [
        {
          label: 'Name',
          name: 'name',
          type: 'text',
          rules: [{ required: true, message: 'Please enter name' }],
          placeholder: 'Please enter name',
          span: 24,
        },
        {
          label: 'Salary',
          name: 'useSalary',
          type: 'select',
          options: [
            { key: 'true', value: 'True' },
            { key: 'false', value: 'False' },
          ],
          rules: [{ required: true, message: 'Please choose item' }],
          placeholder: 'Please choose item',
          span: 24,
        },
        {
          label: 'Rate',
          name: 'useRate',
          type: 'select',
          options: [
            { key: 'true', value: 'True' },
            { key: 'false', value: 'False' },
          ],
          rules: [{ required: true, message: 'Please choose item' }],
          placeholder: 'Please choose item',
          span: 24,
        },
        {
          label: 'Fixed Rate',
          name: 'useFixedRate',
          type: 'select',
          options: [
            { key: 'true', value: 'True' },
            { key: 'false', value: 'False' },
          ],
          rules: [{ required: true, message: 'Please choose item' }],
          placeholder: 'Please choose item',
          span: 24,
        },
        {
          label: 'Commission',
          name: 'useCommission',
          type: 'select',
          options: [
            { key: 'true', value: 'True' },
            { key: 'false', value: 'False' },
          ],
          rules: [{ required: true, message: 'Please choose item' }],
          placeholder: 'Please choose item',
          span: 24,
        },
      ]
    }
  };

  const commonColumns:TableColumn[] = [
    {
      title: 'Action',
      key: 'operation',
      width: 85,
      render: (text: string, record: MasterData) => (
        <Space size="middle">
          <Button type="primary" shape="circle" icon={<EditOutlined />} size="small" onClick={() => onClickEditHandler(record.id as string)} />
          <Popconfirm title="Sure to delete?" onConfirm={() => onDelete(record.id as string)}>
            <Button type="primary" danger shape="circle" icon={<DeleteOutlined />} size="small" />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const onClickCreateHandler = async () => {
    setFormVisible(true);
    setIsNew(true);

    setSelectedItem(initialState);
  }

  const onClickEditHandler = async (id: string) => {
    setFormVisible(true);
    setIsNew(false);

    const targetItem = _.cloneDeep(itemList.filter(item => item.id === id)[0]);
    console.clear();
console.log('===================');
console.log(targetItem);
console.log('===================');
    setSelectedItem(targetItem);
  }

  const onSubmitFormHandler = async (input: MasterData) => {
    if (isNew) {
      await onCreate(input);
    } else {
      input.id = selectedItem.id;
      await onUpdate(input);
    }

    resetState();
  }

  const onCloseDrawerHandler = () => {
    resetState();
  }

  const resetState = () => {
    setFormVisible(false);
    setSelectedItem({});
  }

  const normalizeList = () => {
    return itemList.map(item => {
      const keys = Object.keys(item);
      let _item = {};

      for (let key of keys) {
        _item[key] = typeof item[key] === 'boolean' ? item[key] + '' : item[key];
      }

      return _item;
    });
  }

  useEffect(() => {
    setNormalizedList(normalizeList() as never[]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemList]);

  return (
    <>
      <h2>{title}</h2>

      <Row justify="space-between" style={{ marginBottom: 16 }}>
        {/* <Col span={6}>
          <Input prefix={<SearchOutlined className="site-form-item-icon" />} placeholder="Name" />
        </Col> */}
        <Col span={24} style={{textAlign: 'right'}}>
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

      <Table
        rowKey="id"
        columns={[...config[type].columns, ...commonColumns]}
        dataSource={normalizedList}
        pagination={{ position: ['bottomRight'], defaultPageSize: 100, size: 'small' }}
        size="middle"
        bordered
        loading={loading}
      />

      <RegisterForm
        type={title}
        visible={formVisible}
        title={isNew ? 'Add new item' : 'Edit item'}
        fields={config[type].fields}
        initialValues={selectedItem}
        onSubmit={onSubmitFormHandler}
        onClose={onCloseDrawerHandler}
      />
    </>
  );
}
