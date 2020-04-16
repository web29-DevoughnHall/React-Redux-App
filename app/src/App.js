import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShibeImage from './components/ShibeImage'
import { Button } from '@material-ui/core';

function App() {
  function handleRefresh() {
    window.location.reload(false);
  }
  
  return (
    <div className="App">
      <h1>Welcome Brethren</h1>
      <ShibeImage />
      <Button color="primary" onClick={handleRefresh}>Click to get new image!</Button>
    </div>
  );
}

export default App;
