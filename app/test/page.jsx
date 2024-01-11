"use client";
import React, { useState } from "react";

const LeftArrow = ({ onLeftClick }) => {
  return (
    <button onClick={onLeftClick} className="text-3xl m-4">
      &larr;
    </button>
  );
};

const RightArrow = ({ onRightClick }) => {
  return (
    <button onClick={onRightClick} className="text-3xl m-4">
      &rarr;
    </button>
  );
};

const Box = ({ count }) => {
  return (
    <h1 className="outline max-w-2xl mx-2 my-32 p-8 bg-gray-600 text-center m-4">
      {count}
    </h1>
  );
};

const Page = () => {
  const [leftCount, setLeftCount] = useState(0);
  const [rightCount, setRightCount] = useState(0);

  const handleLeftClick = () => {
    setLeftCount(leftCount + 1);
    console.log("Left Click");
  };

  const handleRightClick = () => {
    setRightCount(rightCount + 1);
    console.log("Right Click");
  };

  const handleResetClick = () => {
    setLeftCount(0);
    setRightCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex justify-center items-center">
        <Box count={leftCount} />
        <div className="flex flex-col items-center">
          <LeftArrow onLeftClick={handleLeftClick} />
          <RightArrow onRightClick={handleRightClick} />
        </div>
        <Box count={rightCount} />
      </div>
      <button
        onClick={handleResetClick}
        className="outline max-w-2xl my-2 p-8 bg-gray-600"
      >
        Reset
      </button>
    </div>
  );
};

export default Page;
