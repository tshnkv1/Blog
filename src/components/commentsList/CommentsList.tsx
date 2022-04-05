import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Comment, Typography } from 'antd';
import {
  IComment,
} from '../../types';
import Error from '../error/Error';
import Loader from '../loader/Loader';


const { Text, Title } = Typography;

interface StateProps {
  pending: boolean,
  comments: IComment[],
  error: boolean,
};

interface OwnProps {
  postId: number,
}

type Props = StateProps & OwnProps;

const CommentsList: React.FC<Props> = (props: Props) => {
  const {
    pending,
    comments,
    error,
    postId,
  } = props;

  const commentsList = comments.map((comment) => (
    <Comment key={comment.id}
      author={
        // <Link to={`/${comment.id}`}>
          <Title level={5}>{comment.name}</Title>
        // </Link>
      }
      content={<Text>{comment.body}</Text>}
    />
  ))

  return (
    <>
    {pending
    ? <Loader />
    : (error ? <Error /> : commentsList)
    }
    </>
    
  )
};
const mapStateToProps = (state: any) => {
  const commentsReducer = state.comments;
  return {
    pending: commentsReducer.pending,
    comments: commentsReducer.comments,
    error: commentsReducer.error,
  }
};

export default connect<StateProps>(mapStateToProps)(CommentsList);
