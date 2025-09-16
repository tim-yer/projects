'use client';

import { formatDate } from '@/lib/format';
import LikeButton from './like-icon';
import {togglePostLike} from "@/actions/posts";
import {useOptimistic} from "react";
import {log} from "next/dist/server/typescript/utils";
import Image from "next/image";
import {getPosts} from "@/lib/posts";

// export const generateMetadata = async ( ) =>  {
//     const posts = await getPosts();
//     const count = posts.length;
//     return {
//         title: `All posts (${count})`,
//         description: 'See all posts from all users in one place'
//     }
// }


const imageLoader = (config) => {
    const urlStart = config.src.split('/upload/')[0];
    const urlEnd = config.src.split('/upload/')[1];
    const transformation = `w_200,q_${config.quality}`;
    return `${urlStart}/upload/${transformation}/${urlEnd}`;
}

function Post({ post, action }) {
  return (
    <article className="post">
      <div className="post-image">
        <Image src={post.image} loader={imageLoader} width={140} height={100} quality={50} alt={post.title} />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{' '}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
              <form action={action.bind(null, post.id)} className={post.isLiked ? 'liked' : ''}>
                  <LikeButton />
              </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }) {


  const [optimisticPosts, updateOptimisticPosts] = useOptimistic(posts, (prevPosts, updatePostId) => {
      const updatePostIndex = prevPosts.findIndex(post => post.id === updatePostId);

      if( updatePostIndex === -1) {
          return prevPosts;
      }

      const updatePost = {...prevPosts[updatePostIndex]};

      updatePost.likes = updatePost.likes + (updatePost.isLiked ? -1 : 1);
      updatePost.isLiked = !updatePost.isLiked;
      const newPosts = [...prevPosts];
      newPosts[updatePostIndex] = updatePost;

      console.log(1);

      setTimeout(() => console.log(2), 0);

      Promise.resolve().then(() => console.log(3));

      console.log(4);

      return newPosts;


  })

  if (!optimisticPosts || optimisticPosts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  const updatePost = async (postId) => {
      updateOptimisticPosts(postId);
      await togglePostLike(postId);
  }

  return (
    <ul className="posts">
      {optimisticPosts.map((post) => (
        <li key={post.id}>
          <Post post={post} action={updatePost} />
        </li>
      ))}
    </ul>
  );
}
