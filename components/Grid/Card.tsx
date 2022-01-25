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
      <div className="my-24 mx-4 rounded-lg shadow-2xl bg-gray-100">
        <div className="px-4 py-8 text-center">
          <div className="mx-14">
            <div className="mb-6">
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
            <button className="mt-12 px-8 py-4 bg-blue-600 rounded-lg text-lg text-white">
              Add & Install Extension
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
