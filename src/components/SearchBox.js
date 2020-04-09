import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash/debounce';

import { fetchHeroes } from '../store';

import spinner from '../assets/spinner.gif'
import './styles/SearchBox.style.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(({ loading }) => ({ loading }))
  const handleChange = useCallback(debounce((query) => dispatch(fetchHeroes(query)), 400), [])

  return (
    <div className="hero search-box">
      <input
        type="text"
        placeholder="Search DC Heroes"
        onChange={e => handleChange(e.target.value)}
      />
      <img src={spinner} alt="" className={loading ? 'show' : 'hide'} />
    </div>
  );
}

export default SearchBox;
