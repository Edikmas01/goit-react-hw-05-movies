export const Cast = ({ cast }) => {
  
return (
  <ul>
    {cast.map(item => (
      <li>
          <img
            src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
            alt="Actor photo"
          />
          <p> {item.name}</p>
          <p> {item.character}</p>
      </li>
    ))}
  </ul>
);
} 
