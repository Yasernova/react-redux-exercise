import React from 'react';
import { useSelector } from 'react-redux';

import Hero from './Hero';

import './styles/HeroesList.style.css'

const HeroList = () => {
  const { heroes, loading } = useSelector(({ heroes, loading }) => ({ heroes, loading }))
  return (
    <div className="heroes-list">
      {heroes.map((hero, ndx, arr) => <Hero hero={hero} key={hero.name} isLast={ndx === arr.length - 1} />)}
      {!heroes.length && !loading && <Hero hero={{ name: 'Kent Thurston', alias: `@Invesible Man 👻` }} isLast />}
    </div>
  );
}

export default HeroList;
