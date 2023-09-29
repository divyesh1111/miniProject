import React from "react";
import {FaFacebookF, FaTwitter, FaYoutube, FaInstagram} from "react-icons/fa";
import Wrapper from "./Wrapper";
import Link from "next/link";
import about2 from "./../pages/about2";
import privacy from "@/pages/privacy";
import news from "@/pages/news";

const Footer = () => {
  return (
    <footer className=" text-black pt-14 pb-3">
      <Wrapper className="flex justify-between pt-10 flex-col md:flex-row gap-[50px] md:gap-0 bg-gradient-to-r from-cyan-500 to-gray-300">
        {/* LEFT START */}
        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          {/* MENU START */}
          <div className="flex flex-col gap-3 shrink-0">
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              Find a store
            </div>
            <Link href="/signup">
              <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                become a partner
              </div>
            </Link>
            <Link href="/signup">
              <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                sign up for email
              </div>
            </Link>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              send us feedback
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              student discount
            </div>
          </div>
          {/* MENU END */}

          {/* NORMAL MENU START */}
          <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
            {/* MENU START */}
            <div className="flex flex-col gap-3">
              <Link href="/help">
                <div className="font-oswald font-medium uppercase text-sm ">
                  get help
                </div>
              </Link>

              <div className="text-sm text-black/[0.5] hover:text-white cursor-pointer">
                Order Status
              </div>
              <div className="text-sm text-black/[0.5] hover:text-white cursor-pointer">
                Delivery
              </div>
              <div className="text-sm text-black/[0.5] hover:text-white cursor-pointer">
                Returns
              </div>
              <div className="text-sm text-black/[0.5] hover:text-white cursor-pointer">
                Payment Options
              </div>

              <Link href="/contactUs">
                <div className="text-sm text-black/[0.5] hover:text-white cursor-pointer">
                  Contact Us
                </div>
              </Link>
              
            </div>
            {/* MENU END */}

            {/* MENU START */}
            <div className="flex flex-col gap-3">
              <Link href="/about2">
                <div className="font-oswald font-medium uppercase text-sm">
                  About nike
                </div>
              </Link>
              <Link href="/news">
                <div className="text-sm text-black/[0.5] hover:text-white cursor-pointer">
                  News
                </div>
              </Link>
              <div className="text-sm text-black/[0.5] hover:text-white cursor-pointer">
                Careers
              </div>
              <div className="text-sm text-black/[0.5] hover:text-white cursor-pointer">
                Investors
              </div>
              <div className="text-sm text-black/[0.5] hover:text-white cursor-pointer">
                Sustainability
              </div>
            </div>
            {/* MENU END */}
          </div>
          {/* NORMAL MENU END */}
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-4 justify-center md:justify-start">
          <div
            onClick={() => window.open("https://www.facebook.com", "_blank")}
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <FaFacebookF size={20} />
          </div>
          <div
            onClick={() => window.open("https://www.twitter.com", "_blank")}
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <FaTwitter size={20} />
          </div>
          <div
            onClick={() => window.open("https://www.youtube.com", "_blank")}
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <FaYoutube size={20} />
          </div>
          <div
            onClick={() => window.open("https://www.instagram.com", "_blank")}
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <FaInstagram size={20} />
          </div>
        </div>
        {/* RIGHT END */}
      </Wrapper>
      <Wrapper className="flex justify-between pt-10 pb-4 flex-col md:flex-row gap-[10px] md:gap-0 bg-gradient-to-r from-cyan-500 to-gray-300">
        {/* LEFT START */}
        <div className="text-[12px] text-white hover:text-white cursor-pointer text-center md:text-left">
          © 2023 Nike, Inc. All Rights Reserved
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
          <div className="text-[12px] text-black/[0.5] hover:text-black cursor-pointer font-semibold">
            <Link href={`guides`}>Guides</Link>
          </div>
          <div className="text-[12px] text-black/[0.5] hover:text-black cursor-pointer font-semibold">
          <Link href={`termsOfSale`}>Terms of Sale </Link>
          </div>
          <div className="text-[12px] text-black/[0.5] hover:text-black cursor-pointer font-semibold">
            <Link href={`termsOfUse`}>Terms of Use</Link>
          </div>
          <div className="text-[12px] text-black/[0.5] hover:text-black cursor-pointer font-semibold">
            <Link href={`privacy`}>Privacy Policy</Link>
          </div>
        </div>
        {/* RIGHT END */}
      </Wrapper>
    </footer>
  );
};

export default Footer;
