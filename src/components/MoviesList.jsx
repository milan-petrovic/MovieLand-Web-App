import React, {useState, useEffect} from 'react';

export const MoviesList = ({ movies, onClick }) => {

    return(
        <>
            {movies.map((movie, index) => {
                return <MovieListItem movie={movie} key={index}/>
            })}
            <button onClick={onClick} style={{border: '1px solid blue', width: 100, height: 50, backgroundColor: 'white'}}>Load more</button>
        </>
    );
}

export const MovieListItem = ({movie}) => (
    <div style={{border: '1px solid black', width: 300, height: 100, marginTop: '8px', marginBottom: '8px', padding: '8px'}}>
        <p>Title: {movie.title}</p>
        <p>Votes: {movie.vote_count}</p>
    </div>
);