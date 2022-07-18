import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function Providers({ children }) {
  return (
    <>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>{children}</BrowserRouter>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ThemeProvider>
      <ToastContainer autoClose={3000} />
    </>
  );
}
