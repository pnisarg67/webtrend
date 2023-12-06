import React from 'react';
import { Breadcrumb } from 'antd';

const Breadcrmb = () => {

 return(
    <Breadcrumb
    items={[
      {
        title: 'Home',
      },
      {
        title: <a href="/about">About</a>,
      },
      {
        title: <a href="/contact">Contact</a>,
      },
     
    ]}
  />
 )
};
export default Breadcrmb;