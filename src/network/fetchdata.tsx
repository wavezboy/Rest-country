import React, { useEffect } from "react";
import { useState } from "react";
import countryType from "../model/dataType";

export default function useFetchdata() {
  const API_URL = "http://localhost:8000/countries";
  const [countries, setCountries] = useState<countryType[]>([]);

  useEffect(() => {
    const fecthData = async () => {
      try {
        const response = await fetch(API_URL);
        const listCountry = await response.json();
        setCountries(listCountry);
      } catch (error) {
        console.log(error);
      }
    };
    (async () => await fecthData())();
  }, []);

  // console.log(countries[0]?.name);

  return countries;
}
