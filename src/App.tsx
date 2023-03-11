import './App.css';
import GlobalStyle from './GlobalStyle';
import Router from './Router';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div id="app">
      <GlobalStyle />

      <header id="header">
        <Navbar />
      </header>

      <main id="main">
        <Router />
      </main>
    </div>
  );
}

export default App;
