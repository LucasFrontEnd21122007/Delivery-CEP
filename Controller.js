import React from 'react';
import { Link } from 'react-router-dom';
import BuscaEndereco from './BuscaEndereco';

const CadastroDelivery = () => {
  return (
    <div>
      <h1>Cadastro de Delivery</h1>
      {/* Restante do seu conteúdo */}
      <BuscaEndereco />
      {/* Exemplo de navegação para outra página */}
      <Link to="/outra-pagina">Ir para Outra Página</Link>
    </div>
  );
}

export default CadastroDelivery;
