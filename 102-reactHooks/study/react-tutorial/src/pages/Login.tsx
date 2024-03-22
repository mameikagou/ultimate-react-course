import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { DoRequest } from "@/apis/http";

export default function Login() {
  return (
    <div style={{ display: "flex", justifyContent:"center", alignItems:"center" }}>
      <App />
    </div>
  );
}

async function SubmitData() {
  const resp = await DoRequest
}

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const App: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Server"
      name="Server"
      rules={[{ message: "Please input your Server!" }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="DBName"
      name="DBName"
      rules={[{ message: "Please input your DBName!" }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="User"
      name="User"
      rules={[{ message: "Please input your User!" }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ message: "Please input your password!" }]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item<FieldType>
      label="Username"
      name="Username"
      rules={[{ message: "Please input your Username!" }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="Pwd"
      name="Pwd"
      rules={[{ message: "Please input your Pwd!" }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item<FieldType>
      label="Full_name"
      name="Full_name"
      rules={[{ message: "Please input your Full_name!" }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="Email"
      name="Email"
      rules={[{ message: "Please input your Email!" }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="Phone_number"
      name="Phone_number"
      rules={[{ message: "Please input your Phone_number!" }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button onClick={SubmitData} type="primary" htmlType="submit" style={{ background: "black" }}>
        Submit
      </Button>
    </Form.Item>
  </Form>
);
