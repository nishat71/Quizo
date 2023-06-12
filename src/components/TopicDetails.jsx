import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from './QuizQuestion';

const TopicDetails = () => {
    const TopicDetails = useLoaderData();
    const TopicDatas = TopicDetails.data;
    console.log("TopicData",TopicDatas);

    const { id, logo, name, questions, total } =TopicDatas;
    


    
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <h2 className='text-3xl font-extrabold leading-none tracking-normal text-center text-gray-600'>Quiz of {name}</h2>
            <div>
            {
                questions.map((quiz, index)=><QuizQuestion key={quiz.id} quiz={quiz} currentQuestion={index+1}></QuizQuestion>)
            }
            </div>
                
        </div>
    );
};

export default TopicDetails;