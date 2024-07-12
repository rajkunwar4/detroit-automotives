import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-blue-950 text-white font-light pt-8 ">
      <div className="container flex flex-col gap-5  sm:flex-row sm:gap-10">
        <div className="logo hidden sm:inline">
          <img
            src="https://5.imimg.com/data5/TH/IZ/AB/SELLER-21101849/p-1000x1000.png"
            alt=""
            className="w-[200px]"
          />
        </div>
        <div className="contact flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Contact us</h3>
          <div className="font-medium">
            Detroit Automobiles India Private Limited.
          </div>
          <div>
            <p className="text-gray-400">Phone Number</p>
            <span className="font-normal">9999999999</span>
          </div>
          <div>
            <p className="text-gray-400">Our Location</p>
            <span className="font-normal">
              Trans Delhi Signature City, Ghaziabad, Uttar Pradesh
            </span>
          </div>
          <div>
            <p className="text-gray-400">Working hours</p>
            <span className="font-normal tracking-tighter">
              Mon - Fri 09:00 AM - 06:00 PM
            </span>
          </div>
        </div>
        <div className="socials">
          <h3 className="text-xl font-semibold">Connect with us</h3>
          <div className="flex items-center gap-2 mt-1 sm:justify-center sm:mt-3">
            <FaFacebook size={24} />
            <FaInstagram size={24} />
            <FaLinkedin size={24} />
            <FaWhatsapp size={24} />
          </div>
        </div>
        <div className="menu">
          <h3 className="text-xl font-semibold">Site Links</h3>
          <div className="flex flex-col">
            <span>Home</span>
            <span>About</span>
            <span>Catalogue</span>
          </div>
        </div>
      </div>
      <div className="mt-4 bg-slate-900 py-6">
        <p className="text-gray-500  container">
          {" "}
          @ 2024 Detroit Automobiles India Private Limited. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
