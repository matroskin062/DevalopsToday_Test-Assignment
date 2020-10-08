import { IPost, IPostsState } from './../interfaces/interfaces';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://simple-blog-api.crew.red/',
});

export const getAllPosts = async () => {
  const { data } = await api.get('/posts');
  return data;
};

export const getPost = async (postId: any): Promise<IPost> => {
  const { data } = await api.get(`posts/${postId}?_embed=comments`);
  return data;
};
