import React, { useEffect } from 'react';
import { Button, Form, Col, Row, Input, Drawer } from 'antd';
import { DepartmentMaster } from '../../../typings';

type Props = {
  visible: boolean;
  title: string;
  initialValues: DepartmentMaster;
  onSubmit: (input: any) => void;
  onClose: () => void;
}

export function RegisterForm({
  visible,
  title,
  initialValues,
  onSubmit,
  onClose,
}: Props) {
  const [ form ] = Form.useForm();

  useEffect(() => {
    form.resetFields();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues]);

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
          <Button form="form" key="submit" htmlType="submit" type="primary">
            Submit
          </Button>
      </div>
      }
    >
      <Form
        id="form"
        form={form}
        initialValues={initialValues}
        layout="vertical"
        onFinish={onSubmit}
      >
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="name"
              label="Name"
              // rules={[{ required: true, message: 'Please enter employee name' }]}
            >
              <Input placeholder="Please enter department name" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
}
