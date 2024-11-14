import * as React from "react";

export const Hero = () => {
  return (
    <div>
      <div className="flex w-full flex-col border-opacity-50">
        <div className="card rounded-box grid h-[600px] place-items-center bg-green-600">
          <p className="text-white font-extrabold text-[40px]">
            Saruul's food delivery
          </p>
          <hr />
          <p className="text-white font-bold text-[40px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, cumque?
          </p>
        </div>
      </div>
    </div>
  );
};
