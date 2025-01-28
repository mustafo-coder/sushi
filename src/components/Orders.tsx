import { Delete, Pissa, Roll } from '@/images';
import Image from 'next/image';
import React from 'react';

const data = [
  {
    id: 1,
    title: 'Пицца “Рикша”',
    sizes: ['30 см', '50 см'],
    price: 510,
    image: Pissa,
  },
  {
    id: 2,
    title: 'Ролл Сливочная креветка',
    price: 199,
    image: Roll,
  },
];

export default function Orders() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Оформление заказа</h1>
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
                  <h2 className="text-[15px] font-semibold">{item.title}</h2>
                  {item.sizes && (
                    <div className="text-sm text-gray-500">
                      {item.sizes.join(' • ')}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center">

                <div className='border rounded-lg'>
                  <button className="px-2 py-1 ">−</button>
                  <span className="px-4">1</span>
                  <button className="px-2 py-1 ">+</button>
                </div>

                <span className="ml-4 font-semibold">{item.price} ₽</span>
                <button className="ml-4 text-red-500 hover:text-red-700">
                  <Image src={Delete} alt='delete' />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}
