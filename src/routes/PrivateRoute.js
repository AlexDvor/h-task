import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ hasToken, children }) {
  //   if (!hasToken) {
  //     return <Navigate to="/login" replace />;
  //     }

  //     return children;

  return !hasToken ? <Navigate to="/login" replace /> : children;
}
