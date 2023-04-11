import React from "react";
import {Title,NameContainer,PostContainer } from './style'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'
import { useCapturarPostagens } from "./hooks/useGetPostagens";
import { useRequestDatas } from "./hooks/useRequestDatas";
import { BASE_URL } from "./constants/constants";





function App() {
  const [postagens, isLoadingPostagem, isErrorPostagem] = useRequestDatas(`${BASE_URL}comments`, [])

  const [nomeUsuarios, isLoadingNome, isErrorNome] = useRequestDatas("https://hp-api.onrender.com/api/characters", [])


 const renderNome = nomeUsuarios.map((usuario) => {
  return(
  <Card 
  key={usuario.id} 
  text={usuario.name} 
  backgroudColor={'nome'}
  textColor={'nome'}
  />)
})

const renderPostagem = postagens.map((post) => {
  //console.log(post);
  return(
    <Card 
    key={post.id} 
    text={post.body} 
    backgroudColor={'#1dc690'}
    textColor={'#ffffff'}
    />)
})

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Title>Nomes dos usuários</Title>
      <NameContainer>
        {isLoadingNome && <p>Carregando...</p>}
        {!isLoadingNome && isErrorNome && <p>Ocorreu um erro com sua solicitação</p>}
        {!isLoadingNome && !nomeUsuarios.length && <p>Nenhum nome encontrado!</p>}
        {!isLoadingNome && nomeUsuarios.length > 0 && renderNome}
      </NameContainer>

      <hr />
      <Title>Comentários dos usuários</Title>
      <PostContainer>
        {isLoadingPostagem && <p>Carregando...</p>}
        {!isLoadingPostagem && isErrorPostagem && <p>Ocorreu um erro com sua solicitação</p>}
        {!isLoadingPostagem && !postagens.length && <p>Nenhum comentário encontrado!</p>}
        {!isLoadingPostagem && postagens.length > 0 && renderPostagem}
      </PostContainer>
    </div>
  );
}

export default App;



