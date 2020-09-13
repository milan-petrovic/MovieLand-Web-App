import React, { useEffect, useState } from 'react';
import { PopularMovies } from './containers/PopularMovies';
import { TopRatedMovies } from './containers/TopRatedMovies';
import { UpcomingMovies } from './containers/UpcomingMovies';

const App = () => {

  return (
    <>
      <PopularMovies />
      <UpcomingMovies />
      <TopRatedMovies />
    </>
  );
}

export default App;
