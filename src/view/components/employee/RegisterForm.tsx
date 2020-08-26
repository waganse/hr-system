import React, { useState, useEffect, ReactText } from 'react';
import { Button, Form, Col, Row, Input, InputNumber, Drawer, Select, DatePicker, Divider } from 'antd';
import { EmployeeMaster, DepartmentMaster, EmploymentTypeMaster } from '../../../typings';
import { SelectValue } from 'antd/lib/select';

type Props = {
  visible: boolean;
  title: string;
  initialValues: EmployeeMaster;
  departmentList: DepartmentMaster[];
  employmentTypeList: EmploymentTypeMaster[];
  onSubmit: (input: any) => void;
  onClose: () => void;
}

export function RegisterForm({
  visible,
  title,
  initialValues,
  departmentList,
  employmentTypeList,
  onSubmit,
  onClose,
}: Props) {
  const [employmentTypeObj, setEmploymentTypeObj] = useState({});
  const [selectedEmploymentType, setEmploymentType] = useState('');
  const [ form ] = Form.useForm();
  const DATE_FORMAT = 'DD/MM/YYYY';

  const onChangeEmploymentTypeHandler = (value: SelectValue) => {
    setEmploymentType(value as string);
  }

  useEffect(() => {
    form.resetFields();
    setEmploymentType(initialValues.employmentType as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues]);

  useEffect(() => {
    const _obj = {};

    for (const { name, ...rest } of employmentTypeList) {
      _obj[name as string] = rest;
    }

    setEmploymentTypeObj(_obj);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employmentTypeList]);

  return (
    <Drawer
      title={title}
      width={720}
      onClose={onClose}
      visible={visible}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
      <div
          style={{
          textAlign: 'right',
          }}
      >
          <Button onClick={onClose} style={{ marginRight: 8 }}>
            Cancel
          </Button>
          <Button form="accountForm" key="submit" htmlType="submit" type="primary">
            Submit
          </Button>
      </div>
      }
    >
      <Form
        id="accountForm"
        form={form}
        initialValues={initialValues}
        layout="vertical"
        onFinish={onSubmit}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="fullName"
              label="Full name"
              rules={[{ required: true, message: 'Please enter employee name' }]}
            >
              <Input
                placeholder="Please enter employee name"
                maxLength={50}
                autoFocus
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                { required: true, message: 'Please enter email address' },
                { type: 'email', message: 'Not a valid email' },
              ]}
            >
              <Input
                placeholder="Please enter email address"
                type="email"
                maxLength={50}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="department"
              label="Department"
              rules={[{ required: true, message: 'Please choose the department' }]}
            >
              <Select placeholder="Please choose the department">
                { departmentList.map(item => (
                  <Select.Option key={item.id as string} value={item.name as ReactText}>{item.name}</Select.Option>
                )) }
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="designation"
              label="Designation"
              rules={[{ required: true, message: 'Please enter designation' }]}
            >
              <Input
                placeholder="Please enter designation"
                maxLength={20}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="contact"
              label="Contact"
            >
              <Input
                placeholder="Please enter contact number"
                maxLength={20}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="joinDate"
              label="Date of join"
              >
              <DatePicker
                style={{ width: '100%' }}
                format={DATE_FORMAT}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="address"
              label="Address"
            >
              <Input
                placeholder="Please enter address"
                maxLength={150}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="age"
              label="Age"
              rules={[
                { type: 'number', min: 0, max: 99, message: 'Not a valid number' }
              ]}
            >
              <InputNumber
                style={{ width: '100%' }}
                placeholder="Please enter age"
                min={0}
              />
            </Form.Item>
          </Col>
        </Row>

        <Divider plain>Payment Information</Divider>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
                name="employmentType"
                label="Employment type"
                rules={[{ required: true, message: 'Please choose the employment type' }]}
            >
              <Select
                placeholder="Please choose the employment type"
                onChange={onChangeEmploymentTypeHandler}
              >
                { employmentTypeList.map(item => (
                  <Select.Option key={item.id as string} value={item.name as ReactText}>{item.name}</Select.Option>
                )) }
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="salary"
              label="Salary"
              rules={[{ type: 'number', message: 'Not a valid number' }]}
            >
              <InputNumber
                style={{ width: '100%' }}
                placeholder="Please enter salary"
                maxLength={20}
                min={0}
                disabled={!employmentTypeObj[selectedEmploymentType]?.useSalary}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="rate"
              label="Rate"
              rules={[{ type: 'number', message: 'Not a valid number' }]}
            >
              <InputNumber
                style={{ width: '100%' }}
                placeholder="Please enter rate"
                maxLength={20}
                min={0}
                disabled={!employmentTypeObj[selectedEmploymentType]?.useRate}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="fixedRate"
              label="Fixed Rate"
              rules={[{ type: 'number', message: 'Not a valid number' }]}
            >
              <InputNumber
                style={{ width: '100%' }}
                placeholder="Please enter fixed rate"
                maxLength={20}
                min={0}
                disabled={!employmentTypeObj[selectedEmploymentType]?.useFixedRate}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="commission"
              label="Commission (%)"
              rules={[{ type: 'number', min: 0, max: 100, message: 'Not a valid number' }]}
            >
              <InputNumber
                style={{ width: '100%' }}
                placeholder="Please enter commission % (e.g. 40)"
                min={0}
                formatter={value => `${value}%`}
                parser={value => value ? value.replace('%', '') : ''}
                disabled={!employmentTypeObj[selectedEmploymentType]?.useCommission}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="hoursWorked"
              label="Hours worked"
              rules={[{ type: 'number', message: 'Not a valid number' }]}
            >
              <InputNumber
                style={{ width: '100%' }}
                placeholder="Please enter hours worked"
                maxLength={10}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
}
