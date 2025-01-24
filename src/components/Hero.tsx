"use client";

import Image from "next/image";
import Link from "next/link";

const benefits = [
  { icon: "/2.svg" },
  { icon: "/1.svg" },
  { icon: "/3.svg" },
  { icon: "/4.svg" },
];

export default function Hero() {
  return (
    <div className="relative bg-gray-50 py-12">
      <button className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-4 shadow-lg">
        <svg
          className="h-6 w-6 rotate-180"
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
        </svg>
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-4 shadow-lg">
        <svg
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
        </svg>
      </button>

      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold">
              Калифорния <span className="text-[#E76F51]">в подарок</span>
            </h1>
            <p className="mt-4 text-2xl">при первом заказе</p>
            <p className="mt-2 text-lg text-gray-600">от 1500 ₽</p>
            <Link
              href="#"
              className="mt-8 inline-flex items-center justify-center"
              style={{
                width: "172",
                height: "172",
                borderRadius: "50%", 
                border: "1.54px solid #E76F51",
                backgroundColor: "#E76F51",
                position: "relative",
                color: "white",
                textAlign: "center",
              }}
            >
              <img
                src="g10.svg"
                alt="image"
                style={{
                  width: "120px", 
                  height: "120px",
                  borderRadius: "50%", 
                }}
              />
              <span
                style={{
                  position: "absolute",
                  fontSize: "16px",
                  fontWeight: "bold",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)", 
                }}
              >
                Подробнее
              </span>
            </Link>
          </div>

          <div className="relative">
            <Image
              src="/IMG.svg"
              alt="California Roll"
              width={400}
              height={400}
              className="relative z-10"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={benefit.icon}
                alt={`Benefit ${index + 1}`}
                width={198}
                height={181}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
