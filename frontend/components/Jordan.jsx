import React, {useEffect, useState} from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Image from "next/image";

import Menu from "./Menu";
import {BsCart} from "react-icons/bs";
import {IoMdHeartEmpty} from "react-icons/io";
import {VscChromeClose} from "react-icons/vsc";
import {BiMenuAltRight} from "react-icons/bi";
import MenuMobile from "./MenuMobile";
import {fetchDataFromApi} from "@/utils/api";
import {useSelector} from "react-redux";

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
        className={`h-[60px] flex justify-between items-center bg-gray-100 `}
      >
        <Link href="/">
          <Image
            src="/jordan.svg"
            width={20}
            height={20}
            alt="jordan logo"
            className="cursor-pointer w-5 h-auto "
          />
          {/* <img src="/jordan.svg" className="w-[10px] md:w-[20px]" /> */}
        </Link>
        <div className="justify-end">
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
