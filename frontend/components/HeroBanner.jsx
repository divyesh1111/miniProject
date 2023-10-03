import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";
import {BiArrowBack} from "react-icons/bi";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute  bottom-[50%] w-[30px] md:w-[70px] ml-3 h-[30px] md:h-[50px]  rounded-l-full z-10 flex items-center justify-center cursor-pointer hover:opacity-70 "
          >
            <BiArrowBack className="text-l md:text-6xl  rounded-full text-white hover:bg-red-500  hover:text-white" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-0  w-[30px] mr-3 bottom-[50%] md:w-[70px] h-[30px] md:h-[50px]  rounded-r-full z-10 flex items-center justify-center cursor-pointer hover:opacity-70"
          >
            <BiArrowBack className="rotate-180 text-l md:text-6xl rounded-full text-white hover:bg-red-500  hover:text-white" />
          </div>
        )}
      >
        <div>
          <Image
            src="/Pos-1.jpg"
            width={1360}
            height={768}
            alt="slide-1"
            loading="eager"
            priority={true}
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>

        <div>
          <Image
            src="/Pos-2.jpg"
            width={1360}
            height={768}
            loading="lazy"
            alt="slide-2"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>

        <div>
          <Image
            src="/Pos-3.jpg  "
            width={1360}
            height={768}
            loading="lazy"
            alt="slide-3"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
