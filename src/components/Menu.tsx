"use client";
import React, { useState, useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Dash from "./Dash";
import Image from "next/image";
import MenuCard from "./MenuCard";
import imageVariable from "./pizza.jpg";
import Carousel from "./carousel";

export const menuData = [
  {
    id: "ShwarmaBeefPlate",
    name: "Beef Plate",
    imageUrl: "/Beef Shawarma Plate.JPG",
    price: "$17.99",
    category: "Shawarma",
    desc: "Tender beef shawarma served on a plate with your choice of sides.",
  },
  {
    id: "ShwarmaBeefSandwich",
    name: "Beef Sandwich",
    imageUrl: "/Gyro Lamb and Beef Plate.JPG",
    price: "$12.99",
    category: "Shawarma",
    desc: "A delicious beef shawarma sandwich with fresh ingredients.",
  },
  {
    id: "ShwarmaBeefSandwich",
    name: "Beef Salad",
    imageUrl: "/Gyro Beef slash Lamb Salad.JPG",
    price: "$12.99",
    category: "Shawarma",
    desc: "A delicious beef shawarma salad with fresh ingredients.",
  },

  {
    id: "ShwarmaChickenPlate",
    name: "Chicken Plate",
    imageUrl: imageVariable,
    price: "$20.99",
    category: "Shawarma",
    desc: "Savor the flavors with our chicken shawarma plate.",
  },
  {
    id: "ShwarmaChickenSalad",
    name: "Chicken Salad",
    imageUrl: "/Chicken Shawarma Salad.JPG",
    price: "$16.99",
    category: "Shawarma",
    desc: "A refreshing salad with tender chicken shawarma.",
  },
  {
    id: "ShwarmaChickenSandwich",
    name: "Chicken Sandwich",
    imageUrl: imageVariable,
    price: "$12.99",
    category: "Shawarma",
    desc: "A flavorful chicken shawarma sandwich made to perfection.",
  },

  {
    id: "ShwarmaLambPlate",
    name: "Lamb Plate",
    imageUrl: imageVariable,
    price: "$17.99",
    category: "Shawarma",
    desc: "Indulge in a plate of succulent lamb shawarma.",
  },
  {
    id: "ShwarmaLambSalad",
    name: "Lamb Salad",
    imageUrl: imageVariable,
    price: "$16.99",
    category: "Shawarma",
    desc: "A delightful salad topped with savory lamb shawarma.",
  },
  {
    id: "ShwarmaLambSandwich",
    name: "Lamb Sandwich",
    imageUrl: imageVariable,
    price: "$12.99",
    category: "Shawarma",
    desc: "Satisfy your cravings with a lamb shawarma sandwich.",
  },
  {
    id: "ShwarmaShawarmaOverHummus",
    name: "Shawarma over Hummus",
    imageUrl: imageVariable,
    price: "$16.99",
    category: "Shawarma",
    desc: "A delightful combination of shawarma served over creamy hummus.",
  },

  {
    id: "GyroBeefPlate",
    name: "Beef Plate",
    imageUrl: "/Gyro Lamb and Beef Plate.JPG",
    price: "$17.99",
    category: "Gyro",
    desc: "Enjoy a hearty plate of gyro-style beef.",
  },
  {
    id: "GyroBeefSalad",
    name: "Beef Salad",
    imageUrl: "/Gyro Beef slash Lamb Salad.JPG",
    price: "$16.99",
    category: "Gyro",
    desc: "A flavorful salad with gyro-seasoned beef.",
  },
  {
    id: "GyroBeefSandwich",
    name: "Beef Sandwich",
    imageUrl: imageVariable,
    price: "$12.99",
    category: "Gyro",
    desc: "Savor the taste of gyro-style beef in a sandwich.",
  },
  {
    id: "GyroChickenPlate",
    name: "Chicken Plate",
    imageUrl: "/Chicken Gyro Plate.JPG",
    price: "$20.99",
    category: "Gyro",
    desc: "A delicious plate of gyro-seasoned chicken.",
  },
  {
    id: "GyroChickenSalad",
    name: "Chicken Salad",
    imageUrl: imageVariable,
    price: "$16.99",
    category: "Gyro",
    desc: "A refreshing salad with tender gyro-seasoned chicken.",
  },
  {
    id: "GyroChickenSandwich",
    name: "Chicken Sandwich",
    imageUrl: imageVariable,
    price: "$12.99",
    category: "Gyro",
    desc: "A satisfying gyro-style chicken sandwich.",
  },
  {
    id: "GyroOverGreekFries",
    name: "Gyro Over Greek Fries",
    imageUrl: "/Lamb and Beef Gyro over Greek Fries.JPG",
    price: "$16.99",
    category: "Gyro",
    desc: "Indulge in gyro meat served over crispy Greek fries.",
  },
  {
    id: "GyroLambPlate",
    name: "Lamb Plate",
    imageUrl: "/Gyro Lamb and Beef Plate.JPG",
    price: "$17.99",
    category: "Gyro",
    desc: "A plate of gyro-seasoned lamb for a hearty meal.",
  },
  {
    id: "GyroLambSandwich",
    name: "Lamb Sandwich",
    imageUrl: imageVariable,
    price: "$12.99",
    category: "Gyro",
    desc: "Satisfy your hunger with a gyro-style lamb sandwich.",
  },
  {
    id: "GyroLambSalad",
    name: "Lamb Salad",
    imageUrl: "/Gyro Beef slash Lamb Salad.JPG",
    price: "$12.99",
    category: "Gyro",
    desc: "Satisfy your hunger with a gyro-style lamb salad.",
  },
  {
    id: "Appetizer",
    name: "Ful",
    imageUrl: imageVariable,
    price: "$9.99",
    category: "Appetizers",
    desc: "Satisfy your hunger with a fava beans stew"
  },
  {
    id: "Appetizer",
    name: "Ful and Hummus Mix",
    imageUrl: imageVariable,
    price: "$9.99",
    category: "Appetizers",
    desc: "Satisfy your hunger with a creamy chickpea dip and fava beans"
  },
  {
    id: "Appetizer",
    name: "Lamb/Beef/Chicken and Hummus Mix",
    imageUrl: imageVariable,
    price: "$9.99",
    category: "Appetizers",
    desc: "Seasoned meats harmonize with classic Mediterranean chickpea spread."
  },


  {
    id: "AppetizerShawarmaOverHummus",
    name: "Shawarma over Hummus",
    imageUrl: imageVariable,
    price: "$16.99",
    category: "Shawarma",
    desc: "A delightful appetizer featuring shawarma over creamy hummus.",
  },

  {
    id: "AppetizerChocolateRolledBaklava",
    name: "Chocolate Rolled Baklava",
    imageUrl: imageVariable,
    price: "$4.99",
    category: "Desserts",
    desc: "Indulge in a sweet treat with chocolate-infused baklava.",
  },
  {
    id: "AppetizerPistachioBaklava",
    name: "Pistachio Baklava",
    imageUrl: imageVariable,
    price: "$4.99",
    category: "Desserts",
    desc: "A classic dessert made with layers of flaky pastry and pistachio filling.",
  },
  {
    id: "AppetizerRegularBaklava",
    name: "Regular Baklava",
    imageUrl: imageVariable,
    price: "$4.99",
    category: "Desserts",
    desc: "Savor the sweetness of traditional baklava with honey and nuts."
  },

  {
    id: "AppetizerRegularBaklava",
    name: "Falafel Sandwich",
    imageUrl: imageVariable,
    price: "$10.99",
    category: "Falafel",
    desc: "Crispy chickpea patties nestled in fresh pita bread."
  },
  {
    id: "AppetizerRegularBaklava",
    name: "Falafel Veggie Wrap",
    imageUrl: imageVariable,
    price: "$10.99",
    category: "Falafel",
    desc: "Juicy burger patty, veggies wrapped in toasted bun."
  },
  {
    id: "AppetizerRegularBaklava",
    name: "Falafel Plate",
    imageUrl: imageVariable,
    price: "$10.99",
    category: "Falafel",
    desc: "Golden falafel balls and dipping sauce."
  },
  {
    id: "AppetizerRegularBaklava",
    name: "Falafel Salad",
    imageUrl: imageVariable,
    price: "$10.99",
    category: "Falafel",
    desc: "Fresh veggies, falafel, with tangy dressing on top."
  },
  {
    id: "AppetizerRegularBaklava",
    name: "Falafel Mixed Veggie Plate",
    imageUrl: imageVariable,
    price: "$10.99",
    category: "Falafel",
    desc: "Assorted vegetables, flame-grilled, embodying Mediterranean flavors."
  },

  {
    id: "AppetizerRegularBaklava",
    name: "Lamb Shank",
    imageUrl: imageVariable,
    price: "$24.99",
    category: "Daiy House Specials",
    desc: "Flavorful spiced lamb dish."
  },
  {
    id: "AppetizerRegularBaklava",
    name: "Quzi Lamb",
    imageUrl: imageVariable,
    price: "$24.99",
    category: "Daiy House Specials",
    desc: "Assorted vegetables, flame-grilled, embodying Mediterranean flavors."
  },

  {
    id: "AppetizerRegularBaklava",
    name: "French Fries",
    imageUrl: imageVariable,
    price: "$4.99",
    category: "Appetizers",
    desc: "Just Fries"
  },
  {
    id: "AppetizerRegularBaklava",
    name: "Greek Fries",
    imageUrl: imageVariable,
    price: "$7.99",
    category: "Appetizers",
    desc: "Fries from the Greek Cuisine"
  },
  {
    id: "AppetizerRegularBaklava",
    name: "Lentil Soup",
    imageUrl: imageVariable,
    price: "$5.99",
    category: "Appetizers",
    desc: "Hearty, comforting legume broth."
  },

  {
    id: "AppetizerRegularBaklava",
    name: "Tzatziki Sauce",
    imageUrl: imageVariable,
    price: "$1.99",
    category: "Appetizers",
    desc: "Creamy cucumber yogurt condiment."
  },
  

  {
    id: "AppetizerRegularBaklava",
    name: "Feta Cheese",
    imageUrl: imageVariable,
    price: "$1.99",
    category: "Appetizers",
    desc: "Assorted vegetables, flame-grilled, embodying Mediterranean flavors."
  },

];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredMenuData, setFilteredMenuData] = useState(menuData);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredMenuData(
        menuData.filter((item) => item.category === selectedCategory)
      );
    } else {
      setFilteredMenuData(menuData);
    }
  }, [selectedCategory]);

  const handleCategorySelect = (category: any) => {
    setSelectedCategory(category);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // change this for the number of cards you want to show at once
    slidesToScroll: 1,
  };

  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Our <span className="text-accent">Menu</span>
        </h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorem
          <br />
          quidem esse eum animi?
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto mb-8">
        <li>
          <button
            onClick={() => handleCategorySelect("Gyro")}
            className="rounded px-4 py-2 bg-accent text-white"
          >
            Gyro
          </button>
        </li>
        <li>
          <button
            onClick={() => handleCategorySelect("Shawarma")}
            className="rounded px-4 py-2 bg-accent text-white"
          >
            Shawarma
          </button>
        </li>
        <li>
          <button
            onClick={() => handleCategorySelect("Appetizers")}
            className="rounded px-4 py-2 bg-accent text-white"
          >
            Appetizers
          </button>
        </li>
        <li>
          <button
            onClick={() => handleCategorySelect("Kebab")}
            className="rounded px-4 py-2 bg-accent text-white"
          >
            Kebabs
          </button>
        </li>
        <li>
          <button
            onClick={() => handleCategorySelect("Falafel")}
            className="rounded px-4 py-2 bg-accent text-white"
          >
            Falafel
          </button>
        </li>
        <li>
          <button
            onClick={() => handleCategorySelect("Daily House Specials")}
            className="rounded px-4 py-2 bg-accent text-white"
          >
            Daily House Specials
          </button>
        </li>
        <li>
          <button
            onClick={() => handleCategorySelect("Sides")}
            className="rounded px-4 py-2 bg-accent text-white"
          >
            Sides
          </button>
        </li>
        <li>
          <button
            onClick={() => handleCategorySelect("Desserts")}
            className="rounded px-4 py-2 bg-accent text-white"
          >
            Desserts
          </button>
        </li>
      </ul>

      <Slider {...settings}>
        {filteredMenuData.map((item) => (
          <MenuCard
            key={item.id}
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            category={item.category}
            price={item.price}
            desc={item.desc}
            onClick={() => {
              console.log(`Clicked on ${item.name}`);
            }}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Menu;

