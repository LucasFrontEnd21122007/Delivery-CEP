function buscarEndereco() {
    const cep = document.getElementById('cep').value;
  
    if (cep.length === 8) {
      const url = `https://viacep.com.br/ws/${cep}/json/`;
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (!data.erro) {
            document.getElementById('logradouro').value = data.logradouro;
            document.getElementById('bairro').value = data.bairro;
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('estado').value = data.uf;
          } else {
            alert('CEP não encontrado. Por favor, verifique e tente novamente.');
          }
        })
        .catch(error => {
          console.error('Erro na busca por CEP:', error);
          alert('Ocorreu um erro na busca por CEP. Por favor, tente novamente.');
        });
    } else {
      alert('Por favor, insira um CEP válido.');
    }
  }  