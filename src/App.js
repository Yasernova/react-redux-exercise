import React from "react";
import { Provider } from 'react-redux'

import './App.css'

import SearchableHeroes from "./components/SearchableHeroes";
import store from "./store";

const App = () => <Provider store={store}><SearchableHeroes /></Provider>;

export default App;
