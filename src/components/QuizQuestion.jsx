import React from 'react';
import QuizOption from './QuizOption';

const QuizQuestion = ({quiz}) => {
    const {question,options,correctAnswer, id} = quiz;
    console.log('quiz',quiz);
    
    return (
        <div className='px-4 py-16 mx-auto my-5 bg-white shadow-lg sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:py-10'>
            <h2 className='text-2xl font-bold max-w-[600px] text-center mx-auto text-gray-800 mb-5'>Quiz : {question}</h2>
            {
                options.map((option)=><QuizOption key={option.id} option={option}></QuizOption>)
            }
        </div>
    );
};

export default QuizQuestion;