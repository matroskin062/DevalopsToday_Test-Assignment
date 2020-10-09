import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import MainLayout from '../../components/MainLayout/MainLayout';
import { IPost } from '../../types/types';
import { addNewPost } from '../../store/actions/actions';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../../components/Button/Button';
import styled from 'styled-components';
import InputError from '../../components/InputError/InputError';
import Head from 'next/head';

const Input = styled.input`
  width: 100%;
  padding: 10px 10px;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  font-size: 100%;
`;

const Textarea = styled.textarea`
  width: 100%;
  outline: none;
  border: none;
  border-radius: 10px;
  min-height: 200px;
  resize: none;
  padding: 20px;
  font-size: 14px;
  font-family: 'Montserrat';
  margin-top: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Title = styled.h1`
  padding: 20px 0px;
  display: flex;
  justify-content: center;
`;

const schema = yup.object().shape({
  title: yup
    .string()
    .trim()
    .required('Please enter post title')
    .min(5, 'Minimum 5 characters')
    .max(65, 'Your title too long (maximum 65 characters)'),
  body: yup
    .string()
    .trim()
    .required('Please enter post body')
    .min(5, 'Minimum 5 characters'),
});

const NewPost = () => {
  const { register, errors, handleSubmit } = useForm<IPost>({
    resolver: yupResolver(schema),
  });

  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = async (data: IPost) => {
    dispatch(addNewPost(data));
    router.push('/');
  };

  return (
    <MainLayout>
      <Head>
        <title>Create new post</title>
      </Head>
      <div>
        <Title>Create New Post</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor={'title'}>Post title</label>
          <Input name='title' ref={register} placeholder='Enter post title' />
          <InputError>{errors.title?.message}</InputError>
          <label htmlFor='body'>Post Body</label>
          <Textarea
            name='body'
            ref={register}
            placeholder='Enter post body'
          ></Textarea>
          <InputError>{errors.body?.message}</InputError>
          <Button>Create</Button>
        </form>
      </div>
    </MainLayout>
  );
};

export default NewPost;
