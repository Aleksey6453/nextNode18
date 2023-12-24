export function getAllFilms(){
    return fetch('https://swapi.dev/api/films', {cache: 'no-store'}).then(res => res.json())
}