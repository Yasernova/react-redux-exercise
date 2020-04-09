import React from 'react';
import SearchBox from './SearchBox';
import HeroesList from './HeroesList';

import './styles/SearchableHeroes.style.css'

const SearchableHeroes = () => {
  return (
    <div className="container">
      <SearchBox />
      <HeroesList />
    </div>
  );
}

export default SearchableHeroes;
