import { useState, ReactNode } from "react";

interface AccordionProps {
  children?: ReactNode;
  title?: string;
}

const Accordion: React.FC<AccordionProps> = ({ children, title }) => {
  const [question, setQuestion] = useState(false);
  return (
    <>
      {" "}
      <div className="border-t border-gray-300 py-4 pb-4 w-full">
        <div
          className="flex flex-row justify-between w-full min-w-full cursor-pointer hover:text-soft-red duration-300"
          onClick={() => setQuestion(!question)}
        >
          <h2 className="flex-grow text-xl">{title}</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-8 w-8 font-bold ${
              question && "text-soft-red rotate-180 duration-300"
            } ${!question && "text-soft-blue duration-300"}
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
          className={`transform duration-200 ease-in-out ${
            question && "delay-100 scale-100 mt-10 text-xl text-gray-400"
          } ${!question && "opacity-0 scale-0 h-0"}`}
        >
          {children}
        </h5>
      </div>
    </>
  );
};
export default Accordion;
