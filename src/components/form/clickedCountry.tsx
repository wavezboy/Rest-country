import React, { useState } from "react";
import countryType from "../../model/dataType";
import useFetchdata from "../../network/fetchdata";
import Header from "./header";
import { BsArrowLeft } from "react-icons/bs";

interface clickedCountryProps {}

export default function ClickedCountry() {
  const countries = useFetchdata();
  const [selectCountry, setSelectCountry] = useState<countryType[]>();

  return (
    <div className="dark:bg-[#202d36] min-h-screen">
      <Header />
      <div className="h-[30px] flex items-center dark:text-white dark:bg-[#2b3743] justify-center text-[11px] gap-2 ml-20 mt-14 border rounded-md w-[100px] shadow-lg">
        <BsArrowLeft className="dark:text-white" />
        Back
      </div>
      <div className="ml-20 mt-14">
        <div className="flex items-center gap-20">
          <img
            className="h-[300px] w-[400px]"
            src={countries[1]?.flag}
            alt=""
          />
          <div className="flex flex-col gap-4">
            <p className="font-bold dark:text-white ">{countries[1]?.name}</p>
            <div className="flex gap-24">
              <div>
                <div>
                  <p className="font semibold dark:text-white ">
                    Native name:{" "}
                    <span className="text-gray-400 font-normal">
                      {countries[1]?.nativeName}
                    </span>
                  </p>
                  <p className="font-semibold dark:text-white">
                    Population:{" "}
                    <span className="text-gray-400 font-normal">
                      {countries[1]?.population}
                    </span>
                  </p>
                  <p className="font-semibold dark:text-white">
                    Region:{" "}
                    <span className="text-gray-400 font-normal">
                      {countries[1]?.region}
                    </span>
                  </p>
                  <p className="font-semibold dark:text-white">
                    Sub Region:{" "}
                    <span className="text-gray-400 font-normal">
                      {countries[1]?.subregion}
                    </span>
                  </p>
                  <p className="font-semibold dark:text-white">
                    Caapital:{" "}
                    <span className="text-gray-400 font-normal">
                      {countries[1]?.capital}
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <p className="font-semibold dark:text-white">
                  Top Level Domain:{" "}
                  <span className="text-gray-400 font-normal">
                    {countries[1]?.topLevelDomain}
                  </span>
                </p>

                <p className="font-semibold dark:text-white">
                  Languages:{" "}
                  <span className="text-gray-400 font-normal">
                    {countries[34]?.languages.map((language, i) => (
                      <span>{language.nativeName},</span>
                    ))}
                  </span>
                </p>
                <p className="font-semibold dark:text-white">
                  Currencies:{" "}
                  <span className="text-gray-400 font-normal">
                    {countries[34]?.currencies.map((currencies, i) => (
                      <span key={i}>{currencies.name},</span>
                    ))}
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-6">
              {countries[100]?.borders && (
                <p className="font-semibold dark:text-white">
                  Borders:{" "}
                  <span className="text-gray-400  font-normal">
                    {countries[100]?.borders.map((border, i) => (
                      <span
                        className="h-[5px] w-[70px] dark:bg-[#2b3743]  mr-2 shadow-sm rounded-sm px-2 "
                        key={i}
                      >
                        {border}{" "}
                      </span>
                    ))}
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
