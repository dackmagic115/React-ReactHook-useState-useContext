import React  from 'react';
import './App.css';
import Movieslish from './components/Movielist'
import Nav from './components/Nav'
import AddMovie from './components/AddMovie'
import {MovieProvider} from './components/MovieContext'




/////////////////// React Functional Component Basic useState useContext////////////

const App = () => {
  return (
    <MovieProvider>
      <Nav/>
      <div className="App">
        <br/>
        <AddMovie/>
        <br/>
        <Movieslish/>
      </div>
    </MovieProvider>
  );
}

export default App;
