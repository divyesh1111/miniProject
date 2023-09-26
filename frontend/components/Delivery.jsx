import Wrapper from "@/components/Wrapper";
import React from "react";
import {TbTruckDelivery} from "react-icons/tb";

const guest = () => {
  return (
    <Wrapper>
      <div className="my-7">
        <div className="text-2xl font-semibold">
          How would you like to get your orders?
        </div>

        <div className="text-justify mt-2 text-gray-500 md:text-xl">
          Customs regulation for India require a copy of the recipient's KYC.
          The address on the KYC needs to match the shipping address. Our
          courier will contact you via SMS/email to obtain a copy of your KYC.
          The KYC will be stored securely and used solely for the purpose of
          clearing customs (including sharing it with customs officials) for all
          orders and returns. If your KYC does not match your shipping address,
          please click the link for more information.
        </div>

        {/* deliver it  */}
        <div className="md:flex ">
          <div className="border-4 border-black rounded-2xl  md:ml-12  sm:w-[32%] mt-5 ">
            <div className="flex text-2xl font-bold py-5 ">
              <TbTruckDelivery size={35} className="mx-5 " />
              Deliver It
            </div>
          </div>
          
          <div className="border-4 border-black rounded-2xl  md:ml-48  sm:w-[32%] mt-5 ">
            <div className="flex text-2xl font-bold py-5 ">
              <TbTruckDelivery size={35} className="mx-5 " />
              Deliver It
            </div>
          </div>
        </div>

        {/*    buttons login and member      */}
        <div className="grid sm:grid-cols-2 mt-5">
          <div className="mx-10">
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center">
              Become a member
            </button>
          </div>

          <div className="mx-10">
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center">
              Login
            </button>
          </div>
        </div>

        {/* login */}
        <div className="mt-7 mx-5 grid md:grid-cols-2 text-center">
          <div>
              <div className="text-2xl font-semibold">
                Enter Your Name And Address
              </div>
              <div>
                <label className="block">
                  <input
                    className="placeholder-gray-500 border border-gray-700 rounded-md   px-2 py-2 my-4 w-80 "
                    placeholder="First Name"
                  />
                </label>
              </div>

              <div>
                <label className="block">
                  <input
                    className="placeholder-gray-500 border border-gray-700 rounded-md   px-2 py-2 my-4 w-80 "
                    placeholder="Last Name"
                  />
                </label>
              </div>

              <div>
                <label className="block">
                  <input
                    className="placeholder-gray-500 border border-gray-700 rounded-md   px-2 py-2 my-4 w-80 "
                    placeholder="Address Line 1"
                  />
                </label>
              </div>

              <div>
                <label className="block">
                  <input
                    className="placeholder-gray-500 border border-gray-700 rounded-md   px-2 py-2 my-4 w-80 "
                    placeholder="Address Line 2"
                  />
                </label>
              </div>

              <div>
                <label className="block">
                  <input
                    className="placeholder-gray-500 border border-gray-700 rounded-md   px-2 py-2 my-4 w-80 "
                    placeholder="Address Line 3"
                  />
                </label>
              </div>

              <div>
                <label className="block">
                  <input
                    className="placeholder-gray-500 border border-gray-700 rounded-md   px-2 py-2 my-4 w-80 "
                    placeholder="Postal code"
                  />
                </label>
              </div>

              <div>
                <label className="block">
                  <input
                    className="placeholder-gray-500 border border-gray-700 rounded-md   px-2 py-2 my-4 w-80 "
                    placeholder="Locality"
                  />
                </label>
              </div>
          </div>

          {/* 
                        <div className='lg:flex mr-2'>
                            <div className='mr-5'>
                                <label className="block">
                                <input
                                    className="placeholder-gray-500 border border-gray-700 rounded-md   px-2 py-2 my-2 w-80 lg:w-36"
                                    placeholder="Postal Code"
                                />
                                </label>
                            </div>
                            <div className=''>
                                <label className="block">
                                <input
                                    className="placeholder-gray-500 border border-gray-700 rounded-md   px-2 py-2 my-2 w-80 lg:w-36"
                                    placeholder="Locality"
                                />
                                </label>
                            </div>

                        </div> */}

          {/* contact info */}
          <div className=" ">
            <div className="text-2xl font-semibold">
              What's Your Contat Information ?
            </div>
            <div>
              <label className="block">
                <input
                  className="placeholder-gray-500 border border-gray-700 rounded-md  px-2 py-2 my-4 w-80 "
                  placeholder="Email address"
                />
              </label>
            </div>

            <div>
              <label className="block">
                <input
                  className="placeholder-gray-500 border border-gray-700 rounded-md   px-2 py-2 my-4 w-80 "
                  placeholder="Phone Number"
                />
              </label>
            </div>
          

              {/* button submit */}
            <div className="">
              <button className="w-full sm:w-[40%] py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75   justify-center">
                Continue To Delivery
              </button>
            </div>
          </div>



        </div>
      </div>
    </Wrapper>
  );
};

export default guest;
