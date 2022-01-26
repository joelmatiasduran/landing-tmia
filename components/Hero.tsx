import Image from "next/image";
import HeroImage from "../public/images/illustration-hero.svg";
// interface HeroProps {

// }
const Hero: React.FC = ({}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center md:mt-24 md:pt-14 w-full min-w-full ">
        <div className="flex flex-col-reverse md:flex-row w-full min-w-full">
          <div className="w-full md:w-3/6">
            <div className="md:pl-44 pr-38 py-24">
              <h1 className="text-4xl md:text-6xl text-very-dark-blue font-bold font-Rubik w-full max-w-lg md:max-w-3xl text-center md:text-left">
                A Simple Bookmark Manager
              </h1>
              <p className="text-2xl mt-8 max-w-md md:max-w-4xl text-gray-400 text-center md:text-left">
                A clean and simple interface to organize your favourite
                websites. Open a new browser tab and see your sites load
                instantly.Try it for free.
              </p>
              <div className="mt-12 ml-2 flex items-center justify-center md:justify-start">
                <button className="mr-4 border-4 text-white bg-blue-500 px-8 py-4 rounded-lg">
                  Get it on Chrome
                </button>
                <button className="border-4 border-very-dark-blue px-8 py-4 rounded-lg">
                  Get it on Firefox
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/6">
            <div className="w-full relative flex flex-col-reverse mt-64">
              <div className="absolute left-8">
                <Image
                  src={HeroImage}
                  alt="Bookmark Image"
                  width="800"
                  height="600"
                />
              </div>
              <div className="ml-52 flex flex-row-reverse">
                <div className="bg-soft-blue h-72 md:h-96 w-24 flex-grow rounded-l-b-full rounded-l-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
