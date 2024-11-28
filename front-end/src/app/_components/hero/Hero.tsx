import * as React from "react";

export const Hero = () => {
  return (
    <div>
      <div className="flex w-full flex-col">
        <div className="h-[600px] place-items-center bg-green-600 flex flex-col justify-center items-start">
          <div className="flex flex-col justify-between container m-auto max-w-[1200px]">
            <div>
              <p className="text-white font-extrabold text-[36px]">
                Saruul's food delivery
              </p>
              <p className="text-white font-bold text-[25px] w-[800px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, cumque?
              </p>
            </div>
            <div>
              <div className="absolute top-[200px] right-[400px] ">
                <img
                  src="https://i.ytimg.com/vi/vljiaOFkxkA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDZ79Mu2Lhfhc5eWazYwYaPBTWVHg"
                  alt=""
                  className="rounded-full w-[400px] h-[400px]"
                />
              </div>
              <div className="absolute top-[400px] right-[300px] ">
                <img
                  src="https://www.escapetomongolia.com/__data/assets/image/0023/6566/varieties/medium.jpg"
                  alt=""
                  className="rounded-full w-[200px] h-[200px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
