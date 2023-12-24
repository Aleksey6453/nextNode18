export function getFilm(id){
    return fetch(`https://swapi.tech/api/films/${id}`).then(res => res.json())
}