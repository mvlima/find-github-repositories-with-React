import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function Home(props) {
  const history = useHistory();
  const [ usuario, setUsuario ] = useState('');
  const [ erro, setErro ]= useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((repository) => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        history.push('/repositories');
      })
      .catch(err => {
        setErro(true);
      });
    
  }

  return (
    // Não é HTML, é JSX
    // <> e </> são 'fragments', utilizados para conter vários elementos para serem retornados sem que estejam dentro de uma tag específica (no react só se pode retornar um elemento)
    // Class é uma palavra reservada em JS, então usa-se className em JSX, que é a mesma coisa de 'class' no HTML
    // 'onChange' captura qualquer alteração dentro desse elemento
    // O status possui sempre as informações atuais e é a única fonte verdadeira de informação
    // Por isso, o input deve pegar o valor diretamente do state
    // Tudo que for utilizado que possua valor JS, utiliza-se {}
    // Sempre que se faz uma função que vá lidar com alguma coisa, utiliza-se 'handle's
    <S.HomeContainer>
      <S.Content>
        <S.Input className="usuarioInput" placeholder="Usuario" value = {usuario} onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      { erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : '' }
    </S.HomeContainer>
  );
}

export default Home;