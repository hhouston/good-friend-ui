import React from "react";

import { Form, DatePicker, TimePicker, Button, Typography } from "antd";
const { Title } = Typography;

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const config = {
  rules: [{ type: "object", required: true, message: "Please select time!" }],
};
const rangeConfig = {
  rules: [{ type: "array", required: true, message: "Please select time!" }],
};

const StepTwo = () => {
  const onFinish = (fieldsValue) => {
    console.log("_________", fieldsValue);
    // Should format date value before submit.
    const values = {
      ...fieldsValue,
      "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
    };
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <Title level={2} className="subtitle">
        Select the date of your upcoming event
      </Title>
      <Form
        name="time_related_controls"
        {...formItemLayout}
        onFinish={onFinish}
      >
        <Form.Item name="date-picker" {...config}>
          <DatePicker />
        </Form.Item>
      </Form>
    </>
  );
};

export default StepTwo;
