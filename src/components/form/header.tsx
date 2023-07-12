import React from "react";
import { BsMoon } from "react-icons/bs";

export default function Header() {
  return (
    <div className="h-[70px] w-full flex items-center border-b-2 border-gray-100">
      <div className="font-bold flex justify-between w-full px-5">
        <div>
          <p>Where in the world?</p>
        </div>
        <div className="flex items-center gap-2">
          <BsMoon />
          <p className="font-normal ">Dark Mode</p>
        </div>
      </div>
    </div>
  );
}
