import React from "react";

interface FeatureInfoProps {
  FeatureTitle: string;
  FeatureContent: string;
}

const FeatureInfo: React.FC<FeatureInfoProps> = ({
  FeatureTitle,
  FeatureContent,
}) => {
  return (
    <>
      <div>
        <h2 className="text-4xl font-semibold text-very-dark-blue text-center md:text-left">
          {FeatureTitle}
        </h2>
        <p className="mt-8 text-2xl text-gray-400 text-center md:text-left">
          {FeatureContent}
        </p>
        <button className="hidden md:block mt-8 rounded-md bg-soft-blue px-8 py-4 text-white font-bold">
          More Info
        </button>
      </div>
    </>
  );
};
export default FeatureInfo;
