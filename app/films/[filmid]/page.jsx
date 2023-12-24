import { getFilm } from "@/app/actions/getFilm";

export default async function Film({filmId}){
    const film = await getFilm(filmId)

    console.log(film)

}