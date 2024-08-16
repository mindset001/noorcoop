import React from 'react';

const Subscription = () => {
  return (
   <main className='flex justify-center'>
     <section className="w-[90%]  md:w-[80%] bg-gray-50 py-16">
      <div className="w-full text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-4">Get notified when new roles open up</h2>
        <p className="text-[#475467] text-[20px] font-[400] mb-8">Be the first to know when new jobs are posted!</p>
        <form className="flex flex-col sm:flex-row items-center w-full md:w-[50%] justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg shadow-sm border border-gray-300 w-full sm:w-auto sm:flex-1 mb-4 sm:mb-0 sm:mr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-purple-600 text-white font-semibold px-6 py-4 w-full md:w-[30%] rounded-lg hover:bg-purple-700 transition"
          >
            Subscribe
          </button>
        </form>
        <p className="text-[#475467] text-sm mt-4">
          We care about your data in our{' '}
          <a href="#" className="text-[#475467] underline">
            privacy policy
          </a>.
        </p>
      </div>
    </section>
   </main>
  );
};

export default Subscription;
