import Link from "next/link";
import React from "react";

// interface NavbarProps {

// }

const Navbar: React.FC = () => {
  return (
    <>
      <nav>
        <p>Terapia Mia</p>{" "}
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        |{" "}
      </nav>
    </>
  );
};
export default Navbar;
