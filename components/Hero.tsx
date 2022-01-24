import React from "react";

// interface HeroProps {

// }

const Hero: React.FC = ({}) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex flex-row w-full">
          <div className="w-1/2">
            <h1 className="text-4xl font-bold">A Simple Bookmark Manager</h1>
            <p className="mt-6">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly.Try it
              for free.
            </p>
            <div>
              <button className="border-4 border-purple-500 px-8 py-4 rounded-sm">
                Get it on Chrome
              </button>
              <button className="border-4 border-black px-8 py-4 rounded-sm">
                Get it on Firefox
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <h1 className="text-4xl font-bold">A Simple Bookmark Manager</h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
