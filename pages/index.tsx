import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../components/MainLayout/MainLayout';
import { IPost } from '../types/types';
import { deletePost, getPosts } from '../store/actions/actions';
import { RootState, wrapper } from '../store/store';
import styled from 'styled-components';
import Button from '../components/Button/Button';
import Head from 'next/head';

export const PostList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 960px) {
    & {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 600px) {
    & {
      display: block;
    }
  }
`;

export const PostItem = styled.div`
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin-bottom: 20px;
  border-radius: 5px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const PostTitle = styled.p`
  width: fit-content;
  transition: 0.3s all;
  position: relative;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid transparent;
  padding: 10px 0;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: 5px;
`;

export const PostLink = styled.a`
  cursor: pointer;
  color: #e07a5f;
  border-bottom: 1px solid transparent;
  transition: 0.2s all;
  &:hover {
    border-bottom: 1px solid #e07a5f;
  }
`;

const PostActions = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostBody = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow-y: hidden;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  padding: 20px 0;
  text-align: center;
`;

export default function Home() {
  const { items } = useSelector(({ posts }: RootState) => posts);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deletePost(id));
  };

  return (
    <MainLayout>
      <Head>
        <title>Home</title>
      </Head>
      <Title>Latest Posts</Title>
      <PostList>
        {items
          ?.sort((b, a) => a.id - b.id)
          .map((el: IPost) => (
            <PostItem key={el.id + el.title}>
              <Image src='assets/img.jpg' alt='image' />
              <PostTitle>{el.title}</PostTitle>
              <PostBody>{el.body}</PostBody>
              <PostActions>
                <Link
                  href='/posts/[postId]'
                  as={`/posts/${el.id}`}
                  key={el.id + el.title}
                >
                  <PostLink>Read Post &rarr;</PostLink>
                </Link>
                <Button
                  handleClick={() => handleDelete(String(el.id))}
                  btnType='danger'
                >
                  Delete Post
                </Button>
              </PostActions>
            </PostItem>
          ))}
      </PostList>
    </MainLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    await store.dispatch<any>(getPosts());
  }
);
