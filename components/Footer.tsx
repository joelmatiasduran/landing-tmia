import React from "react";

// interface FooterProps {}

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className="flex flex-row bg-red-400 text-white">
          <h2>Terapia Mia</h2>
          <h2>Features</h2>
          <h2>Pricing</h2>
          <h2>Contact</h2>
        </div>
      </footer>
    </>
  );
};
export default Footer;
