import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>You have 8 points</h2>
        </div>
        <QrCamera />
      </div>
    );
  }
}
