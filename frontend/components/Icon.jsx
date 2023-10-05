import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";


export default function Icon() {
  return (
    <Wrapper>
        <div className="font-extrabold text-4xl text-center my-5">
            Brands
        </div>
      <div className="bg-gray-100 border rounded-xl border-black grid grid-cols-2 md:grid-cols-3 my-5">
      <Image
            src="/adidas.svg"
            width={100}
            height={100}
            alt="/adidas.svg"
            loading="eager"
            priority={true}
            className=" mx-auto m-4 md:my-7  hover:animate-ping  " 
        />
        <Image
            src="/balenciaga.svg"
            width={100}
            height={100}
            alt="/adidas.svg"
            loading="eager"
            priority={true}
            className=" mx-auto m-4 md:my-7  hover:animate-ping"        />
        <Image
            src="/jordan.svg"
            width={70}
            height={70}
            alt="/adidas.svg"
            loading="eager"
            priority={true}
            className=" mx-auto m-4 md:my-7  hover:animate-ping"        />
        <Image
            src="/logo.svg"
            width={100}
            height={100}
            alt="/adidas.svg"
            loading="eager"
            priority={true}
            className=" mx-auto m-4 md:my-10  hover:animate-ping"        />
        <Image
            src="/puma.svg"
            width={100}
            height={100}
            alt="/adidas.svg"
            loading="eager"
            priority={true}
            className=" mx-auto m-4 md:my-7  hover:animate-ping"        />
        <Image
            src="/adidas.svg"
            width={100}
            height={100}
            alt="/adidas.svg"
            loading="eager"
            priority={true}
            className=" mx-auto m-4 md:my-7  hover:animate-ping"        />
        <Image
            src="/adidas.svg"
            width={100}
            height={100}
            alt="/adidas.svg"
            loading="eager"
            priority={true}
            className=" mx-auto m-4 md:my-7  hover:animate-ping"        />
        <Image
            src="/adidas.svg"
            width={100}
            height={100}
            alt="/adidas.svg"
            loading="eager"
            priority={true}
            className=" mx-auto m-4 md:my-7  hover:animate-ping"        />
        <Image
            src="/adidas.svg"
            width={100}
            height={100}
            alt="/adidas.svg"
            loading="eager"
            priority={true}
            className=" mx-auto m-4 md:my-7  hover:animate-ping"        />
        
        
      </div>
    </Wrapper>
  );
}
