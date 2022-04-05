import React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  Layout,
  Row,
  Col
} from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import './HeaderFC.css';

const { Title } = Typography;
const { Header } = Layout;

const HeaderFC: React.FC = () => {
  return (
    <Header className='header-container'>
      <Row>
        <Col span={18} push={6}>
          <Title>Blog</Title>
        </Col>
        <Col span={6} pull={18}>
          <Link to='/'>
            <RollbackOutlined />
          </Link>
        </Col>
      </Row>
    </Header>
  )
};

export default HeaderFC;
