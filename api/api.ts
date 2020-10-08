import { IPost } from '../types/types';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://simple-blog-api.crew.red/',
});

export const getAllPosts = async (): Promise<IPost[]> => {
  const { data } = await api.get('posts/');
  return data;
};

export const getPost = async (postId: string | string[]): Promise<IPost> => {
  const { data } = await api.get(`posts/${postId}?_embed=comments`);
  return data;
};

export const addPost = async (post: IPost): Promise<IPost> => {
  const { data } = await api.post('posts/', post);
  return data;
};
