/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { searchByCountry } from "../config";
import { Button } from "../components/Button";
import Info from "../components/Info";

const Details = ({ match }: any) => {
  // const { name } = useParams();
  const name = match.params.name;
  const { push, goBack } = useHistory();
  const [country, setCountry] = useState<any>(null);
  // console.log(country);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack /> Back
      </Button>

      {country && <Info push={push} {...country} />}
    </div>
  );
};

export default Details;
