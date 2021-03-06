import React from "react";
import Card from "./Card";
import ChromeImage from "../../public/images/logo-chrome.svg";
import OperaImage from "../../public/images/logo-opera.svg";
import FirefoxImage from "../../public/images/logo-firefox.svg";

interface indexProps {}

const Grid: React.FC<indexProps> = ({}) => {
  return (
    <>
      <div className="mt-48 flex flex-col justify-center items-center mx-8 md:mx-auto">
        <div className="">
          <h2 className="text-3xl font-bold text-center">
            Download the extension
          </h2>
          <h4 className="mt-4 text-lg md:text-2xl text-gray-500 text-center max-w-2xl">
            We have got more browser in the pipeline. Please do let us know if
            you have got a favourite you would like us to prioritize.{" "}
          </h4>
        </div>
        <div className="flex flex-row flex-wrap justify-around">
          <div>
            <Card
              BrowserName="Chrome"
              BrowserImage={ChromeImage}
              MinVersion="62"
            />
          </div>
          <div className="mt-8">
            <Card
              BrowserName="Firefox"
              BrowserImage={FirefoxImage}
              MinVersion="55"
            />
          </div>
          <div className="mt-16">
            <Card
              BrowserName="Opera"
              BrowserImage={OperaImage}
              MinVersion="46"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Grid;
