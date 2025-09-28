import Image from "next/image";

import logo from "../../../public/000.jpg";

export default function Introduction() {
  return (
    <>
   <div className="bg-black  text-white min-h-screen flex items-center justify-center px-6">
  <div className="max-w-6xl w-full pl-10  grid grid-cols-1 md:grid-cols-2 items-center gap-20">
    
    {/* Left: Text content */}
    <div>
      <h1 className="text-4xl font-semibold leading-snug mb-4">
        <span className="block text-white">I'm Samuel Girma,</span>
        <span className="text-purple-500 font-bold">a web developer</span>
      </h1>
      <p className="text-gray-300 mb-6">
       I develop modern websites using the latest technologies <span className="text-purple-500 font-bold">as a full-stack developer</span>— constantly evolving with the tech landscape.
      </p>
      <div className="flex space-x-4">
       

  <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-full shadow-md transition duration-300">
    <a href="#contact">Contact Me</a>
  </button>


        <button className="bg-white text-purple-600 font-semibold py-2 px-5 rounded-full shadow-md transition duration-300">
         <a href="#projects">View My Work</a>
        </button>
      </div>
    </div>

    {/* Right: Circular image */}
   <div className="flex justify-center items-center mr-8">
  <div className=" w-64 h-64 rounded-full bg-gradient-to-tr from-purple-600 to-purple-400 p-1">
    <div className="relative rounded-full overflow-hidden w-full h-full bg-white">
       <Image
        src="/000.jpg?v=2"
        alt="SAMI"
        fill
        className="object-cover"
      />
    </div>
  </div>
</div>


  </div>
</div>

</>
  );
}
