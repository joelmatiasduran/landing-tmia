import Image from "next/image";
import Logo from "../public/images/logo-bookmarktwo.svg";
import TwitterIcon from "../public/images/icon-twitter.svg";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

// interface FooterProps {}

const Footer: React.FC = () => {
  return (
    <>
      <footer className="flex flex-col md:flex-row justify-center md:justify-between  py-12 px-32 text-white body-font bg-very-dark-blue">
        <div className="flex flex-col items-center justify-center md:justify-start md:flex-row">
          <a
            href="#"
            rel="noopener noreferrer"
            className="text-2xl text-white ml-1 fill-white items-center"
          >
            <Image
              src={Logo}
              alt="Navbar Logo"
              className="text-black"
              width="200"
              height="33"
            />
          </a>
          <div className="flex flex-col items-center justify-center md:block text-2xl md:ml-16">
            <a
              href="#"
              className="pt-8 md:py-auto px-6 cursor-pointer hover:text-soft-red duration-300"
            >
              FEATURES
            </a>
            <a
              href="#"
              className="pt-8 md:py-auto px-6 cursor-pointer hover:text-soft-red duration-300"
            >
              PRICING
            </a>
            <a
              href="#"
              className="pt-8 md:py-auto px-6 cursor-pointer hover:text-soft-red duration-300"
            >
              CONTACT
            </a>
          </div>
        </div>
        {/* Icons */}
        <div className="mt-12 md:mt-auto flex flex-row justify-center md:justify-between text-white text-4xl">
          <a
            href="#"
            className="px-12 md:px-6 cursor-pointer hover:text-soft-red duration-300"
          >
            <AiFillFacebook />
          </a>
          <a
            href="#"
            className="px-12 md:px-auto cursor-pointer hover:text-soft-red duration-300"
          >
            <FaTwitter />
          </a>
        </div>
      </footer>
    </>
  );
};
export default Footer;
