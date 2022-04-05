import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {
  Card,
  Col,
  Divider,
  Layout,
  Row,
  Typography,
} from 'antd';
import { getCommentsRequest, getSelectedPostRequest } from '../../store/actions/action';
import { IPost } from '../../types';
import Error from '../error/Error';
import Loader from '../loader/Loader';
import './PostPage.css';
import CommentsList from '../commentsList/CommentsList';

const { Content } = Layout;
const { Text, Title } = Typography;

interface StateProps {
  pending: boolean,
  selectedPost: IPost[],
  error: boolean,
};

type Props = StateProps;

const PostPage: React.FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  let param = useParams();
  
  const {
    pending,
    selectedPost,
    error,
  } = props;

  useEffect(() => {
    dispatch(getSelectedPostRequest(Number(param.slug)));
    dispatch(getCommentsRequest(Number(param.slug)));
  }, []);

  const postCard = selectedPost.map((post) => (
    <Card key={post.id}>
      <Divider>
        <Title level={3}>{post.title}</Title>
      </Divider>
      <Text>{post.body}</Text>
      <Divider>
        <Title level={4}>Comments</Title>
      </Divider>
      <CommentsList postId={post.id}/>
    </Card>
  ))

  return (
    <Content className='container'>
      <Row>
        <Col  span={14} offset={4}>
          {pending
          ? <Loader />
          : (error ? <Error /> : postCard)
          }
        </Col>
      </Row>
    </Content>
  )
};

const mapStateToProps = (state: any) => {
  const postReducer = state.posts;
  return {
    pending: postReducer.pending,
    selectedPost: postReducer.selectedPost,
    error: postReducer.error,
  }
};

export default connect<StateProps>(mapStateToProps)(PostPage);
