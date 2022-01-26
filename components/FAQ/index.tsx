import React from "react";

interface indexProps {}

const Faq: React.FC<indexProps> = ({}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white">
        <div className="flex flex-col items-center justify-center text center">
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          <h6 className="pt-8 pb-10 text-xl max-w-2xl text-center text-gray-500">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </h6>
        </div>
        <div className="flex flex-col justify-center items-center max-w-2xl">
          <div className="border-t border-gray-300 py-4 pb-6">
            <div className="flex flex-row justify-between">
              <h2 className="text-xl">What is Bookmark?</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 font-bold text-soft-red"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </div>
            <h5 className="mt-10 text-xl text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
              quis quam ornare mattis.
            </h5>
          </div>
          <div className="border-t border-black py-4">
            <div>
              <h2 className="text-xl">What is Bookmark?</h2>
            </div>
            <h5 className="mt-10 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
              quis quam ornare mattis.
            </h5>
          </div>
          <div className="border-t border-black py-4">
            <div>
              <h2 className="text-xl">What is Bookmark?</h2>
            </div>
            <h5 className="mt-10 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
              quis quam ornare mattis.
            </h5>
          </div>
          <div className="border-t border-black py-4">
            <div>
              <h2 className="text-xl">What is Bookmark?</h2>
            </div>
            <h5 className="mt-10 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
              quis quam ornare mattis.
            </h5>
          </div>
        </div>

        <div className="my-8">
          <a href="#">
            <button className="px-8 py-4 rounded-lg bg-blue-500 text-white hover:text-blue-500 border-4 border-transparent hover:bg-transparent hover:border-blue-500 duration-300 ">
              More Info
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
export default Faq;
