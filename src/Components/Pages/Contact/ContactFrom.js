
import React from 'react';
import { Form, Input, Button, Flex, Card } from 'antd';
import 'antd/dist/reset.css'
import '../../css/Style.css';
const ContactForm =( ) =>{
    
    const onFinish = (values) => {
        console.log('Submitted:', values);
        // You can add logic to handle form submission here
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return(
        <>
          <Form
              name="contact-form"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              layout="vertical"
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter your name!' }]}
              >
                <Input />
              </Form.Item>
  
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email!' },
                  { type: 'email', message: 'Please enter a valid email address!' },
                ]}
              >
                <Input />
              </Form.Item>
  
              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: 'Please enter your message!' }]}
              >
                <Input.TextArea />
              </Form.Item>
  
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
        </>
    )
}
export default ContactForm;