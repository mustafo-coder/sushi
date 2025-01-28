import React from "react";
import FoodDetailSwiper from "../../components/FoodDetailSwiper";

export default function page() {
  return (
    <div className="container space-y-10">
      <button className="flex items-center gap-4">
        <span className="text-orange-500">{"<"}--</span>Назад в каталог
      </button>
      <hr />
      <FoodDetailSwiper />
      <hr />
    </div>
  );
}
