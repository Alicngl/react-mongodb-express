import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
import axios from "axios";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
  const { data } = axios
    .post("http://localhost:4000/createPost", values)
    .then((res) => {
      console.log(res.data);
    });
};

const CreatePost = () => {
  return (
    <div className="cont">
      <Form
        onFinish={onFinish}
        style={{
          maxWidth: 600,
          alignItems: "flex-end",
          marginLeft: "100px",
        }}
        validateMessages={validateMessages}>
        <Form.Item name={"productname"} label="Name">
          <Input />
        </Form.Item>
        <Form.Item name={"category"} label="category">
          <Input />
        </Form.Item>
        <Form.Item name={"price"} label="price">
          <Input />
        </Form.Item>
        <Form.Item name={"unit"} label="unit">
          <Input />
        </Form.Item>
        <Form.Item name={"company"} label="company">
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}>
          <Button type="primary" htmlType="submit" onClick={onFinish} style={{width:"100px" , marginRight:"50px"}}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreatePost;
