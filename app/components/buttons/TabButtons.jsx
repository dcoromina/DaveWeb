"use client";
import React from "react";
export default function TabButton({ expData, activeTab, setActiveTab }) {
  return (
    <div className="flex flex-row justify-center list-none gap-2 md:gap-4 w-full flex-wrap">
      {expData.map((item, index) => {
        const isActive = index === activeTab;
        return (
          <li
            className={`
              md:text-lg text-sm px-4 py-2 rounded-lg
              cursor-pointer transition-all duration-300
              ${isActive
                ? 'text-primary font-bold bg-primary/10 border-2 border-primary shadow-lg shadow-primary/20'
                : 'text-gray-400 hover:text-white border-2 border-transparent hover:border-white/20 hover:bg-white/5'
              }
            `}
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
