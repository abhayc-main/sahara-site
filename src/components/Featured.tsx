import Image from "next/image";
import React from "react";
import Dash from "./Dash";

const Featured = () => {
  return (
    <div className="container pt-40" id="featured-section">
      <h2 className="text-6xl font-bold">Our</h2>
      <h2 className="text-6xl font-bold pt-2">
        Featured <span className="text-accent">Food</span>
      </h2>

      <p className="max-w-[550px] pt-10 text-gray-700">
        "Indulge in a Mediterranean feast today, flavors that ignite the
        senses."
      </p>

      <Dash />

      <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl rounded-xl"
            src="/SaharaCum.JPG"
            width={300}
            height={600}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Beef Lamb Shawarma Plate</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Juicy, seasoned meats with aromatic spices.
            </p>
          </div>
        </div>
        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl rounded-xl"
            src="/SaharaBowl.JPG"
            width={500}
            height={900}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Chicken Shawarma Salad</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Fresh greens, tender chicken, and flavorful shawarma.
            </p>
          </div>
        </div>
        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl rounded-xl"
            src="/SaharaChicken.JPG"
            width={300}
            height={600}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Lamb Kebab Plate</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Succulent lamb skewers with fragrant Mediterranean spices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
