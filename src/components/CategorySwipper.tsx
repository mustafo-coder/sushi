"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function CategorySwipper() {
  const categories = [
    { name: "Пицца", icon: "🍕" },
    { name: "Суши", icon: "🍣" },
    { name: "Роллы", icon: "🍙" },
    { name: "Сеты", icon: "🥢" },
    { name: "Wok", icon: "🍜" },
    { name: "Супы", icon: "🥣" },
    { name: "Салаты", icon: "🥗" },
    { name: "Десерты", icon: "🍰" },
    { name: "Напитки", icon: "🥤" },
    { name: "Акции", icon: "🎁" },
  ];

  return (
    <div className="w-full py-4 shadow-lg">
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        grabCursor={true}
        className="mySwiper"
      >
        {categories.map((category, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center select-none w-full bg-white hover:bg-[#E07153] text-black font-medium rounded-lg shadow-lg p-3 transition-all"
          >
            <button className="flex flex-col items-center justify-center w-full gap-2">
              <span className="text-base font-bold">
                <span className="text-2xl mr-2">{category.icon}</span>
                {category.name}
              </span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
