import React, {useState} from 'react';
import { Router } from '@reach/router';
import { ThemeProvider } from 'styled-components';
import Home from './views/Home';

import './App.css';
import NewBroLinks from './views/NewBroLinks';



function App() {
const [theme, setTheme] = useState({mode: 'light'})

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <React.Fragment>
          <Router>
            <Home path="/"/>
            <NewBroLinks path='/NewBroLinks'/>
          </Router>
      </React.Fragment>
      </div>
    </ThemeProvider>
  );
}

export default App;
