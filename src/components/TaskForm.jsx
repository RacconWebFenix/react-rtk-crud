import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../feature/taks/tasksSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

function TaskForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const parans = useParams();

  const tasks = useSelector((state) => state.tasks);

  const [form] = Form.useForm();

  const handleSubmit = () => {
    if (parans.id) {
      dispatch(updateTask({ ...form.getFieldsValue(), id: parans.id }));
    } else {
      dispatch(
        addTask({
          ...form.getFieldsValue(),
          id: uuid(),
        })
      );
    }
    navigate("/");
  };

  useEffect(() => {
    if (parans.id) form.setFieldsValue(tasks.find((t) => t.id === parans.id));
  }, []);

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit}
      form={form}
    >
      <Form.Item
        name="title"
        type="text"
        placeholder="title"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="description"
        placeholder="description"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <TextArea />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Save
      </Button>
    </Form>
  );
}

export default TaskForm;
