import React, { useEffect } from 'react';
import { Button, Form, Col, Row, Input, InputNumber, Select, Drawer } from 'antd';
import { DepartmentMaster, FormField } from '../../../typings';

type Props = {
  type: string;
  visible: boolean;
  title: string;
  fields: FormField[];
  initialValues: DepartmentMaster;
  onSubmit: (input: any) => void;
  onClose: () => void;
}

export function RegisterForm({
  type,
  visible,
  title,
  fields,
  initialValues,
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

    switch(field.type) {
      case 'text':
        formField = (
          <Input placeholder={field.placeholder} />
        );
        break;
      case 'number':
        formField = (
          <InputNumber placeholder={field.placeholder} />
        );
        break;
      case 'select':
        formField = (
          <Select placeholder={field.placeholder}>
            { field.options?.map(item => (
              <Select.Option key={item.key} value={item.value}>
                {item.value}
              </Select.Option>
            )) }
          </Select>
        );
        break;
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
        layout="vertical"
        onFinish={onSubmit}
      >
        <Row gutter={16}>
          {formContent}
        </Row>
      </Form>
    </Drawer>
  );
}
