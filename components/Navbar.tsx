import Link from "next/link";
import Image from "next/image";
import brandImg from "../public/brandmark.svg";

const Navbar = () => {
  return (
    <div className="h-screen w-1/6 shadow shadow-lg sticky top-0 z-50 font-light p-2 bg-gray-100">
      <ul className="">
        <li className="my-4">
          <Image src={brandImg} alt="Logo" width="200px" height="40px" />
        </li>
        <div className="cursor-pointer rounded-lg hover:bg-gray-200 hover:font-semibold transition ease-in-out duration-100">
          <Link href="/">
            <li className="p-4">Home</li>
          </Link>
        </div>
        <div className="cursor-pointer rounded-lg hover:bg-gray-200  hover:font-semibold">
          <Link href="/tools">
            <li className="p-4">Tools</li>
          </Link>
        </div>
        <div className="cursor-pointer rounded-lg hover:bg-gray-200 hover:font-semibold">
          <Link href="/starter">
            <li className="p-4">Starter Kits</li>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
