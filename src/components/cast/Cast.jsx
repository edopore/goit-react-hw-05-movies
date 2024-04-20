import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActorPhoto, fetchMovieCast } from 'utils/fetch-api';

function Cast() {
  const movieId = useParams().movieId;
  const [castInfo, setCastInfo] = useState([]);
  useEffect(() => {
    fetchMovieCast(movieId)
      .then(cast => setCastInfo(cast))
      .catch(error => console.error(error));
  }, [movieId]);
  return (
    <div>
      <ul>
        {castInfo.length > 0 ? (
          castInfo.map(actor => (
            <li key={actor.id}>
              <img
                src={'https://api.themoviedb.org/3/person/'}
                alt={actor.actor}
                width="250px"
              />
              <p>{actor.actor}</p>
              <p>{actor.character}</p>
            </li>
          ))
        ) : (
          <h3>There's no cast info available</h3>
        )}
      </ul>
    </div>
  );
}

export default Cast;
