import axios from 'axios';
import { API_BLOG } from '../consts/domains';
import { defaultPostsLimit } from '../consts/index';
import { ApiRequest } from '../types/index';

export const getPostsApi = async (limit?: number): Promise<ApiRequest> => {
  const response = await axios.get(`${API_BLOG}/posts?_limit=${
    limit || defaultPostsLimit
  }`);
  return response.data;
};

export const getSelectedPostApi = async (id: number): Promise<ApiRequest> => {
  const response = await axios.get(`${API_BLOG}/posts?id=${id}`);
  return response.data;
}

export const getCommentsApi = async (id: number): Promise<ApiRequest> => {
  const response = await axios.get(`${API_BLOG}/comments?postId=${id}`);
  return response.data;
};

export const setSelectedCommentApi = async (postId: number, commentId: number): Promise<ApiRequest> => {
  const response = await axios.get(`${API_BLOG}/comments?postId=${postId}&id=${commentId}`);
  return response.data;
};