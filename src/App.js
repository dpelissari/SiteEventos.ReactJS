import React from 'react';
import GlobalStyle from './assets/css/GlobalStyle';

// components
import Menu from './components/Menu/index';
import Slider from './components/Slider/index';
import Sobre from './components/Sobre/index';
import Rodape from './components/Rodape/index';
import Programacao from './components/Programacao';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Menu />
      <Slider />
      <Sobre />
      <Programacao />
      <Rodape />
    </div>
  );
}

export default App;