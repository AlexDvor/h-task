import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ hasToken, children, isAuth }) {
  const isAuthenticated = hasToken && isAuth;
  return !isAuthenticated ? <Navigate to="/login" replace /> : children;
}
