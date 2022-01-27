import { useState } from "react";
import Image from "next/image";
import FirstImg from "../../public/images/illustration-features-tab-1.svg";
import SecondImg from "../../public/images/illustration-features-tab-2.svg";
import ThirdImg from "../../public/images/illustration-features-tab-3.svg";
import FeatureInfo from "./FeatureInfo";

interface indexProps {}

const Features: React.FC<indexProps> = ({}) => {
  const [currentTab, setCurrentTab] = useState<"first" | "second" | "third">(
    "first"
  );

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-8 w-full min-w-full px-8 md:px-auto">
        <div>
          <h2 className="text-4xl font-bold text-center text-very-dark-blue">
            Features
          </h2>
          <h4 className="pt-8 text-lg md:text-2xl text-gray-500 max-w-2xl text-center">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go
          </h4>
        </div>
        <div className="mt-16 flex flex-col text-lg md:text-2xl justify-between border-b-2 border-b-gray-300 pt-5 max-w-sm  md:max-w-full">
          <div className="flex flex-col md:flex-row w-full min-w-full">
            <h4
              className="py-6 md:py-auto px-8 cursor-pointer text-center"
              onClick={() => setCurrentTab("first")}
            >
              Simple Bookmarking
            </h4>
            <h4
              className="py-6 md:py-auto px-8 cursor-pointer text-center"
              onClick={() => setCurrentTab("second")}
            >
              Speedy Searching
            </h4>
            <h4
              className="py-6 md:py-auto px-8 cursor-pointer text-center"
              onClick={() => setCurrentTab("third")}
            >
              Easy Sharing
            </h4>
          </div>
          <div
            className={`mt-8 transform ease-in-out duration-300 md:border-b-8 border-b-soft-red w-24 md:w-72 translate 
            ${currentTab === "first" && "md:translate-x-0"}
            ${currentTab === "second" && "md:translate-x-64 md:ml-4"}
            ${
              currentTab === "third" &&
              "md:translate-x-96 md:ml-32 will-change-scroll"
            }}`}
          ></div>
        </div>
        {/* The content of the features */}
        <div className="mt-12 w-full flex flex-col justify-center items-center">
          <div className="w-full flex flex-col  md:flex-row justify-center items-center">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute left-24">
                {currentTab === "first" && (
                  <Image src={FirstImg} alt={"Feature Image"} />
                )}
                {currentTab === "second" && (
                  <Image src={SecondImg} alt={"Feature Image"} />
                )}
                {currentTab === "third" && (
                  <Image src={ThirdImg} alt={"Feature Image"} />
                )}
              </div>
              <div className="bg-soft-blue rounded-r-full h-56 md:h-96 w-96 mt-24"></div>
            </div>
            <div className="mt-12 md:mt-auto w-full md:w-1/2 max-w-xl">
              {currentTab === "first" && (
                <FeatureInfo
                  FeatureTitle="Bookmark in one click"
                  FeatureContent="Organize your bookmarks however you like. Our simple
                    drag-and-drop interface gives you complete control over how
                    you manage your favourite sites."
                />
              )}
              {currentTab === "second" && (
                <FeatureInfo
                  FeatureTitle="Intelligent search"
                  FeatureContent="Organize your bookmarks however you like. Our simple
                    drag-and-drop interface gives you complete control over how
                    you manage your favourite sites."
                />
              )}
              {currentTab === "third" && (
                <FeatureInfo
                  FeatureTitle="Share your bookmarks"
                  FeatureContent="Organize your bookmarks however you like. Our simple
                    drag-and-drop interface gives you complete control over how
                    you manage your favourite sites."
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;
