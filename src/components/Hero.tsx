"use client";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
const slides = [
  {
    title: "Калифорния",
    subtitle: "в подарок",
    description: "при первом заказе",
    price: "от 1500 ₽",
    image: "/IMG.svg",
  },
  {
    title: "Филадельфия",
    subtitle: "со скидкой",
    description: "при заказе от 2000 ₽",
    price: "от 2000 ₽",
    image: "/IMG.svg",
  },
  {
    title: "Сет Токио",
    subtitle: "в подарок",
    description: "при заказе от 3000 ₽",
    price: "от 3000 ₽",
    image: "/IMG.svg",
  },
];

const benefits = [
  {
    icon: "/2.svg",
    title: "",
    description: "",
  },
  {
    icon: "/1.svg",
    title: "",
    description: "",
  },
  {
    icon: "/3.svg",
    title: "",
    description: "",
  },
  {
    icon: "/4.svg",
    title: "",
    description: "",
  },
];

export default function Hero() {
  return (
    <div className="w-full relative max-w-[1280px] mx-auto">
      <button className="prev absolute top-1/2 -translate-y-1/2 z-50 cursor-pointer -start-10 hover:text-primary transition-all text-slate-200 bg-white rounded-full flex items-center justify-center w-20 aspect-square">
        <ArrowBack fontSize={"large"} />
      </button>
      <button className="next absolute top-1/2 -translate-y-1/2 z-50 cursor-pointer -end-10 hover:text-primary transition-all text-slate-200 bg-white rounded-full flex items-center justify-center w-20 aspect-square">
        <ArrowForward fontSize={"large"} />
      </button>
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        className="w-full py-5 rounded-[3rem]"
        modules={[Navigation, Pagination]}
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="flex justify-between  bg-[#F5F9FA] px-20 py-0 items-center w-full">
              <div>
                <h2 className="text-5xl font-bold max-w-2xl">
                  <span> {s.title}</span>
                  <span className="text-primary"> {s.subtitle}</span>
                  <span> {s.description}</span>
                </h2>
                <p className="text-lg mt-3">{s.price}</p>
              </div>
              <Image
                src={s.image}
                alt="image"
                width={30}
                height={30}
                className="aspect-square w-[500px] max-w-[500px]"
              ></Image>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
