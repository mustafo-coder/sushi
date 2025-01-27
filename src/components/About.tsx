"use client";

import React from "react";
import Image from "next/image";
import heart from "@/images/heart.png";
import sushi_make from "@/images/sushi_make.png";
import sushi_cut from "@/images/sushi_cut.png";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div className="flex flex-col lg:flex-row items-start justify-around gap-8">
        {/* Left column with text content */}
        <div className="w-full lg:w-1/3 space-y-6 sm:space-y-8">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              О компании
            </h1>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded">
              <Image
                src={heart || "/placeholder.svg"}
                alt="Heart icon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Вкусная доставка Ручная подача блюд Комплексно вкусовые впечатления,
            украсит любой стол и не заставит себя долго ждать. С нами вы сможете
            забыть о готовке, легко сделать приятное родным и близким, устроить
            вкусный праздник или расслабиться в кругу друзей. Все блюда
            готовятся исключительно из свежих продуктов и по оригинальным
            рецептам Нашего шеф-повара
          </p>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Любая позиция из Нашего Меню может оказаться у Вас на столе максимум
            через 60 минут! У вас есть возможность сделать предварительный заказ
            на определенный день и время
          </p>
        </div>

        {/* Right column with images */}
        <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
          <div className="flex flex-col sm:flex-row justify-start items-center sm:items-start gap-4 sm:gap-0">
            <Image
              src={sushi_make || "/placeholder.svg"}
              alt="Sushi making"
              className="w-full sm:w-[60%] max-w-[400px] h-auto object-cover z-10"
            />
            {/* Overlapping smaller image */}
            <div className="sm:absolute sm:top-1/4 sm:right-0 w-full sm:w-[40%] max-w-[250px]">
              <Image
                src={sushi_cut || "/placeholder.svg"}
                alt="Sushi cutting"
                className="w-full h-auto object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
