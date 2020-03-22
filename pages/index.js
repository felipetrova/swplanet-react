import { useState, useEffect, useCallback } from "react";

import * as GridStyle from "~/styles/Grid";

import HeaderComponent from "~/components/Header/Header";
import LoadingComponent from "~/components/Loading/Loading";
import PlanetComponent from "~/components/Planet/Planet";

import API from "~/Services/Api";

const Index = () => {
  const [planet, setPlanet] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const loadPlanet = useCallback(async () => {
    try {
      setLoading(true);
      setErrorMsg("");

      const idPlanet = Math.floor(Math.random() * 60);

      const response = await API.get(`planets/${idPlanet}/`);
      console.log(response);

      setPlanet(response.data);

      if (response.data.length === 0) {
        setErrorMsg("Nenhum planeta encontrado. Favor tentar novamente.");
      }
    } catch (error) {
      setErrorMsg("Nenhum planeta encontrado. Favor tentar novamente.");
    }

    setLoading(false);
  });

  function changePlanet() {
    loadPlanet();
  }

  useEffect(() => {
    loadPlanet();
  }, []);

  return (
    <>
      {loading && <LoadingComponent />}

      <HeaderComponent
        link="/"
        title={"Star Wars Planet API"}
      />

      <div className="mt-85px">
        {(errorMsg || planet.length === 0) && (
          <div className="flex align-itcenter cont-center h-75vh">
            <p>{errorMsg}</p>
          </div>
        )}
        
        <GridStyle.Container>
          <GridStyle.Row>
            <GridStyle.Col mobile={12} tablet={6} general={4}>
              <PlanetComponent
                name={planet.name}
                climate={planet.climate}
                terrain={planet.terrain}
                population={planet.population}
                films={planet.films}
                changePlanet={e => changePlanet(planet.url, e)}
              />
            </GridStyle.Col>
          </GridStyle.Row>
        </GridStyle.Container>
      </div>
    </>
  );
};

export default Index;
