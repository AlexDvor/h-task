import { Navigate } from 'react-router-dom';

export default function PublicRoute({ children, hasToken }) {
  //   return <Route {...routeProps}>{shouldRedirect ? <Redirect to={redirectTo} /> : children}</Route>;
  return hasToken ? <Navigate to="/user" replace /> : children;
}
