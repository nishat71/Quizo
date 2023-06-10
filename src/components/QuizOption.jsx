import React from 'react';

const QuizOption = ({option}) => {
    // console.log(option);
    return (
        <div className='block p-3 mx-auto mb-3 bg-white border border-gray-600 rounded-full max-w-[500px]'>
          <div className='flex items-center'>
            <h2 className='w-6 h-6 mr-2 border border-gray-600 rounded-full'><span className='w-4 h-4 bg-gray-600'></span></h2>
            <h2>{option}</h2>
          </div>
        </div>
    );
};

export default QuizOption;