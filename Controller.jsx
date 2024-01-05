import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CadastroDelivery from './CadastroDelivery';
import OutraPagina from './OutraPagina';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CadastroDelivery} />
        <Route path="/outra-pagina" component={OutraPagina} />
      </Switch>
    </Router>
  );
}

export default App;