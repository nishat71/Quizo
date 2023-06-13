import React from 'react';

const Blog = () => {
    return (
        <section className="h-screen text-gray-100 bg-gray-900">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold md:text-4xl">Some Questions Answer</h2>
                <p className="mt-2 mb-8 text-gray-400 sm:mt-4">Some basic question answers are given below.</p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg" open="">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400"> What is the purpose of React Router?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">The purpose of React Router is to provide declarative routing and navigation capabilities to React applications, allowing developers to create single-page applications with dynamic views and URL-based navigation. It helps manage the application's URL, enables nested and dynamic routing, and simplifies the implementation of features like route protection and history management. </p>
                    </details>
                    <details className="w-full border rounded-lg" open="">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400"> How does Context API work?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">The Context API in React provides a way to share data between components without passing props manually through each level of the component tree. It works by creating a "context" object that holds the shared data and providing it to the components that need access to that data. Components can then consume the context and access the shared data directly, simplifying the process of data sharing and avoiding prop drilling.  </p>
                    </details>
                    <details className="w-full border rounded-lg" open="">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Explain useRef (5 to 10 lines).</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">The useRef hook is a built-in hook in React that allows you to create a mutable reference that persists across re-renders of a component. It provides a way to store and access mutable values that are associated with a particular element or component.The primary use case of useRef is to access and modify DOM elements directly.Additionally, useRef can also be used to store other mutable values that don't trigger component re-renders. When the value stored in a ref is updated, the component doesn't re-render. This can be useful when you want to store and reference a value between renders without causing a re-render.Overall, useRef is a powerful tool in React that allows you to work with mutable values, access and modify DOM elements, and store data that persists across renders without triggering re-renders. </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;