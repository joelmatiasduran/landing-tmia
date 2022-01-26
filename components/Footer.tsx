import Image from "next/image";
import Logo from "../public/images/logo-bookmarktwo.svg";
import TwitterIcon from "../public/images/icon-twitter.svg";
import FacebookIcon from "../public/images/icon-facebook.svg";

// interface FooterProps {}

const Footer: React.FC = () => {
  return (
    <>
      <div className="">
        <footer className="text-white body-font bg-very-dark-blue">
          <div className="bg-indigo-900 py-6">
            <div className="container mx-auto px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="flex flex-col md:flex-row justify-center items-center text-white text-sm text-center sm:text-left">
                <a
                  href="#"
                  rel="noopener noreferrer"
                  className="text-2xl text-white ml-1 fill-white"
                  target="_blank"
                >
                  <Image
                    src={Logo}
                    alt="Navbar Logo"
                    className="text-black"
                    width="200"
                    height="35"
                  />
                </a>
                <div className="flex flex-col md:flex-row p-6 text-2xl items-center justify-center">
                  <a className="pt-8 md:py-auto px-6 cursor-pointer hover:text-soft-red duration-300">
                    FEATURES
                  </a>
                  <a className="pt-8 md:py-auto px-6 cursor-pointer hover:text-soft-red duration-300">
                    PRICING
                  </a>
                  <a className="pt-8 md:py-auto px-6 cursor-pointer hover:text-soft-red duration-300">
                    CONTACT
                  </a>
                </div>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="p-4 fill-current text-2xl text-red-400 cursor-pointer">
                  <Image
                    src={FacebookIcon}
                    alt="Navbar Logo"
                    height="30"
                    width="30"
                  />
                </a>
                <a className="p-4 ml-8 text-2xl text-gray-200 cursor-pointer">
                  <Image
                    src={TwitterIcon}
                    alt="Navbar Logo"
                    height="30"
                    width="30"
                  />
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Footer;
