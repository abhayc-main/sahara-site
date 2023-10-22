import React from "react";
import Dash from "./Dash";
import ServicesCard from "./ServicesCard";
import { FaNutritionix } from "react-icons/fa";

const servicesData = [
  {
    img: "/services__1.png",
    title: "Professonal Kitchen",
    desc: "Experience the artistry of our professional kitchen in every dish.",
  },
  {
    img: "/services__2.png",
    title: "Delivery",
    desc: "Swift delivery to your doorstep, ensuring your meal is always fresh.",
  },
  {
    img: "/services__3.png",
    title: "Wine List",
    desc: "Stay connected with free WiFi while savoring our Mediterranean delights.",
  },
  {
    img: "/services__4.png",
    title: "Free Wifi",
    desc: "Quench your thirst with our selection of refreshing soft drinks.",
  },
];

const Services = () => {
  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Choose Best <span className="text-accent">Service</span>
        </h2>
        <p className="text-gray-700">
          Empower Your Experience: Select the Supreme Service You Deserve.
          <br />
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
        {servicesData.map((item, index) => (
          <ServicesCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
