import { DownArrow } from "../svgs";
import userImage from "../Images/user.png";
import logoImage from "../Images/logo.png";
import Image from "next/image";

export function Navbar() {
  return (
    <div className="flex justify-between">
      <div className="">
        <Image src={logoImage} height={30} width={30} alt="logo" />
      </div>
      <div className="flex border bg-gray-200 rounded-lg items-center px-2 gap-4">
        <Image src={userImage} height={28} width={28} alt="user image" />

        <div className="flex flex-col mr-12">
          <p className="text-xs text-gray-500">Welcome back</p>
          <p className="text-base text-gray-500">Akshita Patel</p>
        </div>
        <DownArrow />
      </div>
    </div>
  );
}
