import NotFound from "@/components/404";
import Category from "@/components/Category";
import Hero from "@/components/Hero";
import React from "react";
import Orders from "@/components/Orders";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Orders />
    </div>
  );
};

export default HomePage;
