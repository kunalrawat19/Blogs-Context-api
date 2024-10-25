import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

const BottomBar = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  
  return (
    <div className='w-full max-w-[450px] flex items-center justify-between mt-1 my-2 '>
      <div className='flex space-x-4'>
        {page > 1 && (
          <button 
            onClick={() => handlePageChange(page - 1)} 
            className='bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition'
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button 
            onClick={() => handlePageChange(page + 1)} 
            className='bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition'
          >
            Next
          </button>
        )}
      </div>
      <div>
        <p className='text-gray-700 text-sm'>
          Page {page} of {totalPages}
        </p>   
      </div>
    </div>
  );
};

export default BottomBar;
