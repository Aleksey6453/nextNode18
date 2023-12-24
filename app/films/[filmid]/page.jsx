import { getAllFilms } from "@/app/actions/getAllFilms";
import { getFilm } from "@/app/actions/getFilm";

export default async function Film({filmId}){
    const film = await getFilm(filmId)

    return(
        <div>
            <h1 className="title">
                {film.result.properties.title}
            </h1>
        </div>
    )
}

export async function generateStaticParams(){
    const films = await getAllFilms()

    return(
        films.result.map((film) => ({
            filmId: film.uid
        }) )
    )
}