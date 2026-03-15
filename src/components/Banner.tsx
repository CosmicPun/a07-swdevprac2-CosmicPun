"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
 
export default function Banner() {
  const covers = [
    "/img/cover.jpg",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
    "/img/cover4.jpg",
  ];
 
  const [index, setIndex] = useState(0);
  const router = useRouter();
 
  const handleBannerClick = () => {
    setIndex((prev) => (prev + 1) % covers.length);
  };
 
  return (
    <div
      className="block p-[5px] m-0 w-screen h-[60vh] relative"
      onClick={handleBannerClick}
      style={{ cursor: "pointer" }}
    >
      <Image
        src={covers[index]}
        alt="Banner Cover"
        fill={true}
        className="object-cover object-bottom"
      />
      <div className="relative top-[100px] z-20 text-center">
        <h1 className="text-4xl font-bold">Your Venue Partner</h1>
        <h3 className="text-xl mt-4">Find Your Perfect Event Space</h3>
      </div>
      <button
        className="bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent"
        onClick={(e) => {
          e.stopPropagation();
          router.push("/venue");
        }}
      >
        Select Venue
      </button>
    </div>
  );
}