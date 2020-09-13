import React, {useState, useEffect} from 'react';
import {MoviesList} from '../components/MoviesList';
import { getTopRatedMovies } from '../services/MovieService';
import { FIRST_PAGE_ITEM, INITIAL_PAGE, INITIAL_LOADING_STATE, LAST_PAGE_ITEM, PAGE_LOADED_STATE } from '../utils/constants';

export const TopRatedMovies = () => {
    const [page, setPage] = useState(INITIAL_PAGE);
    const [isLoading, setLoading] = useState(INITIAL_LOADING_STATE);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      getTopRatedMovies(page).then(response => {
        page > INITIAL_PAGE ? 
            setData([...data.slice(FIRST_PAGE_ITEM, LAST_PAGE_ITEM), ...response.data.results]) 
            : setData(response.data.results);
        setLoading(PAGE_LOADED_STATE);
      }).catch(error => console.log(error));
    }, [page]);
  
    const handleClick = () => {
      setPage(page + 1);
    }
  
    return (
      <>
        <h1> Top Rated</h1>
        {isLoading ? <div>...loading</div> : <MoviesList movies={data} counter={page} onClick={() => handleClick()}/>}
      </>
    );
};

