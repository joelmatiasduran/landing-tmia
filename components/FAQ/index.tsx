import { useState } from "react";
import Accordion from "./Accordion";

interface indexProps {}

const Faq: React.FC<indexProps> = ({}) => {
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
          <Accordion title="What is Bookmark?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </Accordion>
          <Accordion title="How can I request a new browser?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </Accordion>
          <Accordion title="Is there a mobile app?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </Accordion>
          <Accordion title="What about other Chromium browsers?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </Accordion>
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
