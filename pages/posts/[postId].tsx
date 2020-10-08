import { NextPage } from 'next';
import React from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';
import { IComment, IPost } from '../../types/types';
import { getPost } from '../../api/api';
import styled from 'styled-components';

export const PostContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid gray;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  display: block;
  width: 50%;
  margin: 0 auto;
  @media(max-width: 768px){
    width: 70%
  }
`;

export const Comments = styled.div`
  padding: 20px 10px;
`;

export const Comment = styled.div`
  padding: 20px 0;
`;

export const User = styled.p`
  font-weight: bold;
`;

type PostProps = {
  post: IPost;
};

const Post: NextPage<PostProps> = ({ post }) => {
  return (
    <MainLayout>
      <PostContent>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </PostContent>
      <Image src='../assets/img.jpg' alt='image' />
      <Comments>
        <h3>{post.comments.length} Comments</h3>
        {post.comments?.map((el: IComment) => (
          <Comment key={el.id}>
            <User>{el.id}</User>
            <p>{el.body}</p>
          </Comment>
        ))}
      </Comments>
    </MainLayout>
  );
};

export default Post;

Post.getInitialProps = async ({ query }) => {
  const data = await getPost(query.postId);
  return {
    post: data,
  };
};
