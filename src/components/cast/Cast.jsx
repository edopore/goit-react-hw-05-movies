import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'utils/fetch-api';

function Cast() {
  const movieId = useParams().movieId;
  const [castInfo, setCastInfo] = useState([]);

  const addElement = newElem => {
    setCastInfo(prevElem => {
      console.log(prevElem);
      return [...prevElem, newElem];
    });
  };

  useEffect(() => {
    async function getData() {
      const data = await fetchMovieCast(movieId);
      data.map(async actor => addElement(await actor));
    }
    getData();
  }, [movieId]);

  useEffect(() => {
    return () => {};
  });
  return (
    <div>
      <ul>
        {castInfo.length > 0 ? (
          castInfo.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.photo_url}`}
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
