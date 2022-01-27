import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/logo-bookmark.svg";
// interface NavbarProps {

// }

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="flex md:items-center justify-between flex-row md:flex-wrap p-8 md:px-40 fixed w-full md:bg-white  z-10">
        <div className="flex items-center flex-shrink-0 text-black mr-6 cursor-pointer">
          <Image src={Logo} alt="Navbar Logo" width="200" height="35" />
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 text-very-dark-blue border-tsoft-red hover:text-soft-red hover:border-white duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
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
