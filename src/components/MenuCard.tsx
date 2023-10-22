"use client"
import Image from "next/image";
import { useState } from "react";
import ItemModal from "./modal/modal";

interface MenuCardProps {
  id: string;
  name: string; // changed from title to name
  imageUrl: string;
  category: string;
  price: string;  // new prop
  desc: string;  // new prop
}

const MenuCard = ({
  id,
  name,  // changed from title to name
  imageUrl,
  category,
  price,  // new prop
  desc,  // new prop
  onClick,  // existing prop
}: MenuCardProps & { onClick: () => void }) => {
    

  return (
    <div 
      className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full mr-4" 
      onClick={onClick}  // using the onClick prop here
    >
      <div className="relative w-full aspect-video rounded-md overflow-hidden ">
        <Image fill className="object-cover z-0" alt={name} src={imageUrl} />
      </div>
      <div className="flex flex-col pt-2">
        <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
          {name}  
        </div>
        <p className="text-xs text-muted-foreground mt-2">{category}</p>
        <p className="text-sm text-muted-foreground mt-2">{price}</p>  
        <p className="text-sm text-muted-foreground mt-2">{desc}</p> 
        <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
        </div>
      </div>
      
    </div>
    
  );
};

export default MenuCard;