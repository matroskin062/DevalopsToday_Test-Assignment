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

const Input = styled.input`
  width: 100%;
  padding: 10px 10px;
  border: none;
  border-bottom: 1px solid gray;
  outline: none;
  margin-bottom: 20px;
`;

const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid gray;
  border-radius: 10px;
  min-height: 200px;
  resize: none;
  padding: 20px;
  font-size: 14px;
  font-family: sans-serif;
  margin: 10px 0;
`;

const schema = yup.object().shape({
  title: yup.string().required().min(5, 'Minimum 5 characters'),
  body: yup.string().required().min(5, 'Minimum 5 characters'),
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
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor={'title'}>Post title</label>
          <Input name='title' ref={register} />
          <p>{errors.title?.message}</p>
          <label htmlFor='body'>Post Body</label>
          <Textarea
            name='body'
            ref={register}
            placeholder='Enter post body'
          ></Textarea>
          <p>{errors.body?.message}</p>
          <Button>Submit</Button>
        </form>
      </div>
    </MainLayout>
  );
};

export default NewPost;
