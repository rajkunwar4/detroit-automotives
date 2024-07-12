import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className=" text-black py-3">
      <nav className="container flex justify-between  items-center">
        <span className="font-bold tracking-tighter text-xl">
          Detroit Automotives
        </span>

        <GiHamburgerMenu className="sm:hidden" />
        <div className="hidden sm:flex text-lg font-normal gap-3 lg:gap-10 text-gray-600 ">
          <a href="">
            {" "}
            <span className="hover:text-black transition cursor-pointer ">
              Home
            </span>
          </a>

          <span className="hover:text-black transition cursor-pointer px-1">
            About
          </span>
          <span className="hover:text-black transition cursor-pointer">
            Products
          </span>
          <span className="hover:text-black  transition cursor-pointer">
            Contact us
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
