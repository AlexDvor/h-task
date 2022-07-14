import { useState } from 'react';
import { AuthContext } from 'context/authContext';
import { getTokenStorage } from 'helpers/TokenStorage';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';

//pages
import SignUpPage from 'pages/SignUpPage';
import LoginPage from 'pages/LogInPage/LoginPage';
import UserPage from 'pages/UserPage';
import './App.css';

function App() {
  const [isAuth, setAuth] = useState(false);
  const [token, setToken] = useState(getTokenStorage);

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
            path="/user"
            element={
              <PrivateRoute hasToken={token}>
                <UserPage />
              </PrivateRoute>
            }
          />

          <Route path="/*" element={<Navigate to="/user" />} />
        </Routes>
      </AuthContext.Provider>
    </>
  );
}

export default App;
