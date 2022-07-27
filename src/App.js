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
      try {
        setIsFetchingUser(true);
        await getCurrentUser();
        setAuth(true);
        setToken(authState.token);
      } catch (error) {
        setAuth(false);
        setToken(null);
      } finally {
        setIsFetchingUser(false);
      }
    };

    refreshCurrentUser();
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ isAuth, setAuth, token, setToken }}>
        {!isFetchingUser && (
          <>
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />

              <Route
                path="/login"
                element={
                  <PublicRoute isAuth={isAuth} restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />

              <Route
                path="/signup"
                element={
                  <PublicRoute isAuth={isAuth} restricted>
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
          </>
        )}
      </AuthContext.Provider>
    </>
  );
}

export default App;
