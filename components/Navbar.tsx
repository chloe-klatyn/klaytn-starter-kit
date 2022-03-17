import Link from "next/link";
import Image from "next/image";
import brandImg from "../public/brandmark.svg";
import {
  HomeIcon,
  CubeTransparentIcon,
  BeakerIcon,
} from "@heroicons/react/solid";

const Navbar = () => {
  return (
    <div className="h-screen w-1/6 shadow shadow-lg sticky top-0 z-50 font-light p-2 bg-gray-100 text-gray-800">
      <ul className="">
        <li className="my-4">
          <Image src={brandImg} alt="Logo" width="200px" height="40px" />
        </li>
        <div className="cursor-pointer rounded-lg hover:bg-gray-200 hover:font-semibold">
          <Link href="/">
            <li className="p-4 flex items-center">
              <HomeIcon className="w-5 h-5 text-gray-600 mr-4 " />
              Home
            </li>
          </Link>
        </div>
        <div className="cursor-pointer rounded-lg hover:bg-gray-200  hover:font-semibold">
          <Link href="/tools">
            <li className="p-4 flex items-center">
              <BeakerIcon className="w-5 h-5 text-gray-600 mr-4" />
              Tools
            </li>
          </Link>
        </div>
        <div className="cursor-pointer rounded-lg hover:bg-gray-200 hover:font-semibold">
          <Link href="/starter">
            <li className="p-4 flex items-center">
              <CubeTransparentIcon className="w-5 h-5 text-gray-600 mr-4" />
              Starter Kits
            </li>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
