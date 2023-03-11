import { QueryClientProvider } from 'react-query';

import './App.css';
import GlobalStyle from './GlobalStyle';
import Router from './Router';
import { queryClient } from './api-query/query';
import { LoaderProvider } from './contexts/LoaderContext';

const App = () => {
  return (
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
  );
}

export default App;
