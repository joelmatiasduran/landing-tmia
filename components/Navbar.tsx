import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/logo-bookmark.svg";
// interface NavbarProps {

// }

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-8 px-40 fixed w-full bg-white z-10">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <Image src={Logo} alt="Navbar Logo" width="200" height="35" />
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-black border-tsoft-red hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow"></div>
          <div>
            <a
              href="#responsive-header"
              className="block px-4 mt-4 lg:inline-block lg:mt-0 text-black mr-4 text-lg hover:text-soft-red"
            >
              FEATURES
            </a>
            <a
              href="#responsive-header"
              className="block px-4 mt-4 lg:inline-block lg:mt-0 text-black mr-4 text-lg hover:text-soft-red"
            >
              PRICING
            </a>
            <a
              href="#responsive-header"
              className="block px-4 mt-4 lg:inline-block lg:mt-0 text-black text-lg hover:text-soft-red"
            >
              CONTACT
            </a>
            <a
              href="#"
              className="inline-block mx-6 px-10 py-4 leading-none border rounded-lg text-white bg-soft-red border-transparent text-lg hover:border-soft-red hover:text-soft-red hover:bg-white mt-4 lg:mt-0 duration-300 font-semibold"
            >
              LOGIN
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
