import React, {useEffect, useState} from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Image from "next/image";



const Jordan = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-full h-[30px] md:h-[40px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-500 ${show}`}
    >
      <Wrapper
        className={`h-[60px] flex justify-between items-center bg-red-500   `}
      >
        <div className="hidden md:flex flex-cols-5">

          <Image
            src="/jordan.svg"
            width={20}
            height={20}
            alt="jordan logo"
            className="cursor-pointer w-7 mr-10  h-auto "
          />
          {/* <img src="/jordan.svg" className="w-[10px] md:w-[20px]" /> */}

        <Image
            src="/balenciaga.svg"
            width={30}
            height={30}
            alt="jordan logo"
            className="cursor-pointer w-10 mx-10 h-auto "
          />

        <Image
            src="/adidas.svg"
            width={30}
            height={30}
            alt="jordan logo"
            className="cursor-pointer w-8 h-auto mx-10"
          />
          <Image
            src="/puma.svg"
            width={30}
            height={30}
            alt="jordan logo"
            className="cursor-pointer w-7 h-auto mx-10"
          />
          <Image
            src="/new.svg"
            width={30}
            height={30}
            alt="jordan logo"
            className="cursor-pointer w-10 h-auto mx-10"
          />

        </div>





        <div className="justify-end ">
          <Link
            className="bg-transparent  text-black hover:text-black hover:font-bold py-1 px-2  hover:border-transparent rounded"
            href="/register"
          >
            Sign Up
          </Link>

          <span>|</span>
          <Link
            className="bg-transparent  text-black hover:text-black hover:font-bold py-1 px-2  hover:border-transparent rounded"
            href="/login"
          >
            Sign In
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Jordan;
