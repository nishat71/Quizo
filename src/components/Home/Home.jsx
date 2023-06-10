import React from 'react';

const Home = () => {
    return (
        <div className='w-full h-screen'>
            <img className='top-0 left-0 object-cover w-full h-screen' 
            src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
            <div className='absolute left-0 w-full h-screen top-16 bg-black/60'></div>
            <div className='absolute flex flex-col justify-center w-full h-full text-white top-16'>
                {/* <div className='max-w-[1100px] m-auto absolute p-4 md:left-[10%]'> */}
                <div className='max-w-[1100px] mx-auto text-center'>
                    <p className='text-md'>WELCOME TO QUIZO</p>
                    <h1 className='text-4xl font-bold md:text-6xl drop-shadow-2xl'>Programming Quiz Contest</h1>
                    <p className='md:max-w-[600px] sm:max-w-[500px] drop-shadow-2xl md:text-xl py-3 mx-auto text-lg'>Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.</p>
                    <button className='px-3 py-2 font-medium tracking-wide text-white transition duration-200 bg-transparent border border-white rounded-md shadow-md hover:bg-white hover:text-black focus:shadow-outline focus:outline-none'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Home;