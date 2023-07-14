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
    <div>
      <Header />
      <div className="h-[30px] flex items-center justify-center text-[11px] gap-2 ml-20 mt-14 border rounded-md w-[100px] shadow-lg">
        <BsArrowLeft />
        Back
      </div>
      <div className="ml-20 mt-14">
        <div className="flex items-center gap-20">
          <img
            className="h-[300px] w-[400px]"
            src={countries[1]?.flag}
            alt=""
          />
          <div>
            <div>
              <p className="font-bold">{countries[1]?.name}</p>
              <div>
                <div>
                  <p className="font-semibold">
                    Native name:{" "}
                    <span className="text-gray-400">
                      {countries[1]?.nativeName}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Population:{" "}
                    <span className="text-gray-400">
                      {countries[1]?.population}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Region:{" "}
                    <span className="text-gray-400">
                      {countries[1]?.region}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Sub Region:{" "}
                    <span className="text-gray-400">
                      {countries[1]?.subregion}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Caapital:{" "}
                    <span className="text-gray-400">
                      {countries[1]?.capital}
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <p className="font-semibold">
                  Top Level Domain:{" "}
                  <span className="text-gray-400">
                    {countries[1]?.topLevelDomain}
                  </span>
                </p>

                <p className="font-semibold">
                  Languages:{" "}
                  <span className="text-gray-400">
                    {countries[34]?.languages.map((language, i) => (
                      <span>{language.nativeName},</span>
                    ))}
                  </span>
                </p>
                <p className="font-semibold">
                  Currencies:{" "}
                  <span className="text-gray-400">
                    {countries[34]?.currencies.map((currencies, i) => (
                      <span>{currencies.name},</span>
                    ))}
                  </span>
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
