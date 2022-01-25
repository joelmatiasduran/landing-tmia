import Image from "next/image";
import Lines from "../../public/images/bg-dots.svg";

interface CardProps {
  BrowserName: string;
  BrowserImage: string;
  MinVersion: string;
}

const Card: React.FC<CardProps> = ({
  BrowserName,
  BrowserImage,
  MinVersion,
}) => {
  return (
    <>
      <div className="my-24 mx-4 rounded-lg bg-white">
        <div className="px-4 py-8 text-center  shadow-2xl ">
          <div className="mx-12">
            <div className="mb-6 z-0">
              <Image
                src={BrowserImage}
                alt={BrowserName}
                width="120"
                height="120"
              />
            </div>
            <h2 className="text-2xl font-bold">Add to {BrowserName}</h2>
            <h6 className="pt-4">Minimum version {MinVersion}</h6>
          </div>
          <div className="mt-12 flex flex-col">
            <Image src={Lines} alt="Lines" width="120" height="5" />
            <button className="mt-12 px-8 py-4 bg-blue-600 hover:bg-white border-4 border-transparent hover:border-blue-600 rounded-lg text-lg text-white hover:text-blue-600 duration-300">
              Add & Install Extension
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
