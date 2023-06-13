import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from './QuizQuestion';

const TopicDetails = () => {
    const TopicDetails = useLoaderData();
    const TopicDetailsData = TopicDetails.data;
    const QuestionLength = TopicDetailsData.questions.length;
    console.log("TopicDetailsData",TopicDetailsData);

    const { id, logo, name, questions, total } =TopicDetailsData;
    
    const [score, setScore] = useState(0)
    const [wrongAnswer, setWrongAnswer] = useState(0)


    
    return (
        <div className='relative px-4 mx-auto py-28 sm:py-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <h2 className='text-2xl font-extrabold leading-none tracking-normal text-center text-gray-600 md:text-3xl'>Quiz of {name}</h2>

            <div className=' max-w-[300px] h-20 p-3 text-gray-100 bg-gray-900 items-end absolute top-2 right-0 lg:top-8 lg:right-8 md:top-3 md:right-8 sm:top-2 sm:right-0'>
                <h2 className='font-medium font-lg'>Total Score : {score}/{QuestionLength}</h2>
                <h2 className='font-medium font-lg'>Total Wrong : {wrongAnswer}</h2>
            </div>
            
            <div>
            {
                questions.map((quiz, index)=><QuizQuestion 
                key={quiz.id} quiz={quiz} 
                currentQuestion={index+1} 
                score={score} setScore={setScore} 
                wrongAnswer={wrongAnswer} setWrongAnswer={setWrongAnswer}
                 QuestionLength={QuestionLength}>
                </QuizQuestion>)
            }
            </div>
                
        </div>
    );
};

export default TopicDetails;