import './App.css';

import { Route, Switch, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Loader from '../Loader/Loader';
import * as api from '../../utils/mainApi.js';
import * as moviesApi from '../../utils/moviesApi.js'
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectdRoute';
import ServerInfo from '../ServerInfo/ServerInfo';
import { SERVER_RESPONSE_SUCCESS, SERVER_RESPONSE_ERROR, MESSAGE_SUCCESS_REGISTRATION, MESSAGE_SUCCESS_USER_DATA_SAVED } from '../../utils/constants';
import { parceServerErrors } from '../../utils/serverErrorsParcer';

function App() {

  const history = useHistory();
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isMoviesLoaded, setMoviesLoaded] = React.useState(true);
  const [isServerInfoVisible, setServerInfoVisible] = React.useState(false);
  const [serverMessage, setServerMessage] = React.useState('');
  const [serverResponse, setServerResponce] = React.useState('');
  const [isServerLoadingData, setServerLoadingData] = React.useState(false);
  const [isAuthChecked, setIsAuthChecked] = React.useState(false);
  const [isSavedMoviesLoading, setSavedMoviesLoading] = React.useState(true);
  const [isAllMoviesLoading, setAllMoviesLoading] = React.useState(true);

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      handleCheckToken();
    } else {
      setIsAuthChecked(true);
      localStorage.clear();
    };
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      moviesApi.getMovies().then((data) => {
        setMovies(data);
        setAllMoviesLoading(false);
      })
        .catch((err) => {
          setServerMessage(err);
          setServerInfoVisible(true);
          setAllMoviesLoading(false);
        });
    }
  }, [loggedIn])

  React.useEffect(() => {
    if (loggedIn) {
      api.getSavedMovies().then((data) => {
        setSavedMovies(data);
        setSavedMoviesLoading(false);
      })
        .catch((err) => {
          setServerMessage(err);
          setServerInfoVisible(true);
          setSavedMoviesLoading(false);
        });
    }
  }, [loggedIn])

  const showServerErrorMessage = (message) => {
    setServerMessage(parceServerErrors(message));
    setServerInfoVisible(true);
    setServerResponce(SERVER_RESPONSE_ERROR);
  }

  const showServerSuccessMessage = (message) => {
    setServerMessage(message);
    setServerInfoVisible(true);
    setServerResponce(SERVER_RESPONSE_SUCCESS);
  }

  const handleRegistration = (name, email, password) => {
    setServerLoadingData(true);
    setServerInfoVisible(true);
    api.register(name, email, password).then((data) => {
      if (data) {
        handleLogin(email, password);
        showServerSuccessMessage(MESSAGE_SUCCESS_REGISTRATION);
      }
    })
      .catch((err) => {
        setServerLoadingData(false);
        showServerErrorMessage(err);
      });
  }

  const handleLogin = (email, password) => {
    api.login(email, password).then((data) => {
      if (data) {
        setServerLoadingData(false);
        localStorage.setItem('token', data.token);
        setLoggedIn(true);
        history.push('/movies-explorer-frontend/movies');
        handleCheckToken();
      }
    })
      .catch((err) => {
        setServerLoadingData(false);
        showServerErrorMessage(err);
      })
  }

  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    history.push('/movies-explorer-frontend/');
  }

  const handleCheckToken = () => {
    api.checkToken().then((data) => {
      if (data) {
        setCurrentUser(data);
        setLoggedIn(true);
        setIsAuthChecked(true);
      }
    })
      .catch((err) => {
        handleLogout();
        showServerErrorMessage(err);
        setIsAuthChecked(true);
      })
  }

  const handleUserUpdate = (name, email) => {
    setServerLoadingData(true);
    setServerInfoVisible(true);
    api.updateUser(name, email).then((data) => {
      if (data) {
        setServerLoadingData(false);
        setCurrentUser(data);
        showServerSuccessMessage(MESSAGE_SUCCESS_USER_DATA_SAVED);
      }
    })
      .catch((err) => {
        setServerLoadingData(false);
        showServerErrorMessage(err);
      })
  }

  const handleLike = (movie) => {
    api.saveMovie(movie).then((data) => {
      setSavedMovies([...savedMovies, data]);
    })
      .catch((err) => {
        showServerErrorMessage(err);
      });
  }

  const handleDelete = (movie) => {
    api.deleteMovie(movie._id).then(() => {
      setSavedMovies((state) => state.filter((m) => m._id === movie._id ? false : true));
    })
      .catch((err) => {
        showServerErrorMessage(err);
      });
  }

  return (<div className='app'>
    {!isAuthChecked
      ? <div className="app app__loader"><Loader /></div>
      : <div className="app app__main">

        <ServerInfo
          isServerInfoVisible={isServerInfoVisible}
          setServerInfoVisible={setServerInfoVisible}
          serverMessage={serverMessage}
          serverResponse={serverResponse}
          setServerResponce={setServerResponce}
          setServerMessage={setServerMessage}
          isServerLoadingData={isServerLoadingData}
        />

        <CurrentUserContext.Provider value={{
          user: currentUser,
          loggedIn,
          savedMovies
        }}>

          <Header />

          <Switch>

            <ProtectedRoute
              path='/movies-explorer-frontend/saved-movies'
              component={SavedMovies}
              handleDelete={handleDelete}
              isMoviesLoaded={isMoviesLoaded}
              setMoviesLoaded={setMoviesLoaded}
              isServerLoadingData={isSavedMoviesLoading}
            />

            <ProtectedRoute
              path='/movies-explorer-frontend/movies'
              component={Movies}
              movies={movies}
              handleLike={handleLike}
              handleDelete={handleDelete}
              isMoviesLoaded={isMoviesLoaded}
              setMoviesLoaded={setMoviesLoaded}
              isServerLoadingData={isAllMoviesLoading}
            />

            <ProtectedRoute
              path='/movies-explorer-frontend/profile'
              component={Profile}
              onUpdateUser={handleUserUpdate}
              onLogout={handleLogout}
              isServerLoadingData={isServerLoadingData}
            />

            <Route path='/movies-explorer-frontend/signup'>
              <Register
                onRegistration={handleRegistration}
                isServerLoadingData={isServerLoadingData}
              />
            </Route>

            <Route path='/movies-explorer-frontend/signin'>
              <Login
                onLogin={handleLogin}
                isServerLoadingData={isServerLoadingData} />
            </Route>

            <Route exact path='/movies-explorer-frontend/'>
              <Main />
            </Route>

            <Route path='*'>
              <PageNotFound />
            </Route>

          </Switch>

          <Footer />

        </CurrentUserContext.Provider>
      </div>
    }
  </div>
  );
}

export default App;
