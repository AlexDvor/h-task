import { Navigate } from 'react-router-dom';

export default function PublicRoute({ children, isAuth }) {
  return isAuth ? <Navigate to="/users" /> : children;
}
