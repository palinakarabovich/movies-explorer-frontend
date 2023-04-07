import React from "react";
import { Route, Redirect } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const { loggedIn } = React.useContext(CurrentUserContext);
  return (
    <Route>
      {() =>
        loggedIn ? <Component {...props} /> : <Redirect to='/movies-explorer-frontend/' />
      }
    </Route>
  );
};

export default ProtectedRoute; 