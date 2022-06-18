import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import welcomeSVG from "../public/welcome.svg";

const Home: NextPage = () => (
  <div className="flex flex-col h-full bg-inherit">
    <div className="mt-10 self-center">
      <Image src={welcomeSVG} alt="" className="" id="welcome_img" priority />
    </div>
    <div className=" text-container flex flex-col grow">
      <div className="my-auto">
        <h1 className="mt-[20px] mx-6 font-bold text-3xl text-center">
          Welcome to
        </h1>
        <h1 className=" mx-6 font-bold text-3xl text-center">{"Hospital X"}</h1>
        <p className="self-center mt-10 mx-12 text-center">
          Please complete this short form to see the next available doctor
        </p>
      </div>
    </div>
    <div className="">
      <Link href={"/form"} className="">
        <a className="bg-blue-700 text-white font-bold mx-4 mb-7  mt-3 py-2 rounded-full text-center block">
          Get Started
        </a>
      </Link>
    </div>
  </div>
);

export default Home;
