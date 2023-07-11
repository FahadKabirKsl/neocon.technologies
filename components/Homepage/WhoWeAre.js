import React from "react";
import { BiSquareRounded } from "react-icons/bi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function WhoWeAre() {
  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div className="pb-10">
          <div className="flex flex-row">
            <BiSquareRounded className="my-auto text-ntl_orange" />
            <p className="text-text_51 xsm:text-text_32 sm:text-text_32 font-bold text-ntl_black pl-5">
              Who <span className="text-ntl_orange"> we</span> are
            </p>
          </div>
          <div className="flex justify-between xsm:flex-col sm:flex-col">
            <div className="w-full">
              <div className="grid grid-cols-2 gap-6 xsm:grid-cols-1 sm:grid-cols-1 text-base text-ntl_black">
                <div className="col-span-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Tellus pellentesque
                    vitae varius lorem vulputate quam non. Etiam proin iaculis
                    ut tristique enim viverra suscipit iaculis. Ornare purus
                    quisque nulla augue imperdiet rutrum orci id dictum. Urna
                    amet est orci eget pulvinar et mauris. Nisl semper vitae
                    lacus sit ut neque.
                  </p>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Commodo sit suscipit
                    nisi suspendisse pellentesque egestas in id mattis. Diam
                    laoreet quam euismod.
                  </p>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Commodo sit suscipit
                    nisi suspendisse pellentesque egestas in id mattis. Diam
                    laoreet quam euismod.
                  </p>
                </div>
              </div>
            </div>
            <div className="block xsm:hidden sm:hidden mx-10"></div>
            <div className="w-full">
              <div className="grid grid-cols-2 gap-6 xsm:grid-cols-1 sm:grid-cols-1 text-base text-ntl_black">
                <div className="bg-gradient-to-r from-[#F5F5F5] to-[#F3F3F4] p-5 rounded-3xl">
                  <p className="text-text_32 font-semibold">05+</p>
                  <p>Years of experience</p>
                </div>
                <div className="bg-gradient-to-r from-[#F5F5F5] to-[#F3F3F4] p-5 rounded-3xl">
                  <p className="text-text_32 font-semibold">50+</p>
                  <p>Professional</p>
                </div>
                <div className="bg-gradient-to-r from-[#F5F5F5] to-[#F3F3F4] p-5 rounded-3xl">
                  <p className="text-text_32 font-semibold">4.9</p>
                  <p>Overall Rating</p>
                </div>
                <div className="bg-gradient-to-r from-[#F5F5F5] to-[#F3F3F4] p-5 rounded-3xl">
                  <p className="text-text_32 font-semibold">24/7</p>
                  <p>Professional Support</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="flex flex-row pr-10 pt-4">
              <p>Learn More</p>
              <BsFillArrowRightCircleFill className="my-auto mx-4 text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoWeAre;
