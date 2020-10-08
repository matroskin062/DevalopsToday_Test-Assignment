import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import MainLayout from '../components/MainLayout/MainLayout';
import { IPost } from '../interfaces/interfaces';
import { getPosts } from '../store/actions/actions';
import { RootState, wrapper } from '../store/store';
import { PostList, PostItem, PostTitle, Image } from '../styles/PostListStyles';

export default function Home() {
  //@ts-ignore
  const { items } = useSelector(({ posts }: RootState) => posts);
  return (
    <MainLayout>
      <PostList>
        {items?.map((el: IPost) => (
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
    //@ts-ignore
    await store.dispatch(getPosts());
  }
);
