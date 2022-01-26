import { useState } from "react";

interface indexProps {}

const Features: React.FC<indexProps> = ({}) => {
  const [isSelected, setIsSelected] = useState<string>("");

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-8 w-full">
        <div>
          <h2 className="text-4xl font-bold text-center">Features</h2>
          <h4 className="pt-8 text-2xl text-gray-500 max-w-2xl text-center">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go
          </h4>
        </div>
        <div className="mt-16 flex flex-row text-2xl justify-between border-2 border-b-black py-5">
          <h4 className="px-6">Simple Bookmarking</h4>
          <h4 className="px-6">Speedy Searching</h4>
          <h4 className="px-6">Easy Sharing</h4>
        </div>
      </div>
    </>
  );
};
export default Features;
