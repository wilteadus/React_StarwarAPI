import React, { Component } from 'react';

import FilmList from '../containers/film_list'
import Header from './header'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FilmList />
      </div>
    );
  }
}
