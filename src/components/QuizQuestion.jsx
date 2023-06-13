import React, { useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { toast } from 'react-toastify';

const QuizQuestion = ({quiz,currentQuestion, setScore, score, wrongAnswer,setWrongAnswer,QuestionLength}) => {
  const { question, options, correctAnswer, id } = quiz;
  const [selectedOption, setSelectedOption] = useState(null);

  
  const showAnswer = () => {
    toast.info(`Correct Answer: ${correctAnswer}`, { autoClose: 2000 });
  };

  
  const handleCheckAnswer = (option) => {
    setSelectedOption(option);
    if (option === correctAnswer) {
      toast.success('Answer is Correct', { autoClose: 1000 });
      setScore(score + 1);
    } else {
      toast.error('Answer is Wrong', { autoClose: 1000 });
      setWrongAnswer(wrongAnswer+1);
    }
  };

  return (
    <div className='relative px-4 py-12 mx-auto my-5 text-gray-100 bg-gray-900 shadow-lg sm:max-w-xl md:max-w-full lg:max-w-screen-md md:px-24 lg:px-8 lg:py-10'>
      <div className='flex'>
        <h2 className='text-lg sm:text-xl md:text-2xl font-semi-bold md:font-bold max-w-[600px] text-center mx-auto text-white mb-5'>
          Quiz: {currentQuestion} {question.slice(3, -4)}
        </h2>
        <button className='absolute flex items-start text-2xl text-white right-2 top-5 md:right-5 md:top-10' onClick={() => showAnswer()}>
          <AiFillEye />
        </button>
      </div>

      {options.map((option, index) => {
        let buttonStyle = { backgroundColor: 'transparent' };
        let disabled = false;

        if (selectedOption !== null) {
          if (option === correctAnswer) {
            buttonStyle = { backgroundColor: 'green' };
          } else if (option === selectedOption) {
            buttonStyle = { backgroundColor: 'red' };
          }
          disabled = true;
        }

        return (
          <button
            key={index}
            className={`block w-10/12 p-4 m-3 mx-auto text-md sm:text-lg font-normal md:font-semibold border border-gray-500 rounded`}
            style={buttonStyle}
            onClick={() => handleCheckAnswer(option)}
            disabled={disabled}
          >
            <input type='radio' className='w-6 h-4 mr-2' id='option' name='quiz-option' value='option' />
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default QuizQuestion;









// import React, { useState } from 'react';
// import { AiFillEye } from 'react-icons/ai';
// import {toast} from 'react-toastify';


// const QuizQuestion = ({quiz,currentQuestion, setScore, score, wrongAnswer,setWrongAnswer,QuestionLength}) => {
//     const {question,options,correctAnswer, id} = quiz;
//     const [selected, setSelected] = useState();

    
//     const showAnswer = ()=>{
//         toast.info(`Correct Answer:  ${correctAnswer}`, { autoClose: 2000 });
//     }

    
//     const handleCheck = (option)=>{
//         if(option === correctAnswer){
//             toast.success("Answer is Correct", {autoClose:1000});
//             setScore(score + 1);
//             return 'correct';
//         }
//         else if(option !== correctAnswer){
//             toast.error("Answer is Wrong", {autoClose:1000});
//             setWrongAnswer(wrongAnswer+1);
//             return 'wrong';
//             //correct ans green and selected ans red and other ans disabled
//         }
//     }
  
//     const handleSelect = (option)=>{
//         if(selected === option && selected === correctAnswer){
//             // toast.success("Answer is Correct", {autoClose:1000});
//             return 'correct';
//         }
//         else if(selected === option && selected !== correctAnswer){
//             // toast.error("Answer is Wrong", {autoClose:1000});
//             return 'wrong';
//         }
//         else if (option === correctAnswer){
//             return 'correct';
//         }
//     }


//     const handleCheckAnswer = (option) => {
//         setSelected(option);
//         if (option === correctAnswer) {
//             setScore(score + 1);
//         }
//         else{
//             setWrongAnswer(wrongAnswer+1);
//         }
//       };

      
      
//     return (
//         <div className='relative px-4 py-12 mx-auto my-5 text-gray-100 bg-gray-900 shadow-lg sm:max-w-xl md:max-w-full lg:max-w-screen-md md:px-24 lg:px-8 lg:py-10'>
//             <div className='flex'>
//                 <h2 className='text-lg sm:text-xl md:text-2xl font-semi-bold md:font-bold max-w-[600px] text-center mx-auto text-white mb-5'>Quiz :{currentQuestion} {question.slice(3,-4)}</h2>
//                 <button className='absolute flex items-start text-2xl text-white right-2 top-5 md:right-5 md:top-10' onClick={()=>showAnswer()}><AiFillEye/></button>
//             </div>
    
//             { options &&
//                 options.map((option,index)=>{
//                     return (
//                         <button key={index} className={`block w-10/12 p-4 m-3 mx-auto text-md  sm:text-lg font-normal md:font-semibold border border-gray-500 rounded ${selected && handleSelect(option)}`} 
//                             onClick={()=>handleCheck(option)} disabled={selected}>
//                                 {/* onClick={() => handleCheckAnswer(option)}  disabled={selected}>  */}
//                         <input type="radio" className='w-6 h-4 mr-2' id='option' name='quiz-option' value="option"/>
//                             {option}
//                         </button>
//                     )
//                 })
//             }
//     </div>
//     );
// };

// export default QuizQuestion;
