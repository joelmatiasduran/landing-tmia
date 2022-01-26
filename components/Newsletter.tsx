import React from "react";

interface NewsletterProps {}

const Newsletter: React.FC<NewsletterProps> = ({}) => {
  return (
    <>
      <div className="w-full bg-soft-blue text-white">
        <div className="container px-5 py-14 mx-auto flex md:items-center lg:items-center md:flex-col md:flex-nowrap flex-wrap flex-col">
          <h3 className="py-6 text-xl text-center">35.000 + ALREADY JOINED</h3>
          <h3 className="text-4xl font-semibold md:max-w-md text-center">
            Stay up-to-date with what we are doing
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center w-full pt-8 pb-4">
            <input className="w-full md:w-auto py-4 px-8 md:px-4 rounded-md text-black text-center" />
            <button className="w-full md:w-auto mt-12 md:my-auto md:ml-4 px-8 py-4 text-white hover:text-soft-red bg-soft-red hover:bg-white border-2 border-transparent hover:border-soft-red rounded-lg duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Newsletter;
