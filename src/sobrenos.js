import FOTO from './FOTO.png';
import FOTO2 from './FOTO2.png';
import './sobrenos.css';

function Sobrenos() {
    return (
      <div className="sobrenos">
          <img src={FOTO} Class="foto" alt="logo" />
          <h1 Class= "texto">
          Fundada em 1981, o Pão Duro é uma das panificadoras mais tradicionais de Salvador.
          </h1>
          <p Class= "p1">
          Nosso cardápio, com mais de 80 tipos de pães, doces, cafés e biscoitos, é um dos mais deliciosos e elogiados da cidade.
          </p>
          <p Class= "p2">
          Suas receitas próprias e artesanais são produzidas diariamente com matérias-primas frescas, honrando a qualidade e prestígio que a marca possui hoje.
          </p>
        <img src= {FOTO2} Class= "foto2" alt= "logos"/>
        <p Class= "p3">
        Os doces e biscoitos estão entre os mais pedidos, mas os pães não ficam atrás. Os pães do Pão Duro já foram eleitosdiversas vezes como “Os Melhores e mais duros da Cidade” pela revista Veja Salvador.
        </p>
        <p Class= "p4">Hoje a rede do Pão Duro é formada por uma Central de Encomendas e mais 10 lojas, presentes nos principais shoppings da cidade.</p>
        <p Class= "p5">Escolha a sua preferida e venha provar nossas delícias.</p>
      </div>
    
   
    );
  }
  
  export default Sobrenos;