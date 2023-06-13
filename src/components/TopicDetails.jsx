import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from './QuizQuestion';

const TopicDetails = () => {
    const TopicDetails = useLoaderData();
    const TopicDetailsData = TopicDetails.data;
    // console.log("TopicData",TopicDatas);

    const { id, logo, name, questions, total } =TopicDetailsData;
    


    
    return (
        <div className='px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 '>
            <h2 className='text-2xl font-extrabold leading-none tracking-normal text-center text-gray-600 md:text-3xl'>Quiz of {name}</h2>
            <div>
            {
                questions.map((quiz, index)=><QuizQuestion key={quiz.id} quiz={quiz} currentQuestion={index+1}></QuizQuestion>)
            }
            </div>
                
        </div>
    );
};

export default TopicDetails;