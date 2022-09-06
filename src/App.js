import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import MoviePage from './components/MoviePage/MoviePage';
import Person from './components/Person/Person';
import Top from './components/Top/Top';
import Premieres from './components/Premieres/Premieres';

function App() {
  const {id} = useSelector(({movieId}) => movieId);
  const {staffId} = useSelector(({movieId}) => movieId);
  const {activeLink} = useSelector(({header}) => header);

  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Main />} exact/>
          <Route path={`/films/${id}`} element={<MoviePage />} exact/>
          <Route path={`/staff/${staffId}`} element={<Person staffId={staffId}/>} exact/>
          <Route path={activeLink} element={activeLink !== `/premieres` 
            ? <Top activeLink={activeLink}/>
            : <Premieres activeLink={activeLink}/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;