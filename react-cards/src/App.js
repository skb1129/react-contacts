import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ListMyCards from './ListMyCards';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <ListMyCards />
      </MuiThemeProvider>
    );
  }
}

export default App;
