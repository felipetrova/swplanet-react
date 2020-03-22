import { useEffect } from "react";

import * as GridStyle from "~/styles/Grid";
import * as Style from './PlanetStyle';

import ButtonComponent from '~/components/Button/Button';
/* import FilmComponent from '~/components/Films/Films'; */

const Planet = (props) => {

  const {
    name,
    climate,
    terrain,
    population,
  } = props;

  /* const films = [props.films]; */

  useEffect(() => {
  }, []);

  return (
    <>
      <Style.Planet className="mb-10px">
        <GridStyle.Row>
          <GridStyle.Col general={12}>
            <p>
              <strong>
                Planet Name: {" "}
              </strong>
              {name}
            </p>
          </GridStyle.Col>
        </GridStyle.Row>

        <GridStyle.Row>
          <GridStyle.Col mobile={12} tablet={4} general={4}>
            <p>
              <strong>
                Climate: {" "}
              </strong>
              {climate}
            </p>
          </GridStyle.Col>

          <GridStyle.Col mobile={12} tablet={4} general={4}>
            <p>
              <strong>
                Terrain: {" "}
              </strong>
              {terrain}
            </p>
          </GridStyle.Col>

          <GridStyle.Col mobile={12} tablet={4} general={4}>
            <p>
              <strong>
                Population: {" "}
              </strong>
              {population}
            </p>
          </GridStyle.Col>
        </GridStyle.Row>

        {/* <GridStyle.Row>
          <GridStyle.Col general={12}>
            {films.map((item, index) =>
              <FilmComponent
                key={index + 1}
                info={item}
              />
            )}
          </GridStyle.Col>
        </GridStyle.Row> */}

        <GridStyle.Row>
          <GridStyle.Col general={12}>
            <ButtonComponent
              txt={'Change Planet'}
              className="fn-s18px tx-white br-10px h-52px w-100 mb-20px fn-wb"
              onClick={() => props.changePlanet()}
            />
          </GridStyle.Col>
        </GridStyle.Row>
      </Style.Planet>
    </>
  );
};

export default Planet;
