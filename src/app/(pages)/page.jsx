import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section px-40 pt-20">
        <div className="background-wrapper relative">
          <div className="container mx-auto">
            <div className="w-full lg:w-3/5 text-center lg:text-start pb-[20px] lg:pb-[45px]">
              <h1 className="font-behind-nineties font-medium leading-[100%] text-gray ">
                Glow{" "}
                <span className="text-primary italic">Naturally, Shine</span>{" "}
                Confidently
              </h1>
              <p className="mt-25">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <Image
                src={"/images/image 162.png"}
                width={711}
                height={720}
                alt="logo"
                unoptimized={true}
                className="w-full lg:w-auto relative lg:absolute end-0 bottom-0 mx-auto rounded-br-[20px]"
              />
              <div className="book-appointment mt-40">
                <h4 className="text-dark font-medium text-start mb-4 leading-[100%] text-dark-gray">
                  Book a Free Appointment
                </h4>

                <form>
                  <div className="grid grid-flow-row grid-cols-2 gap-2.5">
                    <div className="w-full">
                      <input
                        type="email"
                        className="form-control w-full font-normal focus:border-transparent focus:outline-none"
                        placeholder="Your E-mail Address"
                        name="email"
                      />
                    </div>
                    <div className="w-full">
                      <input
                        className="w-full form-control font-normal focus:border-transparent focus:outline-none"
                        type="tel"
                        placeholder="Contact Number"
                        name="phone"
                      />
                    </div>
                    <div className="relative w-full">
                      <select
                        name="branch"
                        className="w-full cursor-pointer form-control font-normal pr-10 appearance-none focus:border-transparent focus:outline-none"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select Treatment
                        </option>
                        <option value="PRP">Karachi</option>
                        <option value="PRPG">Islamabad</option>
                        <option value="Transplant">Peshawar</option>
                        <option value="Hydra Facial">Rawalpindi</option>
                        <option value="Hydra Facial">Laser Therapy</option>
                      </select>

                      <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5px"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="relative w-full">
                      <select
                        name="branch"
                        className="w-full cursor-pointer form-control font-normal pr-10 appearance-none focus:border-transparent focus:outline-none"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select Branch
                        </option>
                        <option value="karachi">Karachi</option>
                        <option value="islamabad">Islamabad</option>
                        <option value="peshawar">Peshawar</option>
                        <option value="rawalpindi">Rawalpindi</option>
                      </select>

                      <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5px"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <button
                    className="w-full btn-primary btn btn-lg mt-[15px] lg:mt-[18px] py-[10px]! px-[24px]! sm:py-[14px]! sm:px-[24px]!"
                    type="submit"
                  >
                    Book Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
