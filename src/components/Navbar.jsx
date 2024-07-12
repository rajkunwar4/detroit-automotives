import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className=" text-white py-3 bg-blue-950">
      <nav className="container flex justify-between  items-center">
        <span className="font-bold tracking-tighter text-lg sm:text-xl ">
          Detroit Automotives
        </span>

        <RxHamburgerMenu size={25} className="sm:hidden" />
        <div className="hidden sm:flex text-lg font-normal gap-3 lg:gap-10 text-gray-300 ">
          <a href="">
            {" "}
            <span className="hover:text-white transition cursor-pointer ">
              Home
            </span>
          </a>

          <span className="hover:text-white transition cursor-pointer px-1">
            About
          </span>
          <span className="hover:text-white transition cursor-pointer">
            Products
          </span>
          <span className="hover:text-white  transition cursor-pointer">
            Contact us
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
