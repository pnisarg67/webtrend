import React from 'react';
import { Form, Input, Button, Flex, Card } from 'antd';
import 'antd/dist/reset.css'
import '../../css/Style.css';
import ContactForm from './ContactFrom';

const Contact =()=>{
   
        const cardStyle = {
            width: 620,
          };
          const imgStyle = {
            display: 'block',
            width: 273,
          };
    return(
        <div className="contact-container">
         <Card
    hoverable
    style={cardStyle}
    bodyStyle={{
      padding: 0,
      overflow: 'hidden',
    }}
  >
    <Flex justify="space-between">
      <img
        alt="avatar"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        style={imgStyle}
      />
      <Flex
        vertical
        align="flex-end"
        justify="space-between"
        style={{
          padding: 32,
        }}
      >
          <ContactForm/>
            </Flex>
    </Flex>
  </Card>
      </div>
    );
};
export default Contact;