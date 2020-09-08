import React, { useEffect } from 'react';
import { FormField } from '../../../typings';
import { Button, Form, Col, Row, Input, InputNumber, Select, Drawer, DatePicker } from 'antd';

type Props = {
  type?: string;
  visible: boolean;
  title: string;
  fields: FormField[];
  initialValues: any;
  layout?: 'vertical' | 'horizontal' | 'inline' | undefined;
  onSubmit: (input: any) => void;
  onClose: () => void;
}

const DATE_FORMAT = 'DD/MM/YYYY';

export function RegisterForm({
  type = 'form',
  visible,
  title,
  fields,
  initialValues,
  layout = 'horizontal',
  onSubmit,
  onClose,
}: Props) {
  const [ form ] = Form.useForm();

  useEffect(() => {
    form.resetFields();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues]);

  const formContent = fields.map((field: FormField) => {
    let formField = null;

    if (field.readOnly) {
      formField = (
        <Input readOnly={true} bordered={false} />
      );
    } else {
      switch(field.type) {
        case 'email':
          formField = (
            <Input placeholder={field.placeholder} maxLength={50} />
          );
          break;
        case 'number':
          formField = (
            <InputNumber
              placeholder={field.placeholder}
              min={field.min}
              max={field.max}
              formatter={field.formatter ? field.formatter : (value) => value as string}
              parser={field.parser ? field.parser : (value) => value as string}
              disabled={field.disabled}
              style={{ width: '100%' }}
            />
          );
          break;
        case 'select':
          formField = (
            <Select placeholder={field.placeholder} disabled={field.disabled}>
              { field.options?.map(item => (
                <Select.Option key={item.key} value={item.value}>
                  {item.value}
                </Select.Option>
              )) }
            </Select>
          );
          break;
        case 'date':
          formField = (
            <DatePicker
              format={DATE_FORMAT}
              disabled={field.disabled}
              style={{ width: '100%' }}
            />
          );
          break;
        case 'password':
          formField = (
            <Input.Password
              placeholder={field.placeholder}
              disabled={field.disabled}
            />
          );
          break;
        default:
          formField = (
            <Input
              type={field.type}
              placeholder={field.placeholder}
              disabled={field.disabled}
            />
          );
          break;
      }
    }

    return (
      <Col span={field.span} key={field.name}>
        <Form.Item
          name={field.name}
          label={field.label}
          rules={field.rules as any}
        >
          {formField}
        </Form.Item>
      </Col>
    )
  });

  return (
    <Drawer
      title={title}
      width={600}
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
            <Button form={type} key="submit" htmlType="submit" type="primary">
              Submit
            </Button>
        </div>
      }
    >
      <Form
        id={type}
        form={form}
        initialValues={initialValues}
        layout={layout}
        onFinish={onSubmit}
        requiredMark={false}
        labelCol={{span: 7}}
      >
        <Row gutter={16}>
          {formContent}
        </Row>
      </Form>
    </Drawer>
  );
}
