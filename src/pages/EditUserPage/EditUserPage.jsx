import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { COUNTRIES } from "../../constants/countries";
import { Loader } from "../../components/Loader/Loader";

import { Form, Input, InputNumber, Button, Select, Alert } from "antd";

import "./style.scss";
import { useGetOneUser } from "../../hooks/useGetOneUser";

const { Option } = Select;

const layout = {
  wrapperCol: {
    span: 32,
  },
};
const tailLayout = {
  wrapperCol: {
    span: 16,
  },
};

export const EditUserPage = ({ match }) => {
  const {
    params: { userId },
  } = match;
  const history = useHistory();
  const [form] = Form.useForm();
  const [showAlert, setShowAlert] = useState("");
  const [user, isLoading] = useGetOneUser(userId);

  useEffect(() => {
    user && form.setFieldsValue(user);
  }, [user, form]);

  const onFinish = (values) => {
    fetch(
      `https://mysterious-wildwood-52860.herokuapp.com/v1/users/${userId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (data.statusCode === 400) {
          setShowAlert("error");
        } else {
          setShowAlert("success");
        }
      });
  };

  const onCancel = () => {
    history.push("/");
  };

  const onCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="EditUserPage__form__wrapper">
          <Form
            {...layout}
            className="EditUserPage__form"
            form={form}
            name="control-hooks"
            onFinish={onFinish}
          >
            <Form.Item
              name="firstName"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="First name" />
            </Form.Item>
            <Form.Item
              name="lastName"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Last name" />
            </Form.Item>
            <Form.Item
              name="country"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="Country" allowClear>
                {COUNTRIES.map((country) => (
                  <Option key={country.sortname} value={country.sortname}>
                    {country.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="balance"
              rules={[
                {
                  required: true,
                  type: "number",
                },
              ]}
            >
              <InputNumber placeholder="Balance" />
            </Form.Item>
            <Form.Item
              name="title"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Title (CTO, CEO, Developer... Etc)" />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button htmlType="button" onClick={onCancel}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Update
              </Button>
            </Form.Item>
          </Form>
          {showAlert && (
            <Alert
              className="EditUserPage__alert"
              message={
                showAlert === "success"
                  ? "User succesfully updated"
                  : "Something went wrong!"
              }
              type={showAlert}
              closable
              onClose={onCloseAlert}
            />
          )}
        </div>
      )}
    </Layout>
  );
};
