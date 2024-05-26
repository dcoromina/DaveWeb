import React from "react";

const ScrollDownIndicator = () => {
  return (
    <div className="flex flex-row justify-center items-center h-10 w-full animate-bounce animate-infinite animate-normal animate-fill-forwards absolute z-0 bottom-8">
      <div class="border-solid border-white justify-items-end w-6 h-6 border-b-4 border-l-4 rounded-sm -rotate-45 cursor-pointer">
        <button className="" type="submit"></button>
      </div>
    </div>
  );
};

export default ScrollDownIndicator;
