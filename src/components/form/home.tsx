import React from "react";
import Header from "./header";
import { BsSearch } from "react-icons/bs";
import useFetchdata from "../../network/fetchdata";
import Country from "./country";
import { useState, useEffect } from "react";
import countryType from "../../model/dataType";

export default function Home() {
  const countries = useFetchdata();
  const [availableCountries, setAvailableCountries] =
    useState<countryType[]>(countries);

  const [region, setRegion] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setAvailableCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    setAvailableCountries(countries);
  }, [countries]);

  useEffect(() => {
    if (region == "All") {
      setAvailableCountries(countries);
      return;
    }
    setAvailableCountries(
      countries.filter((country) => country.region == region)
    );
  }, [region]);

  return (
    <div className="relative">
      <div className="fixed w-full">
        <Header />
        <div className="flex dark:bg-[#202d36] justify-between">
          <div
            className={`h-[40px] px-2 dark:bg-[#2b3743]  flex items-center mt-4 ml-6  bg-[#ffff] shadow-md rounded-md w-[400px]`}
          >
            <div className="flex dark:bg-[#2b3743] items-center w-full gap-2 ml-4">
              <BsSearch className="text-[11px] dark:bg-[#2b3743]  dark:text-white text-gray-300" />
              <input
                type="search"
                onChange={handleChange}
                placeholder="search for a country...."
                className="text-[11px] dark:placeholder:text-white bg-transparent outline-none w-full text-gray-400"
              />
            </div>
          </div>
          <div>
            <select
              value={region}
              onChange={(e) => {
                setRegion(e.target.value);
              }}
              className="text-[10px] block h-[35px] dark:bg-[#2b3743] cursor-pointer focus:border items-center justify-center bg-[#fff] dark:text-white p-2    shadow-lg mt-4 mr-6 w-[100px] "
              name="region"
              id="region"
            >
              <option value="" disabled selected hidden>
                Filter by region
              </option>
              <option className="dark:text-white dark:bg-[#202d36]" value="All">
                All
              </option>
              <option
                className="dark:text-white dark:bg-[#202d36]"
                value="Africa"
              >
                Africa
              </option>
              <option
                className="dark:text-white dark:bg-[#202d36]"
                value="Americas"
              >
                Americas
              </option>
              <option
                className="dark:text-white dark:bg-[#202d36]"
                value="Asia"
              >
                Asia
              </option>
              <option
                className="dark:text-white dark:bg-[#202d36]"
                value="Europe"
              >
                Europe
              </option>
              <option
                className="dark:text-white dark:bg-[#202d36]"
                value="Oceania"
              >
                Oceania
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="dark:bg-[#202d36] min-h-screen pt-48">
        <div className="flex flex-wrap ml-16 pb-60 gap-5">
          {availableCountries.map((country, i) => (
            <Country country={country} />
          ))}
        </div>
      </div>
    </div>
  );
}
