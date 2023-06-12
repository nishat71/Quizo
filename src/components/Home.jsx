import React from 'react';
import Topics from './Topics';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='w-full h-screen'>
            <img className='top-0 left-0 object-cover w-full h-screen' 
            src="https://www.springboard.com/blog/wp-content/uploads/2022/08/programming-skills.png" alt="" />
            <div className='absolute left-0 w-full h-screen top-16 bg-black/60'></div>
            <div className='absolute flex flex-col justify-center w-full h-full text-white top-16'>
                {/* <div className='max-w-[1100px] m-auto absolute p-4 md:left-[10%]'> */}
                <div className='max-w-[1100px] mx-auto text-center'>
                    <p className='text-md'>WELCOME TO QUIZO</p>
                    <h1 className='text-4xl font-bold md:text-6xl drop-shadow-2xl'>Programming Quiz Contest</h1>
                    <p className='md:max-w-[600px] sm:max-w-[500px] drop-shadow-2xl md:text-xl py-3 mx-auto text-lg'>Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.</p>
                    <Link to="/topics"><button className='px-3 py-2 font-medium tracking-wide text-white transition duration-200 bg-transparent border border-white rounded-md shadow-md hover:bg-white hover:text-black focus:shadow-outline focus:outline-none'>Read More</button></Link>
                </div>
            </div>
            <Topics/>
        </div>
    );
};

export default Home;