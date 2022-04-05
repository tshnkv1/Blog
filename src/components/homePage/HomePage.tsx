import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Layout,
  Typography,
  Row,
  Col,
  Divider,
  Space,
  Card,
  Spin,
  Alert,
} from 'antd';
import {
  connect,
  useDispatch,
} from 'react-redux';
import {
  getPostsRequest,
} from '../../store/actions/action';
import { IPost } from '../../types/index';
import Error from '../error/Error';
import Loader from '../loader/Loader';
import './HomePage.css';

const { Content } = Layout;
const { Text, Title } = Typography;

interface StateProps {
  pending: boolean,
  posts: IPost[],
  error: boolean,
};

type Props = StateProps;

const HomePage: React.FC<Props> = (props: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsRequest());
  }, []);

  const {
    pending,
    posts,
    error,
  } = props;
  const postList = posts.map((post) => (
    <Card
      className='post-card'
      key={post.id}
    >
      <Divider>
        <Link to={`${post.id}/comments`}>
          <Title level={4}>{post.title}</Title>
        </Link>
      </Divider>
      <Text>{post.body}</Text>
    </Card>
  ));

  return (
    <Content className='container'>
      <Row>
        <Col span={12} offset={6}>
          <Space direction="vertical">
            {pending 
            ? <Loader /> 
            : (error ? <Error /> : postList)
            }
          </Space>
        </Col>
      </Row>
    </Content>
  )
};

const mapStateToProps = (state: any) => {
  const postReducer = state.posts;
  return {
    pending: postReducer.pending,
    posts: postReducer.posts,
    error: postReducer.error,
  }
}

export default connect<StateProps>(mapStateToProps)(HomePage);
