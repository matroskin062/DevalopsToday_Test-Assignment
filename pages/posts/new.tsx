import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import MainLayout from '../../components/MainLayout/MainLayout';
import { IPost } from '../../interfaces/interfaces';
import { addNewPost } from '../../store/actions/actions';
import { Button, Input, Textarea } from '../../styles/NewPostStyle';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  title: yup.string().required().min(5, 'minimum 5'),
  body: yup.string().required().min(5, 'minimum 5'),
});

const NewPost = () => {
  const { register, errors, handleSubmit } = useForm<IPost>({
    resolver: yupResolver(schema),
  });

  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = (data: IPost) => {
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
          <Button type='submit'>Submit</Button>
        </form>
      </div>
    </MainLayout>
  );
};

export default NewPost;
