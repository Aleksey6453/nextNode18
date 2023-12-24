export function getAllFilms(){
    return fetch('https://swapi.tech/api/films').then(res => res.json())
}