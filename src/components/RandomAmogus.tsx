import React from "react";

export const RandomAmogus = () => {
  const shouldDisplay = React.useRef(Math.random() < 1 / 10);
  if (!shouldDisplay.current) return null;

  return (
    <div className="fixed top-1/2 left-1/2 w-1/2 -translate-x-[50%] -translate-y-[50%]">
      <img
        src="https://cdn.discordapp.com/attachments/876381738232856610/1032087317294350357/image-removebg-preview_36.png"
        alt="ogretime amogus"
        className="w-full"
      />
      <h1 className="text-6xl font-cursive text-center">SECRET OVERTIME AMOGUSTIME</h1>
    </div>
  );
};
