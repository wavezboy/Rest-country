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
    <div>
      <Header />
      <div className="flex justify-between">
        <div
          className={`h-[40px] flex items-center border mt-4 ml-6 bg-white shadow-md rounded-md w-[400px]`}
        >
          <div className="flex items-center w-full gap-2 ml-4">
            <BsSearch className="text-[11px] text-gray-300" />
            <input
              type="search"
              onChange={handleChange}
              placeholder="search for a country...."
              className="text-[11px] outline-none w-full text-gray-400"
            />
          </div>
        </div>
        <div className="h-[35px] flex items-center justify-center bg-white shadow-md mt-4 mr-6 w-[100px] border">
          <div className="">
            <select
              value={region}
              onChange={(e) => {
                setRegion(e.target.value);
              }}
              className="text-[10px]"
              name="region"
              id="region"
            >
              <option value="" disabled selected hidden>
                Filter by region
              </option>
              <option value="All">All</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap ml-16 mt-3 gap-5">
        {availableCountries.map((country, i) => (
          <Country country={country} />
        ))}
      </div>
    </div>
  );
}
