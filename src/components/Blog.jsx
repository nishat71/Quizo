import React from 'react';

const Blog = () => {
    return (
        <section className="h-screen text-gray-100 bg-gray-900">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Some Questions Answer</h2>
                <p className="mt-4 mb-8 text-gray-400">Some basic question answers are given below.</p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg" open="">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400"> What is the purpose of React Router?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam taciti at adipiscing est. </p>
                    </details>
                    <details className="w-full border rounded-lg" open="">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400"> How does Context API work?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                    </details>
                    <details className="w-full border rounded-lg" open="">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Explain useRef (5 to 10 lines).</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;