"use client";
import React from "react";
import CategorySwipper from "./CategorySwipper";
import PizzaCard from "./PizzaCard";

export default function Category() {
  const pizzas = [
    {
      image: "/image/img1.png",
      gram: "380",
      calories: "130",
      name: 'Пицца "Парма"',
      description: "соус бешамель, пармезан, сыр моцарелла, прошутто, руккола.",
      price: "588",
      oldPrice: "699",
      sizes: ["30 см", "50 см"],
    },
    {
      image: "/image/img2.png",
      gram: "400",
      calories: "150",
      name: 'Пицца "Маргарита"',
      description: "соус томатный, сыр моцарелла, базилик.",
      price: "500",
      oldPrice: "550",
      sizes: ["30 см", "40 см"],
    },
    {
      image: "/image/img2.png",
      gram: "400",
      calories: "150",
      name: 'Пицца "Маргарита"',
      description: "соус томатный, сыр моцарелла, базилик.",
      price: "500",
      oldPrice: "550",
      sizes: ["30 см", "40 см"],
    },
    {
      image: "/image/img2.png",
      gram: "400",
      calories: "150",
      name: 'Пицца "Маргарита"',
      description: "соус томатный, сыр моцарелла, базилик.",
      price: "500",
      oldPrice: "550",
      sizes: ["30 см", "40 см"],
    },
    {
      image: "/image/img3.png",
      gram: "450",
      calories: "160",
      name: 'Пицца "Пепперони"',
      description: "соус томатный, сыр моцарелла, пепперони.",
      price: "600",
      oldPrice: "650",
      sizes: ["30 см", "50 см"],
    },
    {
      image: "/image/img4.png",
      gram: "420",
      calories: "140",
      name: 'Пицца "Гавайская"',
      description: "соус томатный, сыр моцарелла, курица, ананасы.",
      price: "580",
      oldPrice: "33",
      sizes: ["30 см", "50 см"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold flex items-center flex-wrap gap-2 mb-6 max-sm:text-3xl justify-center">
          Категории{" "}
          <img
            src="./icon777.svg"
            alt="icon"
            className="w-16 h-16 max-sm:w-12 max-sm:h-12"
          />
        </h1>
        <CategorySwipper />
        <div
          className="grid gap-6 mt-6 mx-auto w-full 
          grid-cols-3 
          xl:grid-cols-3 
          lg:grid-cols-2 
          md:grid-cols-2 
          sm:grid-cols-1 
          max-sm:gap-4
          justify-items-center"
        >
          {pizzas.map((pizza, index) => (
            <PizzaCard
              key={index}
              image={pizza.image}
              gram={pizza.gram}
              calories={pizza.calories}
              name={pizza.name}
              description={pizza.description}
              price={pizza.price}
              oldPrice={pizza.oldPrice}
              sizes={pizza.sizes}
              onOrder={() => alert(`Ordered: ${pizza.name}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
