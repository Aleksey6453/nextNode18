import { getAllFilms } from "../actions/getAllFilms"

export default async function FilmsPage(){

    const allFilms = await getAllFilms()

    return(
        <div>
           {allFilms.results.map(film => (
                <div key={film.url}>
                    {film.title}
                </div>
           ))}
        </div>
    )
}