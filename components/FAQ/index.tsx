import React from "react";

interface indexProps {}

const Faq: React.FC<indexProps> = ({}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white">
        <div className="flex flex-col items-center justify-center text center">
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          <h6 className="pt-8 text-xl">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </h6>
        </div>
        <div>
          <h2></h2>
        </div>
        <div>
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
