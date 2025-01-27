"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentSlide(
      (prev) => (prev + newDirection + slides.length) % slides.length
    );
  };

  return (
    <div className="relative">
      <motion.button
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 w-12 h-12 flex items-center justify-center shadow-lg z-20"
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(-1)}
        aria-label="Previous slide"
      >
        <motion.svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </motion.svg>
      </motion.button>

      <motion.button
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 w-12 h-12 flex items-center justify-center shadow-lg z-20"
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(1)}
        aria-label="Next slide"
      >
        <motion.svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </motion.svg>
      </motion.button>

      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl text-center md:text-left">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              >
                <h1 className="text-4xl font-bold">
                  {slides[currentSlide].title}{" "}
                  <span className="text-[#E76F51]">
                    {slides[currentSlide].subtitle}
                  </span>
                </h1>
                <p className="mt-1 text-2xl">
                  {slides[currentSlide].description}
                </p>
                <p className="mt-1 text-lg text-gray-600">
                  {slides[currentSlide].price}
                </p>
              </motion.div>
            </AnimatePresence>

            <Link
              href="#"
              className="mt-8 inline-flex items-center justify-center relative w-[120px] h-[120px] rounded-full bg-[#E76F51] text-white hover:bg-[#e85f3f] transition-colors"
            >
              <div className="absolute inset-0 rounded-full bg-[url('/g10.svg')] bg-cover opacity-90"></div>
              <span className="relative z-10 font-bold text-sm">Подробнее</span>
            </Link>
          </div>

          <div className="relative mt-8 md:mt-0">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="relative z-10"
              >
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                  <Image
                    src={slides[currentSlide].image || "/placeholder.svg"}
                    alt={slides[currentSlide].title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2"
            >
              <Image
                src={benefit.icon || "/placeholder.svg"}
                alt="Benefit Icon"
                width={198}
                height={181}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-[56px] h-[56px] md:w-[72px] md:h-[72px] rounded-full bg-[url('/g10.svg')] bg-cover opacity-80 bg-[#E76F51] text-white flex flex-col items-center justify-center text-xs"
      >
        <svg
          className="w-4 h-4 mb-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
        Наверх
      </button>
    </div>
  );
}
