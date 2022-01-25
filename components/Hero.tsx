import Image from "next/image";
import HeroImage from "../public/images/illustration-hero.svg";
// interface HeroProps {

// }
const Hero: React.FC = ({}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-14">
        <div className="flex flex-row">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold">A Simple Bookmark Manager</h1>
            <p className="text-xl mt-6">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly.Try it
              for free.
            </p>
            <div>
              <button className="border-4 text-white bg-blue-500 px-8 py-4 rounded-lg">
                Get it on Chrome
              </button>
              <button className="border-4 border-black px-8 py-4 rounded-lg">
                Get it on Firefox
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <div className="w-full relative flex flex-col-reverse mt-64">
              <div className="absolute">
                <Image src={HeroImage} alt="" width="800" height="600" />
              </div>
              <div className="ml-12">
                <div className="bg-blue-700 h-60 flex-grow rounded-l-b-full rounded-l-full "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
