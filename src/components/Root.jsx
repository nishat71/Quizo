import React, { createContext } from 'react';
import Header from '../layout/Header';
import { Outlet, useLoaderData } from 'react-router-dom';

export const TopicContext = createContext([]);

const Root = () => {
    const topics = useLoaderData();
    // const topicData = topics.data;
    // console.log(topicData);


    return (
        <TopicContext.Provider value={topics}>
            <Header/>
            <Outlet/>
        </TopicContext.Provider>
    );
};

export default Root;