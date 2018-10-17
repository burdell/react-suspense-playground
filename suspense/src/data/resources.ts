import * as simpleCacheProvider from "simple-cache-provider";

import {
    getPeople,
    getPerson,
    getPlanets,
    getPlanet,
    getStarShips,
    getStarShip
} from "./api";
import { cache } from "./cache";

const { createResource } = simpleCacheProvider;

/** PEOPLE */
const PeopleResource = createResource(async () => await getPeople());
export const fetchPeople = () => PeopleResource.read(cache);

const PersonResource = createResource(
    async (id: string) => await getPerson(id)
);
export const fetchPerson = (id: string) => PersonResource.read(cache, id);

/** PLANETS */
const PlanetsResource = createResource(async () => await getPlanets());
export const fetchPlanets = () => PlanetsResource.read(cache);

const PlanetResource = createResource(
    async (id: string) => await getPlanet(id)
);
export const fetchPlanet = (id: string) => PlanetResource.read(cache, id);

/** STARSHIPS */
const StarshipsResource = createResource(async () => await getStarShips());
export const fetchStarships = () => StarshipsResource.read(cache);

const StarshipResource = createResource(
    async (id: string) => await getStarShip(id)
);
export const fetchStarship = (id: string) => StarshipResource.read(cache, id);
