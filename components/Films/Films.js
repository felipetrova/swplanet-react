import { useState, useEffect, useCallback } from "react";

import * as GridStyle from "~/styles/Grid";
import * as Style from './FilmsStyle';

import LoadingComponent from "~/components/Loading/Loading";

import API from "~/Services/Api";

const Films = (props) => {
  const [film, setFilm] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const loadFilms = useCallback(async () => {
    console.log(props);

    const filmId = props.info.split("https://swapi.co/api/films/");

    try {
      setErrorMsg("");
      setLoading(true);
      const response = await API.get(`films/${filmId[1]}`);

      console.log(response);

      setFilm(response.data);

      if (response.data.length === 0) {
        setErrorMsg("Não encontramos nenhuma starship. Tente novamente.");
      }
    } catch (error) {
      setErrorMsg("Não encontramos nenhuma starship. Tente novamente.");
    }

    setLoading(false);
  });

  useEffect(() => {
    loadFilms();
  }, []);

  return (
    <>
      {loading && <LoadingComponent />}

      {(errorMsg || film.length === 0) && (
        <div className="flex align-itcenter cont-center h-75vh">
          <p>{errorMsg}</p>
        </div>
      )}

      <Style.Films className="mb-10px">
        <GridStyle.Row>
          <GridStyle.Col general={12}>
            <p>
              {film}
            </p>
          </GridStyle.Col>
        </GridStyle.Row>
      </Style.Films>
    </>
  );
};

export default Films;
