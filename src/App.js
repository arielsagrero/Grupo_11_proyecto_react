import logo from './logo.svg';
import './App.css';
import Inicio from './components/Inicio';
import Header from './components/Header';
import Pelicula from './components/Pelicula';
import peliculas from './json/peliculas.json';
import Footer from './components/Footer';

function App() {
  console.log(window.location);
  let component
  switch(window.location.pathname){
    case "/":
         component = <Inicio/>
         break
    case "/peliculas": 
         component = peliculas.map(peli =>
          <Pelicula
             img={peli.img}
             titulo={peli.titulo}
             sinopsis={peli.sinopsis}
             reparto={peli.reparto}
             clasificacion={peli.clasificacion}
             duracion={peli.duracion}
             ></Pelicula>)
          break
  }

  return (
    <>
       <Header/>
       {component}
       <Footer/>
      
    </>
    
  );
}

export default App;
