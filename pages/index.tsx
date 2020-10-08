import Link from 'next/link';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MainLayout from '../components/MainLayout/MainLayout';
import { IPost } from '../interfaces/interfaces';
import { getPosts } from '../store/actions/actions';
import { RootState } from '../store/store';
import { PostList, PostItem, PostTitle, Image } from '../styles/PostListStyles';

export default function Home() {
  const posts = useSelector<RootState, IPost[]>(({ posts }) => posts.posts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <MainLayout>
      <PostList>
        {posts?.map((el: IPost) => (
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
