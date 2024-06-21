import React from "react";

const CircleDesign = () => {
  return (
    <div
      className="absolute -z-[1] flex h-full w-full flex-col items-center justify-between gap-16 blur-2xl lg:flex-row"
      name="blur design"
    >
      <span className="inline-block h-[1rem] w-[.5rem] animate-circle rounded-b-full bg-violet-400 xl:rounded-r-full xl:rounded-bl-none"></span>
      <span className="inline-block h-[1rem] w-[1rem] animate-circle rounded-full bg-violet-400"></span>
      <span className="inline-block h-[1rem] w-[1rem] animate-circle rounded-full bg-violet-400"></span>
      <span className="inline-block h-[1rem] w-[1rem] animate-circle rounded-full bg-violet-400"></span>
      <span className="inline-block h-[1rem] w-[.5rem] animate-circle rounded-t-full bg-violet-400 xl:rounded-l-full xl:rounded-tr-none"></span>
    </div>
  );
};

export default CircleDesign;