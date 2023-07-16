import React, { useState } from "react";
import countryType from "../../model/dataType";
import { BrowserRouter, Link, Route, Navigate, Routes } from "react-router-dom";
import ClickedCountry from "./clickedCountry";
import { useAppContext } from "../../context/context";
interface CountryProps {
  country: countryType;
}

export default function Country({ country }: CountryProps) {
  const [countryName, setCountryName] = useState("");

  const { setLove } = useAppContext();

  return (
    <Link to={"/country/" + country.name}>
      <div
        onClick={() => {
          setLove("i love yoy");
        }}
        className={`h-[250px] w-[200px] dark:bg-[#2b3743] rounded-md shadow-md mt-7 ml-5 cursor-pointer`}
      >
        <div className="w-full h-[120px]">
          <img
            className="h-full w-full object-cover"
            src={country?.flag}
            alt=""
          />
        </div>
        <div className="ml-5">
          <p className={`font-bold dark:text-white mt-2 mb-3 `}>
            {country?.name}
          </p>
          <div className="flex">
            <p className={`text-[13px] dark:text-white font-semibold`}>
              Population:{" "}
              <span
                className={`text-[13px] text-gray-500 "
              }`}
              >
                {country?.population}
              </span>
            </p>
          </div>
          <div>
            <p className={`text-[13px] dark:text-white font-semibold `}>
              Region:{" "}
              <span
                className={`text-[13px] text-gray-500 
              }`}
              >
                {country?.region}
              </span>
            </p>
          </div>
          <div>
            <p className={`text-[13px] dark:text-white font-semibold `}>
              Capital:{" "}
              <span className="text-[13px] text-gray-500">
                {country?.capital}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
