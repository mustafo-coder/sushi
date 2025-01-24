"use client";
import React from "react";

interface PizzaCardProps {
  image: string;
  gram: string;
  calories: string;
  name: string;
  description: string;
  price: string;
  oldPrice?: string;
  sizes: string[];
  onOrder: () => void;
}

const PizzaCard: React.FC<PizzaCardProps> = ({
  image,
  gram,
  calories,
  name,
  description,
  price,
  oldPrice,
  sizes,
  onOrder,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[392px]">
      <div className="relative">
        <img
          src={image}
          alt={name}
          width={392}
          height={256}
          className="w-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-white text-gray-800 text-sm rounded-full px-2 py-1 shadow">
          +150 ₽
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-gray-600 text-sm space-x-4 mb-2">
            <span>{gram} грамм</span>
            <span>•</span>
            <span>{calories} Ккал</span>
          </div>
          <div className="flex items-center space-x-2 mb-4 ">
            {sizes.map((size) => (
              <button
                key={size}
                className={`px-3 py-1 rounded-lg border ${
                  size === "30 см"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <h3 className="text-lg font-bold mb-1">{name}</h3>

        <p className="text-gray-500 text-sm mb-3">{description}</p>

        <div className="flex items-center justify-between">
          <div>
            {oldPrice && (
              <span className="text-gray-400 text-sm line-through mr-2">
                {oldPrice} ₽
              </span>
            )}
            <span className="text-lg font-bold">{price} ₽</span>
          </div>
          <button
            onClick={onOrder}
            className="bg-orange-500 w-44 hover:bg-orange-600 text-white font-medium rounded-lg px-4 py-2"
          >
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
