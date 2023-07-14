import React, { useState, useEffect } from "react";
import { BsMoon } from "react-icons/bs";

export default function Header() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`h-[70px] w-full flex items-center shadow-md border-b-2 bg-gray-100 border-gray-100 dark:bg-[#2b3743] dark:shadow-md dark:border-[#202d36]`}
    >
      <div className="font-bold flex justify-between w-full px-5">
        <div>
          <p className="dark:text-[white] text-[black]">Where in the world?</p>
        </div>
        <div
          onClick={() => {
            setDarkMode(!darkMode);
          }}
          className="flex items-center cursor-pointer gap-2"
        >
          <BsMoon className={`${darkMode ? "text-white" : "text-black"}`} />
          <p
            className={`${darkMode ? "text-white" : "text-black"} font-normal`}
          >
            Dark Mode
          </p>
        </div>
      </div>
    </div>
  );
}
