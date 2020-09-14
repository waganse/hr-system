import React from 'react';
import { Row, Col, Typography } from 'antd';
import logo from '../../logo.png';

export function Instruction() {
  return (
    <Row
      gutter={[16, 40]}
      style={{
        margin: 0,
        padding: 40,
        backgroundColor: '#CDDCDC',
        backgroundImage: 'radial-gradient(at 50% 100%, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%), linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(0,0,0,0.25) 100%)',
        backgroundBlendMode: 'screen, overlay' }}
      >
      <Col span={24} style={{ textAlign: 'center' }}>
        <img src={logo} alt="EMS" width="200" />
      </Col>
      <Col span={24}>
        <Typography.Title level={2}>Overall</Typography.Title>
        <p>EMS uses Amazon DynamoDB for data storing. The stored data sets are employees, payroll, departments, and employment types.</p>
        <p>Amazon Cognito handles the authentication process including, sign-up, sign-in, and password-change.</p>
        <p>Data interation between front-end and back-end is via graphQL apis which are configured with AWS Amplify serverless methodology.</p>
        <p>React is employed for the main front-end library. (with redux, and react router)</p>
        <p></p>
        <iframe title="overall" src="https://hr-system-assets.s3-ap-northeast-1.amazonaws.com/EMS.pdf" frameBorder="0" width="100%" height="500px" />
      </Col>
      <Col span={24}>
        <Typography.Title level={2}>Account Management</Typography.Title>
        <p>There are three user groups for the system: administrator, hrAdmin, and AccountAdmin.</p>
        <p>Administrators can access all pages: Employee List, Payroll List, Report, Account, and Master Data.</p>
        <p>HrAdmins have access to Emplyee List only.</p>
        <p>AccountAdmins have access to Payroll List, and Report pages.</p>
        <p>Administrators are the only users who can create sign-in users.</p>
        <p>In the first sign-in, users use initial passwords given by the administrator.</p>
        <p>Every user has to verify her/his own user account by submitting a verification code which is sent to the target email when the account is created.</p>
        <p>Users can change their password after sign-in.</p>

        <div style={{ maxWidth: 800, margin: 'auto' }}>
          <video src="https://hr-system-assets.s3-ap-northeast-1.amazonaws.com/account.mp4" controls width="100%" />
        </div>
      </Col>
      <Col span={24}>
        <Typography.Title level={2}>Employee Management</Typography.Title>
        <p>Admin and hrAdmin role users can create/read/update/delete employee information.</p>
        <p>EMS supports bulk employee importing. A set of employees can be imported in JSON format specified in the spec above.</p>
        <div style={{ maxWidth: 800, margin: 'auto' }}>
          <video src="https://hr-system-assets.s3-ap-northeast-1.amazonaws.com/employee.mp4" controls width="100%" poster="https://hr-system-assets.s3-ap-northeast-1.amazonaws.com/cover.jpg" />
        </div>
      </Col>
      <Col span={24}>
        <Typography.Title level={2}>Payroll / Report Management</Typography.Title>
        <p>Admin and accountAdmin role users can create/read/update/delete payroll information.</p>
        <p>The total wage is calcurated with the created payroll info.</p>
        <p>EMS supports bulk payroll importing. A set of payroll items can be imported in JSON format specified in the spec above.</p>
        <p>Payroll information is reflected into a pie chart by departements.</p>
        <div style={{ maxWidth: 800, margin: 'auto' }}>
          <video src="https://hr-system-assets.s3-ap-northeast-1.amazonaws.com/payroll.mp4" controls width="100%" poster="https://hr-system-assets.s3-ap-northeast-1.amazonaws.com/cover.jpg" />
        </div>
      </Col>
      <Col span={24}>
        <Typography.Title level={2}>Master Data Management</Typography.Title>
        <p>Currently departments and enployee types are supported.</p>
        <p>The master data is used when a enpoyee is registered in the system.</p>
      </Col>
    </Row>
  );
}
