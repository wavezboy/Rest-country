type countryType = {
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  borders: string[];
  topLevelDomain: string[];
  currencies: CurrenciesType[];
  languages: LanguageType[];
  flag: string;
};

type LanguageType = {
  nativeName: string;
};

type CurrenciesType = {
  name: string;
};

export default countryType;
