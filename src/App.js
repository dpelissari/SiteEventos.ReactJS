import React from 'react';
import GlobalStyle from './assets/css/GlobalStyle';

// components
import Menu from './components/Menu/index';
import Slider from './components/Slider/index';
import Sobre from './components/Sobre/index';
import Rodape from './components/Rodape/index';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Menu />
      <Slider />
      <Sobre />
    
      <Rodape />
    </div>
  );
}

export default App;