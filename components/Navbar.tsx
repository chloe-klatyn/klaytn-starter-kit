import Link from "next/link";
import Image from "next/image";
import brandImg from "../public/brandmark.svg";

const Navbar = () => {
  return (
    <div className="h-screen w-1/6 shadow sticky top-0 z-50 font-light">
      <ul className="">
        <li className="my-4">
          <Image src={brandImg} alt="Logo" width="200px" height="40px" />
        </li>
        <div className="cursor-pointer bg-grey">
          <Link href="/">
            <li className="p-2">Home</li>
          </Link>
        </div>
        <div className="cursor-pointer bg-grey">
          <Link href="/tools">
            <li className="p-2">Tools</li>
          </Link>
        </div>
        <div className="cursor-pointer bg-grey">
          <Link href="/starter">
            <li className="p-2">Starter Kits</li>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
