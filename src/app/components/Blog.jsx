"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Blog = () => {
  return (
    <>
      <section className="blog-swiper-section py-80 px-3 sm:px-4 md:px-5">
        <div className="container mx-auto">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={false}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} custom-bullet"></span>`;
              },
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className="pb-4">
                <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12.5 md:gap-10 items-center">
                  <div className="w-full lg:w-[52%]">
                    <div className="img-wrapper border-radius-20 overflow-hidden relative ratio-16x9">
                      <Image
                        src={"/images/blog-1.png"}
                        width={500}
                        height={250}
                        alt="blog 1"
                        unoptimized={true}
                        className="w-full! h-full! object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-[42%]">
                    <p className="fs-16">01-08-2025</p>
                    <h3 className="font-behind-nineties line-clamp-2 font-normal mt-3.5 leading-[102%]">
                      <span className="text-dark-gray ">
                        Lorem ipsum dolor sit
                      </span>{" "}
                      amet, consectetuer adipiscin elit, consectetuer adipiscin elit. Aenean commodo
                    </h3>
                    <p className="fs-16 line-clamp-4 my-35 text-justify">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Cum sociis natoque penatibus et
                      magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                    <div className="pt-1.5 lg:pt-3.5 md:pt-2.5">
                      <a className="btn btn-primary inline-block" href="#">
                        Continue Reading
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pb-4">
                <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12.5 md:gap-10 items-center">
                  <div className="w-full lg:w-[52%]">
                    <div className="img-wrapper border-radius-20 overflow-hidden relative ratio-16x9">
                      <Image
                        src={"/images/blog-2.webp"}
                        width={500}
                        height={250}
                        alt="blog-2"
                        unoptimized={true}
                        className="w-full! h-full! object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-[42%]">
                    <p className="fs-16">01-08-2025</p>
                    <h3 className="font-behind-nineties line-clamp-2 font-normal mt-3.5 leading-[102%]">
                      <span className="text-dark-gray ">
                        Lorem ipsum dolor sit
                      </span>{" "}
                      amet, consectetuer adipiscin elit, consectetuer adipiscin elit. Aenean commodo
                    </h3>
                    <p className="fs-16 line-clamp-4 my-35 text-justify">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Cum sociis natoque penatibus et
                      magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                    <div className="pt-1.5 lg:pt-3.5 md:pt-2.5">
                      <a className="btn btn-primary inline-block" href="#">
                        Continue Reading
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pb-4">
                <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12.5 md:gap-10 items-center">
                  <div className="w-full lg:w-[52%]">
                    <div className="img-wrapper border-radius-20 overflow-hidden relative ratio-16x9">
                      <Image
                        src={"/images/blog-3.webp"}
                        width={500}
                        height={250}
                        alt="blog-3"
                        unoptimized={true}
                        className="w-full! h-full! object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-[42%]">
                    <p className="fs-16">01-08-2025</p>
                    <h3 className="font-behind-nineties line-clamp-2 font-normal mt-3.5 leading-[102%]">
                      <span className="text-dark-gray ">
                        Lorem ipsum dolor sit
                      </span>{" "}
                      amet, consectetuer adipiscin elit, consectetuer adipiscin elit. Aenean commodo
                    </h3>
                    <p className="fs-16 line-clamp-4 my-35 text-justify">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Cum sociis natoque penatibus et
                      magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                    <div className="pt-1.5 lg:pt-3.5 md:pt-2.5">
                      <a className="btn btn-primary inline-block" href="#">
                        Continue Reading
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>                        
          </Swiper>

          <div className="custom-pagination flex justify-center gap-3 mt-1 sm:mt-2"></div>

          <style jsx global>{`
            .custom-bullet {
            }
            .swiper-pagination-bullet-active.custom-bullet {
              background-color: #a21a41; /* Burgundy / Primary Color */
            }
          `}</style>
        </div>
      </section>
    </>
  );
};
export default Blog;