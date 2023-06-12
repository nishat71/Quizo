import React from 'react';
import QuizOption from './QuizOption';
import { AiFillEye } from 'react-icons/ai';
import {toast} from 'react-toastify';
import style from '../assets/styles/Question.style.css'

const QuizQuestion = ({quiz,currentQuestion}) => {
    const {question,options,correctAnswer, id} = quiz;
    // console.log('quiz',quiz);

    
    
    const showAnswer = ()=>{
        toast.info(`Correct Answer:  ${correctAnswer}`, { autoClose: 2000 });
    }

    
    const handleCheckAnswer = (option)=>{
        if(option === correctAnswer){
            toast.success("Answer is Correct", {autoClose:1000});
        }
        else{
            toast.error("Answer is Wrong", {autoClose:1000});
        }
    }
  
    return (
        <div className='px-4 py-16 mx-auto my-5 text-gray-100 bg-gray-900 shadow-lg sm:max-w-xl md:max-w-full lg:max-w-screen-md md:px-24 lg:px-8 lg:py-10'>
          <div className='flex'>
            <h2 className='text-2xl font-bold max-w-[600px] text-center mx-auto text-white mb-5'>Quiz :{currentQuestion} {question.slice(3,-4)}</h2>
            <button className='text-2xl text-white' onClick={()=>showAnswer()}><AiFillEye/></button>
          </div>
            
            { 
                options.map((option,index)=>{
                    return (
                        <button key={index} className={`block w-10/12 p-4 m-3 mx-auto text-lg font-semibold border border-gray-500 rounded-full`} onClick={()=>handleCheckAnswer(option)}>
                          <input type="radio" className='w-6 h-4 mr-2' id='option' name='quiz-option' value="option"/>
                            {option}
                        </button>
                    )
                })
            }
        </div>
    );
};

export default QuizQuestion;






{/* {
     options.map((option)=><QuizOption key={option.id} option={option}></QuizOption>)
} */}