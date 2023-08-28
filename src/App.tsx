import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import { ICountry } from "./interfaces/type";

function App() {
  const [countries, setCountries] = useState<ICountry[]>([]);

  console.log(countries);

  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <HomePage countries={countries} setCountries={setCountries} />
          </Route>
          <Route path="/country/:name" component={Details} />
          <Route component={NotFound} />
        </Switch>
      </Main>
    </>
  );
}

export default App;
