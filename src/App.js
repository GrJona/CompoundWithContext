import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CheckBox from './CheckBox';

class App extends Component {
  render() {
    return (
      <div className="checkbox">
        <CheckBox>
          <CheckBox.CheckBoxButton />
          <CheckBox.Checked>Cb is Checked</CheckBox.Checked>
          <CheckBox.UnChecked>Cb is UnChecked</CheckBox.UnChecked>
        </CheckBox>
      </div>
    );
  }
}

export default App;
