import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signin } from '../lib/redux/actions/authA';

const Signin = (props) => {
  const [username] = useState('senz17@gmail.com');
  const [password] = useState('ZXasqw12');

  const { signin } = props;

  const onFinish = (values) => {
    signin(values);
  };

  return (
    <Form name="signin" initialValues={{ username, password }} onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => ({ signin: bindActionCreators(signin, dispatch) });

export default connect(null, mapDispatchToProps)(Signin);
