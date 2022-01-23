import React from "react";

// interface FooterProps {}

const Footer: React.FC = () => {
  return (
    <>
      <div className="mb-16">
        <footer className="text-white body-font bg-indigo-700">
          <div className="container px-5 py-14 mx-auto flex md:items-center lg:items-center md:flex-col md:flex-nowrap flex-wrap flex-col">
            <h3 className="py-6">35.000 + ALREADY JOINED</h3>
            <h3 className="text-3xl">Stay up-to-date with what we're doing</h3>
            <div className="flex flex-row items-center justify-center pt-4">
              <input className="py-2 px-4 rounded-md text-black" />
              <button className="ml-4 px-6 py-2 text-black hover:text-red-400 bg-white border-2 border-transparent hover:border-red-400 rounded-lg duration-300">
                Contact Us
              </button>
            </div>
          </div>
          <div className="bg-indigo-900">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-white text-sm text-center sm:text-left">
                <a
                  href="https://twitter.com/knyttneve"
                  rel="noopener noreferrer"
                  className="text-2xl text-white ml-1"
                  target="_blank"
                >
                  © TERAPIAMIA
                </a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="text-2xl text-gray-200">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-2xl text-gray-200">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Footer;
