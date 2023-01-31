import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Modal, Form, Input } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const PostList = () => {
  const [value, setValue] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    const { data } = axios.get("http://localhost:4000/getPost").then((res) => {
      setValue(res.data);
      console.log(res.data);
    });
  }, []);
  const removeData = async (id, item) => {
    const { data } = await axios
      .delete(`http://localhost:4000/deletePost/${id}`, item)
      .then((res) => {
        console.log(res.data);
      });
    console.log(data, "");
  };
  const updateData = (item) => {
    console.log(item, id, "ITEM");
    const { data } = axios
      .put(`http://localhost:4000/updatePost/${id}`, item)
      .then((res) => {
        console.log(res.data);
      });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "productname",
      key: "productname",
    },

    {
      title: "category",
      dataIndex: "category",
      key: "category",
    },

    {
      title: "price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "unit",
      dataIndex: "unit",
      key: "unit",
    },
    {
      title: "company",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "actions",
      key: "edit",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                showModal();

                setId(record._id);
              }}
            />
            <DeleteOutlined
              style={{ color: "red", marginLeft: 12 }}
              onClick={() => {
                removeData(record._id);
              }}
            />
          </>
        );
      },
    },
  ];
  console.log(id);
  return (
    <div className="cont">
      <div>
        <Table columns={columns} dataSource={value} size="large" />

        <Modal
          open={isModalOpen}
          onCancel={handleCancel}
          mousePosition={{ x: 300, y: 300 }}>
          <Form
            onFinish={updateData}
            style={{
              maxWidth: 600,
            }}>
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
              <Button type="primary" htmlType="submit" onFinish={updateData}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default PostList;
