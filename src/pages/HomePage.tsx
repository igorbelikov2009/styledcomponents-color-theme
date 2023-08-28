/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect, FC } from "react";
import Controls from "../components/Controls";
import List from "../components/List";
import Card from "../components/Card";
import { ALL_COUNTRIES } from "../config";
import { useHistory } from "react-router-dom";
import { ICountry } from "../interfaces/type";

interface HomePageProps {
  countries: ICountry[];
  setCountries: React.Dispatch<React.SetStateAction<ICountry[]>>;
}

const HomePage: FC<HomePageProps> = ({ countries, setCountries }) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState<any>("");

  const [filtredCountries, setFiltredCountries] = useState(countries);
  // console.log(filtredCountries);
  const { push } = useHistory();

  // К нам приходит "search" из строки поиска и какой-то "region" из селектора
  const handleSearch = (search: any, region: any) => {
    // Изначальные данные "data" - все страны
    let data = [...countries];

    // Дальше, если есть "region", то делаем фильтрацию по региону.
    if (region) {
      // data.filter возьми каждую страну, возьми, полученный в ней, "region" и проверь:
      // содержит ли он тот регион, который был выбран.
      data = data.filter((country) => country.region.includes(region));
    }

    // Если есть поисковая строка "search", то делаем фильтр ещё и по ней. data могла уже
    // измениться, могла не измениться, делаем фильтр по тому, что ввёл пользователь.
    if (search) {
      // data.filter возьми каждую страну, возьми её оригинальное название, приведи его к
      // нижнему регистру, проверь includes, и смотри, что поисковая строка маленького
      // регистра есть в составе оригинального названия.
      data = data.filter((country) => country.name.toLowerCase().includes(search.toLowerCase()));
    }
    // Получаем усечённый вариант нашего набора стран, и именно его сохраним
    setFiltredCountries(data);
  };

  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }
  }, [countries.length, setCountries]);

  useEffect(() => {
    handleSearch(search, region);
  }, [countries, handleSearch, region, search]);

  useEffect(() => {
    // console.log(region);
    // Подготовим даные: получаем либо значение селектора, либо пустую строку
    const regionValue = region?.value || "";
    handleSearch(search, regionValue);
  }, [handleSearch, region, search]);

  return (
    <>
      <Controls search={search} setSearch={setSearch} region={region} setRegion={setRegion} />

      <List>
        {filtredCountries.map((country: any) => {
          const countryInfo = {
            img: country.flags.png,
            name: country.name,
            info: [
              {
                title: "Population",
                description: country.population.toLocaleString(),
              },
              {
                title: "Region",
                description: country.region,
              },
              {
                title: "Capital",
                description: country.capital,
              },
            ],
          };

          return (
            <Card
              key={country.name}
              onClick={() => {
                push(`/country/${country.name}`);
              }}
              {...countryInfo}
            />
          );
        })}
      </List>
    </>
  );
};

export default HomePage;
