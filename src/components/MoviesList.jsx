import React, {useState, useEffect} from 'react';

export const MoviesList = ({ movies, counter, onClick }) => {

    return(
        <>
        <ul>
            {movies.map((movie, index) => {
                return <li key={index}>{movie.title}</li>
            })}
        </ul>
        <button onClick={onClick}>Load more</button>
        </>
    );
}