import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import MainLayout from '../components/MainLayout/MainLayout';
import { IPost } from '../types/types';
import { getPosts } from '../store/actions/actions';
import { RootState, wrapper } from '../store/store';
import styled from 'styled-components';

export const PostList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  
  @media(max-width:960px){
    &{
      grid-template-columns: 1fr 1fr ;
    } 
  }
  @media(max-width:600px){
    &{
      display: block;
    }
  }
`;

export const PostItem = styled.div`
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin-bottom: 20px;
  border-radius: 5px;
  transition: 0.3s all;
  cursor: pointer;
  &:hover {
    color: #023047;
  }
  &:hover > p {
    border-bottom: 1px solid black;
  }
`;

export const PostTitle = styled.p`
  width: fit-content;
  transition: 0.3s all;
  position: relative;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid transparent;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: 5px;
`;

export default function Home() {
  const { items } = useSelector(({ posts }: RootState) => posts);
  return (
    <MainLayout>
      <PostList>
        {items
          ?.sort((b, a) => a.id - b.id)
          .map((el: IPost) => (
            <Link
              href='/posts/[postId]'
              as={`/posts/${el.id}`}
              key={el.id + el.title}
            >
              <PostItem>
                <Image src='assets/img.jpg' alt='image' />
                <PostTitle>{el.title}</PostTitle>
              </PostItem>
            </Link>
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
