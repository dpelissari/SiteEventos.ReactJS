import React from 'react';
import GlobalStyle from './assets/css/GlobalStyle';

// components
import Menu from './components/Menu/index';
import Home from './components/Home/index';
import Sobre from './components/Sobre/index';
import Rodape from './components/Rodape/index';
import Programacao from './components/Programacao/index';
import Palestrantes from './components/Palestrantes/index';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Menu />
      <Home />
      <Sobre />
      <Programacao />
      <Palestrantes />
      <Rodape />
    </div>
  );
}

export default App;