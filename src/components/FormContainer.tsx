import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface FormContainerProps {
  children: JSX.Element;
}

export default function FormContainer({ children }: FormContainerProps) {
  const Routes = useLocation();
  const [path, setPath] = useState("");

  useEffect(() => {
    if (!Routes) {
      return;
    }
    setPath(Routes.pathname);
  }, [Routes]);
  return (
    <div className="w-full flex items-center justify-center overflow-hidden h-screen">
      <div className="flex justify-evenly px-10 lg:gap-10 w-full h-[90%]">
        <div className="h-full rounded-lg overflow-hidden bg-cover bg-hero bg-no-repeat">
          <div className="h-[568px] flex flex-col gap-[28px] px-8 lg:px-20 mt-[35px]">
            <div className=" flex items-center gap-3">
              <div
                className={`${
                  path === "/" ? "bg-blue-400 border-none text-black" : null
                } h-[35px] w-[35px] flex items-center gap-1 justify-center rounded-full border-[1px] text-white text-[20px] border-white `}
              >
                1
              </div>
              <div className="flex justify-center flex-col">
                <p className="text-gray-500 font-bold text-[12px]">STEP 1</p>
                <h2 className="text-white  font-bold">YOUR INFO</h2>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div
                className={`${
                  path === "/step2"
                    ? "bg-blue-400 border-none text-black"
                    : null
                } h-[35px] w-[35px] flex items-center gap-1 justify-center rounded-full border-[1px] text-white text-[20px] border-white `}
              >
                2
              </div>
              <div className="flex justify-center flex-col">
                <p className="text-gray-500 font-bold text-[12px]">STEP 2</p>
                <h2 className="text-white font-bold">SELECT PLAN</h2>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div
                className={`${
                  path === "/step3"
                    ? "bg-blue-400 border-none text-black"
                    : null
                } h-[35px] w-[35px] flex items-center gap-1 justify-center rounded-full border-[1px] text-white text-[20px] border-white `}
              >
                3
              </div>
              <div className="flex justify-center flex-col">
                <p className="text-gray-500 font-bold text-[12px]">STEP 3</p>
                <h2 className="text-white font-bold">ADDS-ON</h2>
              </div>
            </div>
            <div className="flex gap-3">
              <div
                className={`${
                  path === "/step4"
                    ? "bg-blue-400 border-none text-black"
                    : null
                } h-[35px] w-[35px] flex items-center gap-1 justify-center rounded-full border-[1px] text-white text-[20px] border-white `}
              >
                4
              </div>
              <div className="flex justify-center flex-col">
                <p className="text-gray-500 font-bold text-[12px]">STEP 4</p>
                <h2 className="text-white font-bold">SUMMARY</h2>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[568px] w-[400px] lg:w-full">{children}</div>
      </div>
    </div>
  );
}
