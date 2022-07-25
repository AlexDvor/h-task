import { Navigate } from 'react-router-dom';

export default function PublicRoute({ children, hasToken }) {
  return hasToken ? <Navigate to="/users" replace /> : children;
}
