import { useState } from 'react';
import { AuthContext } from 'context/authContext';
import LoginPage from 'pages/LogInPage/LoginPage';
import { getTokenStorage } from 'helpers/TokenStorage';
import './App.css';

function App() {
  const [isAuth, setAuth] = useState(false);
  const [token, setToken] = useState(getTokenStorage);

  return (
    <>
      <AuthContext.Provider value={{ isAuth, setAuth, token, setToken }}>
        <LoginPage />
      </AuthContext.Provider>
    </>
  );
}

export default App;
