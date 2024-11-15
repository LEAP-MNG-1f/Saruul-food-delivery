import React from "react";

type CardProps = {
  img: string;
  amount: number;
  title: string;
};

export const Card = ({ img, title, amount }: CardProps) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-md">
      <div>
        <img src={img} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <p className="font-bold text-lg">{title}</p>
          <p className="text-green-600">₮{amount.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};
