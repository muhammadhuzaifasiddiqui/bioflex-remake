import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Blog from "../components/Blog";
import Marquee from "../components/Marquee";

const page = () => {
  return (
    <>
      {/* NAVBAR */}    
      <Navbar />
      {/* HERO-SECTION */}
      <section className="hero-section px-40 pt-20">
        <div className="background-wrapper border-radius-20 relative">
          <div className="container mx-auto">
            <div className="w-full lg:w-3/5 text-center lg:text-start pb-[20px] lg:pb-[45px]">
              <h1 className="font-behind-nineties font-normal leading-[100%] text-gray">
                Glow{" "}
                <span className="text-primary italic font-medium">
                  Naturally, Shine
                </span>{" "}
                Confidently
              </h1>
              <p className="mt-25">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <Image
                src={"/images/hero-sectiom-image.png"}
                width={711}
                height={720}
                alt="hero-section-image"
                unoptimized={true}
                className="w-full lg:w-auto relative lg:absolute end-0 bottom-0 mx-auto! rounded-br-[20px]"
              />
              <div className="book-appointment border-radius-20 mt-40">
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
                    className="w-full btn btn-lg btn-primary cursor-pointer mt-[15px] lg:mt-[18px] py-[10px]! px-[24px]! sm:py-[14px]! sm:px-[24px]!"
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

      {/* SERVICE-SECTION */}
      <section className="service-section overflow-hidden py-80 px-3 sm:px-4 md:px-5">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row gap-5 justify-between">
              <div className="w-full lg:w-[50%]">
                <h2 className="font-behind-nineties leading-[100%] font-normal text-gray">
                  {" "}
                  <span className="text-primary italic">Effective,</span>{" "}
                  Gentle, & Science-Back{" "}
                  <span className="text-primary italic">Skincare</span>
                </h2>
                <Image
                  src={"./images/Sparkle Line.webp"}
                  width={298}
                  height={60}
                  alt="Sparkle Line"
                  unoptimized={true}
                  className="w-full h-full object-cover hidden lg:block mt-10"
                />
              </div>
              <div className="w-full lg:w-[42%] flex flex-col gap-3">
                <div>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                  </p>
                </div>
                <div>
                  <p className="text-justify">
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
                    enim justo.
                  </p>
                </div>
                <div className="mt-40">
                  <Link className="btn btn-primary" href="#">
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-80 gap-5">
              <Link className="service-card group" href="#">
                <div className="img-wrapper border-radius-20 overflow-hidden relative">
                  <Image
                    src={"/images/service-card-1.png"}
                    width={400}
                    height={500}
                    alt="service-card-1"
                    unoptimized={true}
                    className="w-full! h-full! object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                  <div className="flex flex-col justify-between absolute inset-0 p-2 md:p-3 xl:p-5">
                    <div className="btn-circle ms-auto group-hover:bg-[#911E3D]!">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                      >
                        <path
                          className="transition-transform duration-300 group-hover:stroke-white!"
                          d="M7.82715 7.3855L21.3339 7.38555L21.3339 20.8923"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          className="transition-transform duration-300 group-hover:stroke-white!"
                          d="M21.3331 7.3857L6.96582 21.7529"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <div className="tag border-radius-20 leading-[125%]">
                        3 Session
                      </div>
                      <div className="tag border-radius-20 leading-[125%]">
                        1 Session per month
                      </div>
                      <div className="tag border-radius-20 leading-[125%]">
                        Prices Starting form 12000 PKR
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 sm:mt-3 lg:mt-3.5">
                  <h4 className="leading-[140%] text-light-gray font-medium line-clamp-1">
                    Lorem ipsum
                  </h4>
                  <p className="leading-[125%] line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula. Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo ligula. Lorem
                    ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean commodo ligula.
                  </p>
                </div>
              </Link>
              <Link className="service-card group" href="#">
                <div className="img-wrapper border-radius-20 overflow-hidden relative">
                  <Image
                    src={"/images/service-card-2.png"}
                    width={400}
                    height={500}
                    alt="service-card-2"
                    unoptimized={true}
                    className="w-full! h-full! object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                  <div className="flex flex-col justify-between absolute inset-0 p-2 md:p-3 xl:p-5">
                    <div className="btn-circle ms-auto group-hover:bg-[#911E3D]!">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                      >
                        <path
                          className="transition-transform duration-300 group-hover:stroke-white!"
                          d="M7.82715 7.3855L21.3339 7.38555L21.3339 20.8923"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          className="transition-transform duration-300 group-hover:stroke-white!"
                          d="M21.3331 7.3857L6.96582 21.7529"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <div className="tag border-radius-20 leading-[125%]">
                        3 Session
                      </div>
                      <div className="tag border-radius-20 leading-[125%]">
                        1 Session per month
                      </div>
                      <div className="tag border-radius-20 leading-[125%]">
                        Prices Starting form 12000 PKR
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 sm:mt-3 lg:mt-3.5">
                  <h4 className="leading-[140%] text-light-gray font-medium line-clamp-1">
                    Lorem ipsum
                  </h4>
                  <p className="leading-[125%] line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula. Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo ligula. Lorem
                    ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean commodo ligula.
                  </p>
                </div>
              </Link>
              <Link className="service-card group" href="#">
                <div className="img-wrapper border-radius-20 overflow-hidden relative">
                  <Image
                    src={"/images/service-card-3.png"}
                    width={400}
                    height={500}
                    alt="service-card-3"
                    unoptimized={true}
                    className="w-full! h-full! object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="flex flex-col justify-between absolute inset-0 p-2 md:p-3 xl:p-5">
                    <div className="btn-circle ms-auto group-hover:bg-[#911E3D]!">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                      >
                        <path
                          className="transition-transform duration-500 group-hover:stroke-white!"
                          d="M7.82715 7.3855L21.3339 7.38555L21.3339 20.8923"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          className="transition-transform duration-500 group-hover:stroke-white!"
                          d="M21.3331 7.3857L6.96582 21.7529"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <div className="tag border-radius-20 leading-[125%]">
                        3 Session
                      </div>
                      <div className="tag border-radius-20 leading-[125%]">
                        1 Session per month
                      </div>
                      <div className="tag border-radius-20 leading-[125%]">
                        Prices Starting form 12000 PKR
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 sm:mt-3 lg:mt-3.5">
                  <h4 className="leading-[140%] text-light-gray font-medium line-clamp-1">
                    Lorem ipsum
                  </h4>
                  <p className="leading-[125%] line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula. Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo ligula. Lorem
                    ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean commodo ligula.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT-SECTION */}
      <section className="product-section py-40 px-3 sm:px-4 md:px-5">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center">
            <div className="w-full lg:w-[50%] text-center mx-auto">
              <span className="fs-18 underline italic font-normal text-gold leading-[100%]">
                Our Products
              </span>
              <h2 className="font-normal font-behind-nineties text-gray leading-[94%] mt-25">
                Your Skin <span className="text-primary">Deserves</span> the{" "}
                <span className="text-primary">Best</span>
              </h2>
              <p className="mt-3.5">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem.
              </p>
              <div className="mt-40">
                <Link className="btn btn-primary" href="#">
                  View All Products
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-50 gap-5">
              <Link className="product-card group" href="#">
                <div className="img-wrapper border-radius-20 overflow-hidden relative">
                  <Image
                    src={"/images/product-card-1.png"}
                    width={400}
                    height={500}
                    alt="product-card-1"
                    unoptimized={true}
                    className="w-full! h-full! object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                  <div className="flex flex-col justify-between absolute inset-0 p-2 md:p-3 xl:p-5">
                    <div className="btn-circle ms-auto group-hover:bg-[#911E3D]!">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          className="transition-transform duration-300 group-hover:stroke-white!"
                          d="M15.775 26.0125C15.35 26.1625 14.65 26.1625 14.225 26.0125C10.6 24.775 2.5 19.6125 2.5 10.8625C2.5 7 5.6125 3.875 9.45 3.875C11.725 3.875 13.7375 4.975 15 6.675C16.2625 4.975 18.2875 3.875 20.55 3.875C24.3875 3.875 27.5 7 27.5 10.8625C27.5 19.6125 19.4 24.775 15.775 26.0125Z"
                          stroke="#292D32"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex card-footer border-radius-20 items-center justify-between gap-2 mt-1 flex-1">
                  <div>
                    <h4 className="font-medium text-light-gray leading-[140%]">
                      Lorem ipsum
                    </h4>
                    <div className="flex items-center gap-1 mt-2">
                      <p className="fs-18 font-normal leading-[100%]">
                        Details
                      </p>
                      <Image
                        src={"/images/product-card-arrow.png"}
                        width={20}
                        height={20}
                        alt="product-card-arrow"
                        unoptimized={true}
                        className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <p className="font-behind-nineties fs-35 font-normal text-dark-gray">
                    12.05$
                  </p>
                </div>
              </Link>
              <Link className="product-card group" href="#">
                <div className="img-wrapper border-radius-20 overflow-hidden relative">
                  <Image
                    src={"/images/product-card-2.png"}
                    width={400}
                    height={500}
                    alt="product-card-2"
                    unoptimized={true}
                    className="w-full! h-full! object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                  <div className="flex flex-col justify-between absolute inset-0 p-2 md:p-3 xl:p-5">
                    <div className="btn-circle ms-auto group-hover:bg-[#911E3D]!">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          className="transition-transform duration-300 group-hover:stroke-white!"
                          d="M15.775 26.0125C15.35 26.1625 14.65 26.1625 14.225 26.0125C10.6 24.775 2.5 19.6125 2.5 10.8625C2.5 7 5.6125 3.875 9.45 3.875C11.725 3.875 13.7375 4.975 15 6.675C16.2625 4.975 18.2875 3.875 20.55 3.875C24.3875 3.875 27.5 7 27.5 10.8625C27.5 19.6125 19.4 24.775 15.775 26.0125Z"
                          stroke="#292D32"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex card-footer border-radius-20 items-center justify-between gap-2 mt-1 flex-1">
                  <div>
                    <h4 className="font-medium text-light-gray leading-[140%]">
                      Lorem ipsum
                    </h4>
                    <div className="flex items-center gap-1 mt-2">
                      <p className="fs-18 font-normal leading-[100%]">
                        Details
                      </p>
                      <Image
                        src={"/images/product-card-arrow.png"}
                        width={20}
                        height={20}
                        alt="product-card-arrow"
                        unoptimized={true}
                        className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <p className="font-behind-nineties fs-35 font-normal text-dark-gray">
                    12.05$
                  </p>
                </div>
              </Link>
              <Link className="product-card group" href="#">
                <div className="img-wrapper border-radius-20 overflow-hidden relative">
                  <Image
                    src={"/images/product-card-3.png"}
                    width={400}
                    height={500}
                    alt="product-card-3"
                    unoptimized={true}
                    className="w-full! h-full! object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                  <div className="flex flex-col justify-between absolute inset-0 p-2 md:p-3 xl:p-5">
                    <div className="btn-circle ms-auto group-hover:bg-[#911E3D]!">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          className="transition-transform duration-300 group-hover:stroke-white!"
                          d="M15.775 26.0125C15.35 26.1625 14.65 26.1625 14.225 26.0125C10.6 24.775 2.5 19.6125 2.5 10.8625C2.5 7 5.6125 3.875 9.45 3.875C11.725 3.875 13.7375 4.975 15 6.675C16.2625 4.975 18.2875 3.875 20.55 3.875C24.3875 3.875 27.5 7 27.5 10.8625C27.5 19.6125 19.4 24.775 15.775 26.0125Z"
                          stroke="#292D32"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex card-footer border-radius-20 items-center justify-between gap-2 mt-1 flex-1">
                  <div>
                    <h4 className="font-medium text-light-gray leading-[140%]">
                      Lorem ipsum
                    </h4>
                    <div className="flex items-center gap-1 mt-2">
                      <p className="fs-18 font-normal leading-[100%]">
                        Details
                      </p>
                      <Image
                        src={"/images/product-card-arrow.png"}
                        width={20}
                        height={20}
                        alt="product-card-arrow"
                        unoptimized={true}
                        className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <p className="font-behind-nineties fs-35 font-normal text-dark-gray">
                    12.05$
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED-SECTION */}
      <section className="trusted-section py-80 px-3 sm:px-4 md:px-5">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-[30px]">
            <div className="flex flex-col w-full lg:w-[50%] justify-between">
              <div>
                <h2 className="font-normal font-behind-nineties leading-[94%]">
                  Trusted
                  <span className="italic text-primary"> Aesthetic Advice</span>
                  , Tailored for
                  <span className="italic text-primary">You</span>
                </h2>
                <div className="flex flex-col gap-5 mt-25 w-full lg:w-[80%]">
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </div>
                  <div>
                    <p>
                      Donec quam felis, ultricies nec, pellentesque eu, pretium
                      quis, sem. Nulla consequat massa quis enim. Donec pede
                      justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                      In enim justo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 mt-7.5 gap-1.5 md:gap-2 lg:gap-2.5">
                <div className="trust-card border-radius-20 p-20">
                  <p className="fs-38 text-dark-gray">15K+</p>
                  <p className="font-[275] text-dark-gray">Customers</p>
                </div>
                <div className="trust-card border-radius-20 p-20">
                  <p className="fs-38 text-dark-gray">FDA</p>
                  <p className="font-[275] text-dark-gray">Approved</p>
                </div>
                <div className="trust-card border-radius-20 p-20">
                  <p className="fs-38 text-dark-gray">99%</p>
                  <p className="font-[275] text-dark-gray">Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full lg:w-[40%]">
              <Image
                src={"./images/trusted-section-image.webp"}
                width={500}
                height={550}
                alt="trusted-section-image"
                unoptimized={true}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLOG-SECTION */}
      <section className="blog-section overflow-hidden px-3 sm:px-4 md:px-5">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row gap-5 justify-between">
              <div className="w-full lg:w-[40%]">
                <h2 className="font-behind-nineties leading-[94%] text-gray font-normal">
                  Our <span className="text-primary italic">Blog</span>
                </h2>
              </div>
              <div className="w-full lg:w-[45%] flex flex-col end-0 gap-3">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG-SWIPER-SECTION */}
      <Blog />    

      {/* BLOG-SWIPER-SECTION */}
      <Marquee />
    </>
  );
};

export default page;