import axios from "axios";

import { Planet, Person, Starship, Species, Vehicle, Film } from "../types";

const api = axios.create({
    baseURL: "https://swapi.co/api"
});

const limit = 50;

// ** PLANETS ** //
export async function getPlanets(): Promise<Planet[]> {
    const planets = await api.get(`/planets`);
    return planets.data.results.slice(0, limit) as Planet[];
}
export async function getPlanet(id: string): Promise<Planet> {
    const planet = await api.get(`/planets/${id}`);
    return planet.data as Planet;
}

// *** STARSHIPS *** //
export async function getStarShips(): Promise<Starship[]> {
    const ships = await api.get(`/starships`);
    return ships.data.results.slice(0, limit) as Starship[];
}
export async function getStarShip(id: string): Promise<Starship> {
    const ship = await api.get(`/starships/${id}`);
    return ship.data as Starship;
}

// ** PEOPLE ** /
export async function getPeople(): Promise<Person[]> {
    const people = await api.get(`/people`);
    return people.data.results.slice(0, limit) as Person[];
}
export async function getPerson(id: string): Promise<Person> {
    const people = await api.get(`/people/${id}`);
    return people.data as Person;
}

// ** SPECIES ** //
export async function getSpecies(): Promise<Species[]> {
    const species = await api.get(`/species`);
    return species.data.results.slice(0, limit) as Species[];
}
export async function getSpecie(id: string): Promise<Species> {
    const species = await api.get(`/species/${id}`);
    return species.data as Species;
}

// *** VEHICLES *** //
export async function getVehicles(): Promise<Vehicle[]> {
    const vehicles = await api.get(`/vehicles`);
    return vehicles.data.results.slice(0, limit) as Vehicle[];
}
export async function getVehicle(id: string): Promise<Vehicle> {
    const vehicles = await api.get(`/vehicles/${id}`);
    return vehicles.data as Vehicle;
}

// ** FILMS ** //
export async function getFilms(): Promise<Film[]> {
    const films = await api.get(`/films`);
    return films.data.results.slice(0, limit) as Film[];
}
export async function getFilm(id: string): Promise<Film> {
    const film = await api.get(`/films/${id}`);
    return film.data as Film;
}
