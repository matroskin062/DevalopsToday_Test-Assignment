import React, { useRef } from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';
import { IComment } from '../../types/types';
import styled from 'styled-components';
import { RootState, wrapper } from '../../store/store';
import { addComment, getPost } from '../../store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import InputError from '../../components/InputError/InputError';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const PostContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid gray;
  margin-bottom: 20px;
`;

const Image = styled.img`
  display: block;
  width: 50%;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  @media (max-width: 768px) {
    width: 70%;
  }
`;

const Comments = styled.div`
  padding: 20px 10px;
  max-width: 800px;
  margin: 10px auto;
`;

const Comment = styled.div`
  padding: 20px 10px;
  background: white;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const User = styled.p`
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  margin-right: 10px;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  outline: none;
  font-size: 100%;
  padding: 0px 10px;
`;

const InputGroup = styled.form`
  display: flex;
  padding: 10px 0px;
`;

type FormInputType = {
  body: string;
};

const Post: NextPage<{ postId: number }> = ({ postId }) => {
  const { post } = useSelector((state: RootState) => state.curPost);
  const dispatch = useDispatch();

  const { register, errors, handleSubmit, reset } = useForm<FormInputType>({
    resolver: yupResolver(
      yup.object().shape({
        body: yup
          .string()
          .trim()
          .required('Please, enter comment text')
          .max(65, 'Your message too long'),
      })
    ),
  });

  const sendComment = (data: FormInputType) => {
    const comment: IComment = {
      postId: Number(postId),
      body: data.body,
    };
    dispatch(addComment(comment));
    reset();
  };

  return (
    <MainLayout>
      {post && (
        <>
          <PostContent>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </PostContent>
          <Image src='../assets/img.jpg' alt='image' />
          <Comments>
            <h3>{post.comments.length} Comments</h3>
            <InputGroup onSubmit={handleSubmit(sendComment)}>
              <Input
                type='text'
                name='body'
                ref={register}
                placeholder='Join the discussion...'
              />
              <Button>Send</Button>
            </InputGroup>
            <InputError>{errors.body?.message}</InputError>
            {post.comments?.map((el: IComment) => (
              <Comment key={el.id}>
                <User>{el.id}</User>
                <p>{el.body}</p>
              </Comment>
            ))}
          </Comments>
        </>
      )}
    </MainLayout>
  );
};

export default Post;

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, query }) => {
    await store.dispatch<any>(getPost(query.postId));
    return {
      props: {
        postId: query.postId,
      },
    };
  }
);
