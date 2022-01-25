import Image from "next/image";
import HeroImage from "../public/images/illustration-hero.svg";
// interface HeroProps {

// }
const Hero: React.FC = ({}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-14 w-full min-w-full">
        <div className="flex flex-row w-full min-w-full">
          <div className="w-1/2">
            <div className="px-44 py-24">
              <h1 className="text-5xl font-bold font-Rubik">
                A Simple Bookmark Manager
              </h1>
              <p className="text-xl mt-8">
                A clean and simple interface to organize your favourite
                websites. Open a new browser tab and see your sites load
                instantly.Try it for free.
              </p>
              <div className="mt-12 ml-2">
                <button className="mr-4 border-4 text-white bg-blue-500 px-8 py-4 rounded-lg">
                  Get it on Chrome
                </button>
                <button className="border-4 border-very-dark-blue px-8 py-4 rounded-lg">
                  Get it on Firefox
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="w-full relative flex flex-col-reverse mt-64">
              <div className="absolute">
                <Image
                  src={HeroImage}
                  alt="Bookmark Image"
                  width="700"
                  height="500"
                />
              </div>
              <div className="ml-12">
                <div className="bg-soft-blue h-60 flex-grow rounded-l-b-full rounded-l-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
