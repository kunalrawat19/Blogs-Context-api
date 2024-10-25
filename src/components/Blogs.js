import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import Spinner from './Spinner';

const Blogs = () => {
  // Consume context
  const { posts, loading } = useContext(AppContext);
  console.log(posts);

  return (
    <div className='w-full max-w-[450px] mx-auto py-6 flex flex-col gap-y-6'>
      {
        loading ? (
          <Spinner />
        ) : (
          posts?.length === 0 ? (
            <div className='text-center'>
              <p className='text-lg text-gray-500'>No Post Found</p>
            </div>
          ) : (
            posts.map((post) => (
              <div key={post.id} className='p-4 border border-gray-300 rounded-lg shadow-sm'>
                <p className='font-bold text-xl mb-2'>{post.title}</p>
                <p className='text-sm text-gray-600 mb-2'>
                  By <span className='font-medium'>{post.author}</span> on <span className='font-medium'>{post.category}</span>
                </p>
                <p className='text-sm text-gray-500 mb-2'>Posted on {post.date}</p>
                <p className='text-gray-700 mb-4'>{post.content}</p>
                <div className='flex flex-wrap gap-2'>
                  {post.tags.map((tag, index) => (
                    <span key={index} className='bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded'>
                      {`#${tag}`}
                    </span>
                  ))}
                </div>
              </div>
            ))
          )
        )
      }
    </div>
  );
};

export default Blogs;
