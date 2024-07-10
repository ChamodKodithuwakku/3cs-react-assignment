import React from 'react';
import { Link } from 'react-router-dom';
import DataFetcher from './DataFetcher';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <DataFetcher />
      <Link to="/about">
        <button>Go to About Page</button>
      </Link>
    </div>
  );
};

export default Home;
