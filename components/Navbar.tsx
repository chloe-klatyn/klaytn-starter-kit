import Link from 'next/link'
import Image from 'next/image'
import brandImg from '../public/brandmark.svg'
import { CubeTransparentIcon, BeakerIcon } from '@heroicons/react/solid'
import { AcademicCapIcon } from '@heroicons/react/outline'

const Navbar = () => {
  return (
    <div className="h-screen w-1/6 shadow shadow-lg sticky top-0 z-50 font-light p-2 bg-gray-100 text-gray-800">
      <ul className="">
        <Link href="/">
          <li className="my-4 cursor-pointer">
            <Image src={brandImg} alt="Logo" width="200px" height="40px" />
          </li>
        </Link>
        <div className="cursor-pointer rounded-lg hover:bg-gray-200 hover:font-semibold">
          <Link href="/sandbox">
            <li className="p-4 flex items-center">
              <CubeTransparentIcon className="w-5 h-5 text-gray-600 mr-4" />
              Sandbox
            </li>
          </Link>
        </div>
        <div className="cursor-pointer rounded-lg hover:bg-gray-200 hover:font-semibold">
          <Link href="/tutorials">
            <li className="p-4 flex items-center">
              <AcademicCapIcon className="w-5 h-5 text-gray-600 mr-4" />
              Tutorials
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
      </ul>
    </div>
  )
}

export default Navbar
