import React, { memo } from 'react';

import './styles/Hero.style.css'

const Hero = ({ hero: { name, alias }, isLast }) => {
  return (
    <div className={`hero ${isLast ? 'last' : ''}`}>
      <p>
        {name}
        <span>{alias}</span>
      </p>
    </div>
  );
}

export default memo(Hero);
