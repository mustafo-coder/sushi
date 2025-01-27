"use client";

import Image from "next/image";
import kop_sushi from "@/images/kop_sushi.png";
import taxtali_sushi from "@/images/taxtali_sushi.png";
import sushi_bro from "@/images/sushi_bro.png";
import sushilar from "@/images/shushilar.png";
import qol_sushi from "@/images/qol_blan_sushi.png";
import tarelkadagi_sushi from "@/images/tarelkadegi_sushi.png";

export default function Instagram() {
  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-[140px]">
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-6 space-y-4 sm:space-y-0">
        <div className="space-y-1 text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-medium">
            А вы уже подписались
          </h2>
          <p className="text-xl sm:text-2xl font-medium">
            на наш <span className="text-[#FF5A4F]">Instagram</span>?
          </p>
        </div>
        <button className="bg-[#FF5A4F] text-white px-4 py-2 text-sm sm:text-base">
          @riksha_sushi
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-3 pt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full lg:w-3/4">
          {[kop_sushi, taxtali_sushi, sushi_bro].map((src, index) => (
            <div key={index} className="w-full h-auto">
              <Image
                src={src || "/placeholder.svg"}
                alt="Sushi image"
                className="object-cover rounded-lg w-full h-auto"
              />
            </div>
          ))}
          <div className="col-span-2 sm:col-span-3 flex flex-col sm:flex-row gap-2 ">
            <Image
              src={sushilar || "/placeholder.svg"}
              alt="Sushi image"
              className="object-cover rounded-lg w-full sm:w-2/3 h-auto"
            />
            <Image
              src={qol_sushi || "/placeholder.svg"}
              alt="Sushi image"
              className="object-cover rounded-lg w-full sm:w-1/3 h-auto"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/4 mt-6 lg:mt-0">
          <Image
            src={tarelkadagi_sushi || "/placeholder.svg"}
            alt="Sushi image"
            className="object-cover rounded-lg w-full h-auto max-sm:h-[200px] max-sm:w-[200px] max-md:h-[600px] max-md:w-[400px]"
          />
        </div>
      </div>
    </div>
  );
}
