import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TopicDetails = () => {
    const TopicDetails = useLoaderData();
    const TopicData = TopicDetails.data;
    console.log(TopicData);

    const { id, logo, name, questions, total } =TopicData;

    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <h2 className='text-3xl font-semibold text-center'>Quiz of {name}</h2>
            <img src={logo} alt="" />

        </div>
    );
};

export default TopicDetails;