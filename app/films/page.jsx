import { getAllFilms } from "../actions/getAllFilms"
import Link from "@/node_modules/next/link"

export default async function FilmsPage(){

    const allFilms = await getAllFilms()

    return(
        <div className="wrapPage">
            <h2 className="title">List of films:</h2>
            <ul>
                {allFilms.result.map(film => (
                    <li key={film.uid} className='li'>
                        <Link href={`/films/${film.uid}`}>
                           {film.uid} {film.properties.title}
                        </Link> 
                    </li>
                ))}
            </ul>
           
        </div>
    )
}