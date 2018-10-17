import axios from "axios";

import { Planet, Person, Starship, Species, Vehicle, Film } from "../types";

const api = axios.create({
    baseURL: "https://swapi.co/api"
});

const limit = 50;
const DEFAULT_THROTTLE = 2000;
const sleep = (data: any, throttle = DEFAULT_THROTTLE) =>
    new Promise(resolve => {
        setTimeout(() => resolve(data), throttle);
    });

// ** PLANETS ** //
export async function getPlanets(): Promise<Planet[]> {
    const planets = await api.get(`/planets`);
    return sleep(planets.data.results.slice(0, limit)) as Promise<Planet[]>;
}
export async function getPlanet(id: string): Promise<Planet> {
    const planet = await api.get(`/planets/${id}`);
    return sleep(planet.data) as Promise<Planet>;
}

// *** STARSHIPS *** //
export async function getStarShips(): Promise<Starship[]> {
    const ships = await api.get(`/starships`);
    return sleep(ships.data.results.slice(0, limit)) as Promise<Starship[]>;
}
export async function getStarShip(id: string): Promise<Starship> {
    const ship = await api.get(`/starships/${id}`);
    return sleep(ship.data) as Promise<Starship>;
}

// ** PEOPLE ** /
export async function getPeople(): Promise<Person[]> {
    const people = await api.get(`/people`);
    return sleep(people.data.results.slice(0, limit)) as Promise<Person[]>;
}
export async function getPerson(id: string): Promise<Person> {
    const people = await api.get(`/people/${id}`);
    return sleep(people.data) as Promise<Person>;
}
