import { useState } from "react";

interface indexProps {}

const Faq: React.FC<indexProps> = ({}) => {
  const [isOpen, setIsOpen] = useState<string>("none");
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white mx-8 md:mx-auto">
        <div className="flex flex-col items-center justify-center text center">
          <h2 className="text-4xl font-bold text-center text-very-dark-blue">
            Frequently Asked Questions
          </h2>
          <h6 className="pt-8 pb-10 text-xl max-w-2xl text-center text-gray-500">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </h6>
        </div>
        <div className="flex flex-col justify-center items-center max-w-2xl w-full">
          <div className="border-t border-gray-300 py-4 pb-4 w-full">
            <div
              className="flex flex-row justify-between w-full min-w-full cursor-pointer hover:text-soft-red duration-300"
              onClick={() =>
                setIsOpen("none" ? "first" : "first" ? "none" : "none")
              }
            >
              <h2 className="flex-grow text-xl">What is Bookmark?</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-8 w-8 font-bold ${
                  isOpen === "first"
                    ? "text-soft-red rotate-180 duration-300"
                    : "text-soft-blue duration-300"
                } cursor-pointer`}
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
            <h5
              className={
                isOpen !== "none"
                  ? "mt-10 text-xl text-gray-400 duration-300"
                  : "delay-300 h-0 hidden duration-300"
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
              quis quam ornare mattis.
            </h5>
          </div>
          <div className="border-t border-gray-300 py-4 pb-4 w-full">
            <div
              className="flex flex-row justify-between w-full min-w-full cursor-pointer hover:text-soft-red duration-300"
              onClick={() => setIsOpen("1")}
            >
              <h2 className="flex-grow text-xl">
                How can I request a new browser?
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-8 w-8 font-bold ${
                  isOpen === "1"
                    ? "text-soft-red rotate-180 duration-300"
                    : "text-soft-blue duration-300"
                } cursor-pointer`}
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
            <h5
              className={
                isOpen
                  ? "mt-10 text-xl text-gray-400 duration-300"
                  : "delay-300 h-0 hidden duration-300"
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
              quis quam ornare mattis.
            </h5>
          </div>
          <div className="border-t border-gray-300 py-4 pb-4 w-full">
            <div
              className="flex flex-row justify-between w-full min-w-full cursor-pointer hover:text-soft-red duration-300"
              onClick={() => setIsOpen("3")}
            >
              <h2 className="flex-grow text-xl">Is there a mobile app?</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-8 w-8 font-bold ${
                  isOpen === "3"
                    ? "text-soft-red rotate-180 duration-300"
                    : "text-soft-blue duration-300"
                } cursor-pointer`}
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
            <h5
              className={
                isOpen
                  ? "mt-10 text-xl text-gray-400 duration-300"
                  : "delay-300 h-0 hidden duration-300"
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
              quis quam ornare mattis.
            </h5>
          </div>
          <div className="border-t border-gray-300 py-4 pb-4 w-full">
            <div
              className="flex flex-row justify-between w-full min-w-full cursor-pointer hover:text-soft-red duration-300"
              onClick={() => setIsOpen("4")}
            >
              <h2 className="flex-grow text-xl">
                What about other Chromium Browsers?
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-8 w-8 font-bold ${
                  isOpen === "4"
                    ? "text-soft-red rotate-180 duration-300"
                    : "text-soft-blue duration-300"
                } cursor-pointer`}
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
            <h5
              className={
                isOpen
                  ? "mt-10 text-xl text-gray-400 duration-300"
                  : "delay-300 h-0 hidden duration-300"
              }
            >
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
