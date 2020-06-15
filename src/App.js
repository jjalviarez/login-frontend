import React, { useState } from 'react';
//import logo from './logo.svg';
import Routes from "./route/route.js";


function App() {
  const [nameApp, setNameApp] = useState('Login-Test')

  return (
    <Routes
      name={nameApp}
    />
  );
}

export default App;
