import React from "react";
import Wrapper from "./Wrapper";
import {FaMobileAlt} from "react-icons/fa";
import {RiMessage2Fill} from "react-icons/ri";
import {MdEmail, MdLocationPin} from "react-icons/md";
import { Link } from "heroicons-react";



const Contact = () => {
  return (
    <Wrapper>
      <div className="text-center text-2xl md:text-[35px] font-bold py-4">
        {" "}
        CONTACT US
      </div>
      <div className=" text-justify mx-auto px-6 py-6 h-[100%] w-[100] border border-gray-900 rounded-3xl  my-8">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-3 px-3">
          <div className="text-center justify-center flex flex-col my-4 mb-4">
            <div className="justify-center flex">
              <FaMobileAlt className="my-3 justify-items-center" size={50} />
            </div>
            <h1 className="text-lg font-semibold">000 800 313 525</h1>
            <p>Product & Orders: 24 hours a day, 7 days a week</p>
          </div>

          <div className="text-center justify-center flex flex-col mb-4">
            <div className="justify-center flex">
              <RiMessage2Fill className="my-3 justify-items-center" size={50} />
            </div>
            <h1 className="text-lg font-semibold">24 hours a day</h1>
            <p>7 days a week</p>
          </div>

          <div className="text-center justify-center flex flex-col mb-4">
            <div className="justify-center flex">
              <MdEmail className="my-3 justify-items-center" size={50} />
            </div>
            <h1 className="text-lg font-semibold">We'll reply within</h1>
            <p>Five business days</p>
          </div>

          <div className="text-center justify-center flex flex-col mb-4">
            <div className="justify-center flex">
              <MdLocationPin className="my-3 justify-items-center" size={50} />
            </div>
            <h1 className="text-lg font-semibold">STORE LOCATOR</h1>
            <p>Find NIKE retail stores near you</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
