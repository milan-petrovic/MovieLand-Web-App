import React, {useState, useEffect} from 'react';
import {MoviesList} from '../components/MoviesList';
import { getUpcomningMovies } from '../services/MovieService';

export const UpcomingMovies = (props) => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
  
    useEffect(() => {
      getUpcomningMovies(page).then(response => {
        if (page > 1 ) {
          setData([...data.slice(1,20), ...response.data.results]);
        } else {
          setData(response.data.results);
        }
        setLoading(false);
      }).catch(error => console.log(error));
    }, [page]);
  
    const handleClick = () => {
      setPage(page + 1);
    }
  
    return (
      <>
      <h1> Upcoming </h1>
        {isLoading ? <div>...loading</div> : <MoviesList movies={data} counter={page} onClick={() => handleClick()}/>}
      </>
    );
};

