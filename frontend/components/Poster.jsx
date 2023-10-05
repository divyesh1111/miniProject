import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";

// swiper start
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// end-----------

export default function Poster() {
  return (
    <Wrapper className="  ">
      {/* img1------------------ */}

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        

        <SwiperSlide>
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
        </SwiperSlide>

        <SwiperSlide>
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
        </SwiperSlide>

        <SwiperSlide>
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
        </SwiperSlide>

        <SwiperSlide>
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
        </SwiperSlide>

        <SwiperSlide>
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
        </SwiperSlide>

        <SwiperSlide>
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
        </SwiperSlide>

        <SwiperSlide>
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
        </SwiperSlide>

        <SwiperSlide>
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
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
}
