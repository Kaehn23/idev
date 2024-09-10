import React from "react";
import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <div id="footer" className="bg-[#5f5e5e] w-full h-30 text-white">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-2 py-2">
        <div className="flex justify-center items-center m-4">
          <Link
            href="www.linkedin.com/in/iparraguirre-jeremy"
            className="cursor-pointer flex items-center"
          >
            ©  www.J-iDev.com <p className="font-bold p-1"></p>{" "}
           
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center tracking-wide mt-auto">
          <div>© Concept-Truck 2024</div>
          <Link href="https://www.j-idev.com">
            <div className="m-2 cursor-pointer">©  www.J-iDev.com</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

