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
export const readPeople = () => PeopleResource.read(cache);

const PersonResource = createResource(
    async (id: string) => await getPerson(id)
);
export const readPerson = (id: string) => PersonResource.read(cache, id);
export const preloadPerson = (id: string) => PeopleResource.preload(cache, id);

/** PLANETS */
const PlanetsResource = createResource(async () => await getPlanets());
export const readPlanets = () => PlanetsResource.read(cache);

const PlanetResource = createResource(
    async (id: string) => await getPlanet(id)
);
export const readPlanet = (id: string) => PlanetResource.read(cache, id);

/** STARSHIPS */
const StarshipsResource = createResource(async () => await getStarShips());
export const readStarships = () => StarshipsResource.read(cache);

const StarshipResource = createResource(
    async (id: string) => await getStarShip(id)
);
export const readStarship = (id: string) => StarshipResource.read(cache, id);
