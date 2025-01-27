"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const mainNavItems = [
  { title: "О нас", href: "#" },
  { title: "Доставка и оплата", href: "#" },
  { title: "Контакты", href: "#" },
  { title: "Бонусы", href: "#" },
  { title: "Вакансии", href: "#" },
];

const foodCategories = [
  { title: "Пицца", href: "#", icon: "/pizza.svg" },
  { title: "Суши", href: "#", icon: "/sushi.svg" },
  { title: "Роллы", href: "#", icon: "/rolle.svg" },
  { title: "Сеты", href: "#", icon: "/set.svg" },
  { title: "Wok", href: "#", icon: "/wok.svg" },
  { title: "Супы", href: "#", icon: "/soup.svg" },
  { title: "Салаты", href: "#", icon: "/Frame.svg" },
  { title: "Десерты", href: "#", icon: "/dessert.svg" },
  { title: "Напитки", href: "#", icon: "/drink.svg" },
  { title: "Акции", href: "#", icon: "/sale.svg" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Riksha Logo"
              width={134}
              height={156}
              className="absolute left-[348px] top-4 sm:left-[348px] lg:left-[148px]"
            />
          </Link>

          <div className="hidden font-Interfaces lg:flex lg:space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm text-gray-700 hover:text-[#E76F51]"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden lg:block">
              <div className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-[#E76F51]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <p className="text-sm font-medium">+7 (495) 617-14-24</p>
                  <p className="text-xs text-gray-500">с 10:00 до 23:00</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">0 ₽</span>
                <button className="relative p-2">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-7-3h7a2 2 0 0 0 2-1.6l1.5-7.3A1 1 0 0 0 18.7 7H5.2l-.4-2H2" />
                  </svg>
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#E76F51] text-[10px] text-white">
                    0
                  </span>
                </button>
              </div>
              <button className="p-2">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </button>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#E76F51]"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#E76F51]"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="border-t">
          <div className="no-scrollbar overflow-x-auto pb-4 pl-48">
            <div className="flex min-w-max space-x-[34px] pr-9">
              {foodCategories.map((category) => (
                <Link
                  key={category.title}
                  href={category.href}
                  className="flex flex-col items-center space-y-3 py-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                    <Image
                      src={category.icon || "/placeholder.svg"}
                      alt={category.title}
                      width={24}
                      height={24}
                    />
                  </div>
                  <span className="text-sm font-thin text-gray-700">
                    {category.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
