import Image from "next/image";
import React from "react";

const Survey = () => {
  return (
    <div className="container pt-40" id="aboutus">
      <div className="grid lg:grid-cols-[50%,1fr] gap-20">
        <div>
          <Image
            className="w-[100%] h-auto lg:w-auto lg:h-[90vh] rounded-xl"
            src="/SaharaDude.png"
            width={1000}
            height={600}
            alt="survey image"
          />
        </div>

        <div className="self-center">
          <h2 className="text-4xl md:text-6xl font-bold">About Us</h2>
          <h2 className="text-4xl md:text-6xl font-bold pt-3">
            <span className="text-accent"></span>
          </h2>

          <p className="text-gray-700 pt-16">
            Sahara Mediterranean Food isn't just about exceptional cuisine; it's
            about sharing in the human experience. It's about crafting memories,
            one meal at a time. We invite you to be part of our journey, to
            savor flavors that ignite the senses, and to create moments that
            last a lifetime. Welcome to our family; welcome to Sahara
            Mediterranean Food.
          </p>

          <p className="text-gray-700 pt-8">
            At Sahara Mediterranean Food, we're dedicated to crafting the finest
            meals, enriching your moments, and ensuring each customer's
            experience is exceptional.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Survey;
