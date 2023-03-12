import { QueryClientProvider } from 'react-query';

import './App.css';
import GlobalStyle from './GlobalStyle';
import Router from './Router';
import { queryClient } from './api-query/query';
import { ErrorProvider } from './contexts/ErrorContext';
import { LoaderProvider } from './contexts/LoaderContext';

const App = () => {
  return (
    <ErrorProvider>
      <LoaderProvider>
        <QueryClientProvider client={queryClient}>
          <div id="app">
            <GlobalStyle />

            <main id="main">
              <Router />
            </main>
          </div>
        </QueryClientProvider>
      </LoaderProvider>
    </ErrorProvider>
  );
}

export default App;
