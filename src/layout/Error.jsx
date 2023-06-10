import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    
    return (
        <section className="flex items-center h-screen p-16 text-gray-100 bg-gray-900">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">

                    {
                        error && (
                            <div>
                                <h2 className="mb-8 font-extrabold text-gray-600 text-9xl">
                                    <span className="sr-only">Error</span>{error.status}
                                </h2>
                                <p className="text-2xl font-semibold md:text-3xl">{error.statusText || error.message}</p>
                                <p className="mt-4 mb-8 text-gray-400">But don't worry, you can find plenty of other things on our homepage.</p>
                            </div>
                        )
                    }
    
                    <Link to="/"
                   className="px-8 py-3 font-semibold text-gray-900 rounded bg-violet-400">
                        Back to homepage
                    </Link>


                    
                </div>
            </div>
        </section>
    );
};

export default Error;