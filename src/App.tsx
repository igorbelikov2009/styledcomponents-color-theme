/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Controls from "./components/Controls";
import axios from "axios";
import { ALL_COUNTRIES } from "./config";
import List from "./components/List";
import Card from "./components/Card";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  console.log(countries);

  return (
    <>
      <Header />
      <Main>
        {/* <Routes>
          <Route path="/"></Route>
          <Route />
          <Route />
        </Routes> */}
        <Controls onSearch={() => console.log("OK")} />

        <List>
          {countries.map((country: any) => {
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

            // ниже функцию push тайпскрипт сам добавил
            function push(arg0: string) {
              throw new Error("Function not implemented.");
            }

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
      </Main>
    </>
  );
}

export default App;
