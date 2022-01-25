import React from "react";

interface NewsletterProps {}

const Newsletter: React.FC<NewsletterProps> = ({}) => {
  return (
    <>
      <div className="w-full bg-blue-500 text-white">
        <div className="container px-5 py-14 mx-auto flex md:items-center lg:items-center md:flex-col md:flex-nowrap flex-wrap flex-col">
          <h3 className="py-6">35.000 + ALREADY JOINED</h3>
          <h3 className="text-4xl font-semibold">
            Stay up-to-date with what we are doing
          </h3>
          <div className="flex flex-row items-center justify-center pt-4">
            <input className="py-4 px-4 rounded-md text-black" />
            <button className="ml-4 px-8 py-4 text-black hover:text-red-400 bg-white border-2 border-transparent hover:border-red-400 rounded-lg duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Newsletter;
