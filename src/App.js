import React from 'react';
import GlobalStyle from './assets/css/GlobalStyle';
import Menu from './components/Menu/index';
import Home from './components/Home/index';
import Sobre from './components/Sobre/index';
import FormularioNewsletter from './components/FormNewsletter/index';
import Programacao from './components/Programacao/index';
import Palestrantes from './components/Palestrantes/index';
import Patrocinadores from './components/Patrocinadores/index';
import Inscricoes from './components/Inscricoes/index';
import PoliticaCancelamento from './components/PoliticaCancelamento/index';
import GaleriaFotos from './components/GaleriaFotos';
import Rodape from './components/Rodape/index';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Menu />
      <Home />
      <Sobre />
      <Programacao />
      <Palestrantes />
      <Patrocinadores />
      <Inscricoes />
      <PoliticaCancelamento />
      <FormularioNewsletter />
      <GaleriaFotos />
      <Rodape />
    </div>
  );
} export default App;