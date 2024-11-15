import React from "react";
export default function TabButton({ expData, activeTab, setActiveTab }) {
  return (
    <div className="flex flex-row justify-center list-none gap-0 md:gap-3 w-full  ">
      {expData.map((item, index) => {
        if (index === activeTab) {
          return (
            <li
              className={` md:text-lg text-sm px-2 hover:text-orange-500 hover:border-b-2 hover:font-bold cursor-pointer border-b-2 text-orange-500`}
              key={item.id}
              onClick={() => setActiveTab(index)}
            >
              {item.company}
            </li>
          );
        }
        return (
          <li
            className={` md:text-lg text-sm px-2 hover:text-orange-500 hover:border-b-2 hover:font-bold cursor-pointer`}
            key={item.id}
            onClick={() => setActiveTab(index)}
          >
            {item.company}
          </li>
        );
      })}
    </div>
  );
}
