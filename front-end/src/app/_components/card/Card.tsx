import React from "react";

type CardProps = {
  name: string;
  price: number;
  image: string;
};

export const Card = ({ image, name, price }: CardProps) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-md">
      <div>
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <p className="font-bold text-lg">{name}</p>
          <p className="text-green-600">₮{price.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};
