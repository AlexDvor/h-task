import { useState, useEffect } from 'react';
import { AuthContext } from 'context/authContext';
import { authState } from 'helpers/authState';
import { Routes, Route, Navigate } from 'react-router-dom';

import { getCurrentUser } from 'services/auth';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';
import './App.css';

import SignUpPage from 'pages/SignUpPage';
import LoginPage from 'pages/LogInPage/LoginPage';
import UserPage from 'pages/UserPage';

function App() {
  const [isAuth, setAuth] = useState(authState.isAuthenticated);
  const [token, setToken] = useState(authState.token);
  const [isFetchingUser, setIsFetchingUser] = useState(false);

  useEffect(() => {
    const refreshCurrentUser = async () => {
      setIsFetchingUser(true);
      const response = await getCurrentUser();
      if (response) {
        setAuth(true);
        setToken(authState.token);
        setIsFetchingUser(false);
      } else {
        setAuth(false);
        setToken('');
        setIsFetchingUser(false);
      }
    };
    refreshCurrentUser();
  }, []);

  return (
    <>
      {!isFetchingUser && (
        <AuthContext.Provider value={{ isAuth, setAuth, token, setToken }}>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />

            <Route
              path="/login"
              element={
                <PublicRoute hasToken={token} restricted>
                  <LoginPage />
                </PublicRoute>
              }
            />

            <Route
              path="/signup"
              element={
                <PublicRoute hasToken={token} restricted>
                  <SignUpPage />
                </PublicRoute>
              }
            />

            <Route
              path="/users"
              element={
                <PrivateRoute hasToken={token} isAuth={isAuth}>
                  <UserPage />
                </PrivateRoute>
              }
            />

            <Route path="/*" element={<Navigate to="/users" />} />
          </Routes>
        </AuthContext.Provider>
      )}
    </>
  );
}

export default App;
