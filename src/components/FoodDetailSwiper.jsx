"use client";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Delivery, XomSushi } from "../assets/images";
import Link from "next/link";

export default function FoodDetailSwiper() {
  return (
    <div className="flex justify-around mt-10">
      <div className="w-[575px] overflow-hidden">
        <Swiper
          navigation={true}
          pagination={{ type: "fraction" }}
          modules={[Navigation, Pagination]}
          className="h-[380px] w-full flex justify-center"
        >
          <SwiperSlide className="flex justify-center">
            <Image
              src={XomSushi}
              width={570}
              height={372}
              alt="xomsushi"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>as</SwiperSlide>
          <SwiperSlide>asd</SwiperSlide>
        </Swiper>
      </div>
      <div className="space-y-5 flex-shrink-0">
        <h1 className="text-3xl font-bold">Ролл "Филадельфия"</h1>
        <h1 className="font-bold">
          Вес: <span className="font-normal">200 грамм</span>
        </h1>
        <div className="flex  border  px-5 py-5">
          <div className="border-r pr-10 pl-5">
            <h1>Белки</h1>
            <p className="font-semibold">7,5 г</p>
          </div>
          <div className="border-r px-10">
            <h1>Углеводы</h1>
            <p className="font-semibold">16,6 г</p>
          </div>
          <div className="border-r px-10">
            <h1>Жиры</h1>
            <p className="font-semibold">3,8 г</p>
          </div>
          <div className=" pl-10 pr-5">
            <h1>Калорийность </h1>
            <p className="font-semibold">213 Ккал</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Image src={Delivery} height={24} width={24} alt="delivery" />
          <h1 className="font-medium">Доставим за 40 мин</h1>
          <Link href={"#"} className="text-orange-500 underline">
            Условия доставки
          </Link>
        </div>
        <div>
          <h1 className="font-bold flex flex-row gap-2">Состав:</h1>
          <p>Лосось, сыр "Филадельфия", огурец, авокадо</p>
        </div>
        <div className="flex gap-16">
          <div>
            <h1 className="opacity-35 line-through">269 ₽</h1>
            <h1 className="text-2xl font-bold">219 ₽</h1>
          </div>
          <div className="relative max-w-28 h-14">
            <button className="absolute top-3 start-2 text-2xl text-orange-500">
              -
            </button>
            <input
              type="number"
              className="z-10 w-full text-center h-full px-8 border border-black/50 rounded-lg"
              value={1}
            />
            <button className="absolute z-50 top-3 text-2xl end-2  text-orange-500">
              +
            </button>
          </div>
          <div className="">
            <button className="text-center px-8 py-4 bg-[#E07153] font-bold text-xl text-white">
              Заказать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
