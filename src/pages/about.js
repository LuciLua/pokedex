import React from "react";
import styles from "../styles/Home.module.css";
import Link from 'next/link'

export async function getStaticProps(ctx) {
  return {
    props: {},
  };
}

export default function Home(props) {
  return (
    <>
      <div className={styles.container}>
        <h1>Pokedéx</h1>
          <Link href="/about">
            <a>Sobre o projeto</a>
          </Link>
         <Link href="/">
            <a>Home</a>
          </Link>
        <div className={styles.wrap}>
          <div>
            <h1>Sobre</h1>
            <p>
              A franquia Pokémon gira em torno de 901 espécies fictícias de
              monstros colecionáveis, cada um com designs, habilidades e poderes
              únicos. Concebidos por Satoshi Tajiri no início de 1989, os
              Pokémon são criaturas que habitam o mundo fictício de Pokémon. Os
              designs para a multidão de espécies podem se inspirar em qualquer
              coisa, como animais , plantas , criaturas mitológicas e objetos
              inanimados. Muitos Pokémon são capazes de evoluir para espécies
              mais poderosas, enquanto outros podem sofrer mudanças de forma e
              alcançar resultados semelhantes. Existem também alguns deles que
              não podem evoluir. Originalmente, apenas um punhado de artistas
              liderados por Ken SugimoriPokémon projetado. No entanto, em 2013,
              uma equipe de 20 artistas trabalhou em conjunto para criar novos
              designs de espécies. Sugimori e Hironobu Yoshida lideram a equipe
              e determinam os designs finais. Cada iteração da série trouxe
              elogios e críticas às inúmeras criaturas.
            </p>

            <p>
              A vasta gama de criaturas é comumente dividida em "Gerações", com
              cada divisão englobando principalmente novos títulos na série
              principal de videogames e, muitas vezes, uma mudança de plataforma
              portátil . Geração I refere-se a Vermelho , Verde , Azul e Amarelo
              ; Geração II refere-se a Ouro , Prata e Cristal ; Geração III
              refere-se a Ruby , Sapphire , FireRed , LeafGreen e Emerald ;
              Geração IV refere-se a Diamante , Pérola , Platina, HeartGold e
              SoulSilver ; A geração V refere-se a preto , branco , preto 2 e
              branco 2 ; A geração VI refere-se a X , Y , Omega Ruby e Alpha
              Sapphire ; Geração VII refere-se a Sol , Lua , Ultra Sol , Ultra
              Lua , Vamos lá, Pikachu! , e vamos lá, Eevee! ; e Geração VIII
              refere-se a Espada , Escudo , Diamante Brilhante , Pérola
              Brilhantee legendas: Arceus . Cada geração também é marcada pela
              adição de novos Pokémon: 151 na Geração I na região de Kanto, 100
              na Geração II na região de Johto, 135 na Geração III na região de
              Hoenn, 107 na Geração IV na região de Sinnoh, 156 em Geração V na
              região Unova, 72 na Geração VI na região Kalos, 88 na Geração VII
              nas regiões Alola e Kanto, e 92 na Geração VIII nas regiões Galar
              e Hisui.
            </p>
            <p>
              Devido ao grande número de Pokémon, a listagem de cada espécie é
              dividida em artigos por geração . Os 901 Pokémon são organizados
              por número na National Pokédex - uma enciclopédia eletrônica do
              jogo que fornece várias informações sobre Pokémon. A Pokédex
              Nacional é subdividida em séries Pokédex regionais, cada uma
              girando em torno de espécies introduzidas na época de suas
              respectivas gerações junto com as gerações anteriores. Por
              exemplo, o Johto Pokédex, Geração II, cobre as 100 espécies
              introduzidas em Ouro e Prata , além das 151 espécies originais. As
              enciclopédias seguem uma ordem geral: os Pokémon iniciais são
              listados primeiro, seguidos pelas espécies obtidas no início dos
              respectivos jogos, e são concluídas comPokémon lendário e mítico .
              A Geração V é uma exceção notável, já que Victini é o primeiro
              Pokémon no Unova Pokédex e também é numerado exclusivamente como o
              número 000.
            </p>
          </div>
        </div>
        <footer className={styles.footer}>LuciLua@2021</footer>
      </div>
    </>
  );
}

// https://pokeapi.co/
