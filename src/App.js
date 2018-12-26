import React, { Component } from 'react';
import MuiThemProvider from 'material-ui/styles/MuiThemeProvider';
import PersistentDrawer from './components/PersistentDrawer/PersistentDrawer.js';  
import Search from './components/search/search';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemProvider>
        <div>
          <PersistentDrawer />
        </div>
      </MuiThemProvider>
    );
  }
}

export default App;
