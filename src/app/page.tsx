import Image from "next/image";
import logo from "../app/pictures/fb.png"
export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="text-2xl w-1/2 px-[89]">
        <Image
          src={logo}
          height={250}
          width={250}
          alt="logo"
        ></Image>
        <p className="mt-3">Facebook helps you connect and share with people in your life.</p>
      </div>
      {/* right section  */}

    <div className="bg-white flex flex-col p-4 rounded-md w-1/4">

     <input  className="my-2 border border-1 border-gray-300 py-2 px-1 rounded-sm focus:outline-1 outline-blue-500 " type="text" placeholder="Email address or phonr number" />
      <input className="my-2 border border-1 border-gray-300 py-2 px-1 rounded-sm focus:outline-1 outline-blue-500"  type="password" placeholder="password" />
      <button className="bg-blue-600 my-2 py-1 text-lg font-bold text-white rounded-sm hover:bg-blue-700 ">Log in</button>
      <p className="text-center text-sm text-blue-600 hover:underline cursor-pointer">Forgotten password?</p>
      <span  className="my-2">
        <hr />
      </span>
      <button className=" bg-green-500 hover:bg-green-600 text-lg font-md my-2 py-1 px-2 mx-auto text-white rounded-sm w-fit">Create new account</button>
      </div>
    </div>
  );
}
