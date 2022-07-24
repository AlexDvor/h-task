import { useState, useEffect } from 'react';
import { AuthContext } from 'context/authContext';
import { getTokenStorage } from 'helpers/TokenStorage';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getCurrentUser } from 'services/auth';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';
import './App.css';

import SignUpPage from 'pages/SignUpPage';
import LoginPage from 'pages/LogInPage/LoginPage';
import UserPage from 'pages/UserPage';

function App() {
  const [isAuth, setAuth] = useState(false);
  const [token, setToken] = useState(getTokenStorage);

  useEffect(() => {
    const refreshCurrentUser = async () => {
      const response = await getCurrentUser();
      if (!response) {
        setToken('');
        setAuth(false);
      }
    };

    if (token) {
      refreshCurrentUser();
    }
  }, [token]);

  return (
    <>
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

          <Route path="/signup" element={<SignUpPage />} />

          <Route
            path="/users"
            element={
              <PrivateRoute hasToken={token}>
                <UserPage />
              </PrivateRoute>
            }
          />

          <Route path="/*" element={<Navigate to="/users" />} />
        </Routes>
      </AuthContext.Provider>
    </>
  );
}

export default App;
