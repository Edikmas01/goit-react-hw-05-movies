import { Link } from "react-router-dom"

export const MoviesList = ({ movies }) => {
    return (
        <ul>
            {movies.map(movie => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                    <li>{movie.title}</li>
                </Link>
            ))
            }
        </ul>
    )
}