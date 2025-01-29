"use client";
import { Delete, Pissa, Roll } from "@/images";
import Image from "next/image";
import React from "react";
import a01 from "../../public/a01.png";
import a02 from "../../public/a02.png";
import a03 from "../../public/a03.png";
import a04 from "../../public/a04.png";
import mapet from "../../public/mapet.png";
import { useState } from "react";
const data = [
    {
        id: 1,
        title: "Пицца “Рикша”",
        sizes: ["30 см", "50 см"],
        price: 510,
        image: Pissa,
    },
    {
        id: 2,
        title: "Ролл Сливочная креветка",
        price: 199,
        image: Roll,
    },
];

export default function Orders() {
    const [value, setValue] = useState(0);
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Оформление заказа</h1>
            <div className="flex justify-between">
                <div className="flex">
                    <div className="w-full max-w-2xl">
                        {data.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between border-b py-4"
                            >
                                <div className="flex items-center">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        className="w-16 h-16 rounded-md object-cover mr-4"
                                    />
                                    <div>
                                        <h2 className="text-[15px] font-semibold">
                                            {item.title}
                                        </h2>
                                        {item.sizes && (
                                            <div className="text-sm text-gray-500">
                                                {item.sizes.join(" • ")}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="border rounded-lg">
                                        <button className="px-2 py-1 ">
                                            −
                                        </button>
                                        <span className="px-4">1</span>
                                        <button className="px-2 py-1 ">
                                            +
                                        </button>
                                    </div>


                                    <span className="ml-4 font-semibold">
                                        {item.price} ₽
                                    </span>
                                    <button className="ml-4 text-red-500 hover:text-red-700">
                                        <Image src={Delete} alt="delete" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div></div>
                </div>
                <div className="w-full max-w-2xl flex flex-col gap-3">
                    <div className="flex flex-col justify-between bg-[#F5F5F5] py-7 px-6 gap-5">
                        <div className="flex items-center gap-4">
                            <Image
                                src={a01.src}
                                alt="a01"
                                width={40}
                                height={20}
                            />
                            <h2 className="text-2xl font-bold">
                                Контактные данные
                            </h2>
                        </div>
                        <div className="flex gap-2">
                            <input
                                className="min-w-72 bg-gray-50 min-h-12 border-none outline-none px-4"
                                type="text"
                                placeholder="Ваше Имя"
                            />
                            <input
                                className="min-w-72 bg-gray-50 min-h-12 border-none outline-none px-4"
                                type="text"
                                placeholder="Телефон"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between bg-[#F5F5F5] py-7 px-6 gap-5">
                        <div className="flex items-center gap-4">
                            <Image
                                src={a02.src}
                                alt="a01"
                                width={40}
                                height={20}
                            />
                            <h2 className="text-2xl font-bold">
                                Параметры доставки
                            </h2>
                        </div>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2">
                                <input
                                    className="appearance-none w-4 h-4 border-2 border-gray-300 rounded-full checked:bg-[#E07153] "
                                    type="radio"
                                    name="radio"
                                />
                                <span className="text-sm">Ближайшее время</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    className="appearance-none w-4 h-4 border-2 border-gray-300 rounded-full checked:bg-[#E07153]"
                                    type="radio"
                                    name="radio"
                                />
                                <span className="text-sm">Самовывоз</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    className="appearance-none w-4 h-4 border-2 border-gray-300 rounded-full checked:bg-[#E07153]"
                                    type="radio"
                                    name="radio"
                                />
                                <span className="text-sm">На дату / время</span>
                            </label>
                        </div>
                        <div className="flex flex-col gap-2">

                        <div className="flex  gap-2">
                                <input
                                    className="min-w-[378px] bg-gray-50 min-h-12 border-none outline-none px-4"
                                    type="text"
                                    placeholder="Ваше Имя"
                                />
                                <input
                                    className="min-w-40 bg-gray-50 min-h-12 border-none outline-none px-4"
                                    type="text"
                                    placeholder="Телефон"
                                />
                            </div>
                            <div className="flex gap-2">
                                <input
                                    className="min-w-40 bg-gray-50 min-h-12 border-none outline-none px-4"
                                    type="text"
                                    placeholder="Телефон"
                                />
                                <input
                                    className="min-w-[378px] bg-gray-50 min-h-12 border-none outline-none px-4"
                                    type="text"
                                    placeholder="Ваше Имя"
                                />
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24310.865041034318!2d71.794688!3d40.389836800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1738073503385!5m2!1sru!2s"
                                width="552"
                                height="194"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            <div className="flex items-center gap-2">
                                <img
                                    src={mapet.src}
                                    alt="mapet"
                                    width={24}
                                    height={24}
                                />
                                <p className="text-sm">Доставим за 40 мин</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between bg-[#F5F5F5] py-7 px-6 gap-5">
                        <div className="flex items-center gap-4">
                            <Image
                                src={a03.src}
                                alt="a01"
                                width={40}
                                height={20}
                            />
                            <h2 className="text-2xl font-bold">
                                Параметры оплаты
                            </h2>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex  gap-8">
                                <label className="flex items-center gap-2">
                                    <input
                                        className="appearance-none w-4 h-4 border-2 border-gray-300 rounded-full checked:bg-[#E07153]"
                                        type="radio"
                                        name="radio3"
                                    />
                                    <span className="text-sm">Наличные</span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        className="appearance-none w-4 h-4 border-2 border-gray-300 rounded-full checked:bg-[#E07153]"
                                        type="radio"
                                        name="radio3"
                                    />
                                    <span className="text-sm">
                                        Онлайн оплата

                                        </span>
                                </label>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 ">
                                    <span className="text-sm">
                                        Подготовить сдачу с :
                                    </span>
                                    <label className="flex items-center gap-7">
                                        <input
                                            className="outline-none min-w-[378px] px-4 min-h-12 border-2 border-gray-300 rounded-md checked:bg-[#E07153]"
                                            type="text"
                                            placeholder="Введите сумму"
                                        />
                                        <label className="flex items-center gap-2">
                                            <input
                                                className="appearance-none w-4 h-4 border-2 border-gray-300 rounded-sm checked:bg-[#E07153]"
                                                type="checkbox"
                                            />
                                            <span className="text-sm">
                                                Без сдачи
                                            </span>
                                        </label>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between bg-[#F5F5F5] py-7 px-6 gap-5">
                        <div className="flex items-center gap-4 border-b border-gray-300 pb-8">
                            <Image
                                src={a04.src}
                                alt="a01"
                                width={40}
                                height={20}
                            />
                            <h2 className="text-2xl font-bold">
                                Последний шаг
                            </h2>
                        </div>
                        <div className="flex items-center gap-6 border-b border-gray-300 pb-8">
                            <span className="text-sm min-w-32">
                                Количество персон
                            </span>
                            <div className="border rounded-lg min-w-24 py-1">
                                <button className="px-2 py-1 text-[#E07153] ">
                                    -
                                </button>
                                <span className="px-4">1</span>
                                <button className="px-2 py-1 text-[#E07153]">
                                    +
                                </button>
                            </div>
                            <span className="text-sm min-w-32">
                                Учебные палочки
                            </span>
                            <div className="border rounded-lg min-w-24 py-1">
                                <button className="px-2 py-1 text-[#E07153] ">
                                    -
                                </button>
                                <span className="px-4">1</span>
                                <button className="px-2 py-1 text-[#E07153]">
                                    +
                                </button>
                            </div>
                            <h2 className="text-md font-bold">Бесплатно</h2>
                        </div>
                        <div className="border-b pb-5 border-gray-300">
                            <div className="flex justify-between ">
                                <p className="text-base">Сумма заказа</p>
                                <h2 className="text-xl font-bold">729 ₽ </h2>
                            </div>

                            <div className="flex justify-between gap-4">
                                <p className="text-base">Стоимость доставки</p>
                                <h2 className="text-xl font-bold">0 ₽ </h2>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-4 px-4 border-2 border-dashed">
                            <p className="text-xl ">Промокод</p>
                            <button className="px-4 py-2 border-b border-b-[#E07153] text-[#E07153]">
                                Применить
                            </button>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex justify-between">
                                <p className="text-base">
                                    Итоговая сумма заказа
                                </p>
                                <h2 className="text-xl font-bold">729 ₽</h2>
                            </div>
                            <textarea
                                className="outline-none min-w-full px-4 min-h-24 border-2 p-4 border-gray-300 rounded-md checked:bg-[#E07153]"
                                placeholder="Комментарий к заказу"
                            />
                        </div>
                        <button
                            style={{ backgroundImage: "url('/bg.png')" }}
                            className="px-4 py-5 bg-[#E07153] min-w-full  text-white rounded-md text-xl"
                        >
                            Подтвердить заказ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
