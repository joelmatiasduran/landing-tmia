import Image from "next/image";
import Logo from "../public/images/logo-bookmarktwo.svg";
import TwitterIcon from "../public/images/icon-twitter.svg";
import FacebookIcon from "../public/images/icon-facebook.svg";

// interface FooterProps {}

const Footer: React.FC = () => {
  return (
    <>
      <div className="">
        <footer className="text-white body-font bg-soft-blue">
          <div className="bg-indigo-900">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-white text-sm text-center sm:text-left">
                <a
                  href="#"
                  rel="noopener noreferrer"
                  className="text-2xl text-white ml-1 fill-white"
                  target="_blank"
                >
                  <Image src={Logo} alt="Navbar Logo" className="fill-white" />
                </a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="fill-current text-2xl text-red-400 cursor-pointer">
                  <Image
                    src={FacebookIcon}
                    alt="Navbar Logo"
                    height="30"
                    width="30"
                  />
                </a>
                <a className="ml-8 text-2xl text-gray-200 cursor-pointer">
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
