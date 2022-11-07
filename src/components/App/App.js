import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <div className="app">

      <Header />

      <Switch>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>

      <Footer />
      
    </div>
  );
}

export default App;
