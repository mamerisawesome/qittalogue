import { QueryClientProvider } from 'react-query';

import './App.css';
import GlobalStyle from './GlobalStyle';
import Router from './Router';
import { queryClient } from './api-query/query';
import Navbar from './components/Navbar';
import { LoaderProvider } from './contexts/LoaderContext';

const App = () => {
  return (
    <LoaderProvider>
      <QueryClientProvider client={queryClient}>
        <div id="app">
          <GlobalStyle />

          <header id="header">
            <Navbar />
          </header>

          <main id="main">
            <Router />
          </main>
        </div>
      </QueryClientProvider>
    </LoaderProvider>
  );
}

export default App;
