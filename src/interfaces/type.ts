export interface IOption {
  value: string;
  label: string;
}

export interface Info {
  title: string;
  description: string;
}

export interface CardProps {
  img: string;
  name: string;
  info: Info[];
  onClick: () => void;
}

export interface ICountry {
  flags: {};
  name: string;
  population: string;
  region: any;
  capital: string;
}

export interface InfoProps {
  name: string;
  nativeName: string;
  flag: string;
  capital: string;
  population: string;
  region: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: any[];
  languages: any[];
  borders: string[];
  push: any;
}
