import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const{id,logo, name, total} = topic;


    return (
        <div className='w-full max-w-xs p-3 mx-auto bg-gray-300 rounded-md shadow-lg'>
            <img className='object-cover object-center w-full h-40 mb-6 bg-gray-400 rounded shadow-lg md:h-64 xl:h-72'
            src={logo} alt=''/>
           <div className='flex flex-col justify-between space-y-8'>
                <div className='space-y-2'>
                    <p className='text-xl font-semibold leading-none tracking-wide sm:text-2xl'>{name}</p>
                    <p className='text-gray-700 text-md'>No of Ques: {total}</p>
                </div>
                <Link to={`/topic/${id}`}>
                    <button type='button'
                        className='flex items-center justify-center w-full p-3 font-semibold tracking-wide text-white transition-colors duration-200 bg-gray-700 rounded-md hover:bg-gray-600'>
                        start practice
                    </button>
                </Link>
           </div>
      </div>
    );
};

export default Topic;