import {useState} from 'react';
import Banner from './componentes/Banner/nav';
import Rodape from './componentes/Banner/footer';
import Category from './componentes/Category';
import Form from './componentes/Form';



function App() {

const categorias = [
  { 
    nome: 'Programação',
    corPrimaria: '#57C278',
    corSegundaria: '#D9F7E9' 
  },
  { 
    nome: 'Front-End',
    corPrimaria: '#82CFFA',
    corSegundaria: '#E8F8FF' 
  },
  { 
    nome: 'Data Sciene',
    corPrimaria: '#A6D157',
    corSegundaria: '#F0F8E2' 
  },
  { 
    nome: 'Devops',
    corPrimaria: '#E06B69',
    corSegundaria: '#FDE7E8' 
  },
  { 
    nome: 'UX e Design',
    corPrimaria: '#D86EBF',
    corSegundaria: '#FAE9FS' 
  },
  { 
    nome: 'Mobile',
    corPrimaria: '#FFBA05',
    corSegundaria: '#FFF5D6' 
  },
  { 
    nome: 'Inovação e Gestão',
    corPrimaria: '#FF8A29',
    corSegundaria: '#FFEEDF' 
  },
];

let categoriasLivros = [];

const [livros, setLivros] = useState([])


const NovoLivroCadastrado = (livro) => {
  console.log(livro)
  setLivros([...livros, livro])
};

for (let i = 0; i < categorias.length; i++) {
  if(livros.filter(livro => livro.categoria === categorias[i].nome).length > 0){
    categoriasLivros.push(categorias[i]);
  }
  else {continue;
  }
}


  return (
    <div className="App">
      <Banner/>
      <Form
      categorias ={categorias.map((categoria) => categoria.nome)}
      LivroCadastrado = {(livro) => NovoLivroCadastrado(livro)}
      />
      {categoriasLivros.map((categoria) => (
        <Category 
        key={categoria.nome}
        nome={categoria.nome}
        corPrimaria={categoria.corPrimaria}
        corSegundaria={categoria.corSegundaria}
        livros={livros.filter((livro) => livro.categoria === categoria.nome)}
        />
      ))}
        <Rodape/>
    </div>
    
  );
}

export default App;
