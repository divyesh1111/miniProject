import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";

export default function Poster() {
  return (
    <Wrapper className="  ">
      {/* img1------------------ */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl my-10">
        <Image
          src="/v3.webp"
          width={1360}
          height={768}
          alt="slide-1"
          loading="eager"
          priority={true}
          className="aspect-[16/10] md:aspect-auto object-cover   bg-black/20"
        />

        <div className="absolute h-full w-full bg-white/70 flex items-center -bottom-10 hover:bottom-0 opacity-0  hover:opacity-100 transition-all duration-200  ">
          <div className="mx-auto text-4xl md:text-6xl font-extrabold text-red-500">
            VANS
          </div>
        </div>
      </div>

      {/* img----2--------------- */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl my-10">
        <Image
          src="/v3.webp"
          width={1360}
          height={768}
          alt="slide-1"
          loading="eager"
          priority={true}
          className="aspect-[16/10] md:aspect-auto object-cover   bg-black/20"
        />

        <div className="absolute h-full w-full bg-white/70 flex items-center -bottom-10 hover:bottom-0 opacity-0  hover:opacity-100 transition-all duration-200  ">
          <div className="mx-auto text-4xl md:text-6xl font-extrabold text-red-500">
            NIKE
          </div>
        </div>
      </div>

      {/* img3-------- */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl my-10">
        <Image
          src="/v3.webp"
          width={1360}
          height={768}
          alt="slide-1"
          loading="eager"
          priority={true}
          className="aspect-[16/10] md:aspect-auto object-cover   bg-black/20"
        />

        <div className="absolute h-full w-full bg-white/70 flex items-center -bottom-10 hover:bottom-0 opacity-0  hover:opacity-100 transition-all duration-200  ">
          <div className="mx-auto text-4xl md:text-6xl font-extrabold text-red-500">
            PUMA
          </div>
        </div>
      </div>

      {/* img-4 */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl my-10">
        <Image
          src="/v3.webp"
          width={1360}
          height={768}
          alt="slide-1"
          loading="eager"
          priority={true}
          className="aspect-[16/10] md:aspect-auto object-cover   bg-black/20"
        />

        <div className="absolute h-full w-full bg-white/70 flex items-center -bottom-10 hover:bottom-0 opacity-0  hover:opacity-100 transition-all duration-200  ">
          <div className="mx-auto text-4xl md:text-6xl font-extrabold text-red-500">
            ADIDAS
          </div>
        </div>
      </div>

      {/* img5-------- */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl my-10">
        <Image
          src="/v3.webp"
          width={1360}
          height={768}
          alt="slide-1"
          loading="eager"
          priority={true}
          className="aspect-[16/10] md:aspect-auto object-cover   bg-black/20"
        />

        <div className="absolute h-full w-full bg-white/70 flex items-center -bottom-10 hover:bottom-0 opacity-0  hover:opacity-100 transition-all duration-200  ">
          <div className="mx-auto text-4xl md:text-6xl font-extrabold text-red-500">
            BALENCIAGA
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
