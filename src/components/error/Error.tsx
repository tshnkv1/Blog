import { Alert } from 'antd';
import React from 'react';

const Error: React.FC = () => {
  return (
    <Alert message='Data loading error' type='error'/>
  )
};

export default Error;
