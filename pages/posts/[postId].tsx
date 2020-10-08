import { NextPage } from 'next';
import React from 'react';
import { getPost } from '../../api/api';
import MainLayout from '../../components/MainLayout/MainLayout';
import { IComment, IPost } from '../../interfaces/interfaces';
import {
  Comments,
  Image,
  PostContent,
  Comment,
  User,
} from '../../styles/PostStyles';

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
