import './App.css';
import Certificaciones from './components/Certificaciones';
import Footer from './components/Footer';
import Header from './components/Header';
import Idiomas from './components/Idiomas';
import Portada from './components/Portada';
import Proyectos from './components/Proyectos';
import Skills from './components/Skills';
import SobreMi from './components/SobreMi';
import Tecnologias from './components/Tecnologias';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Portada></Portada>
      <Proyectos></Proyectos>
      <SobreMi></SobreMi>
      <Certificaciones></Certificaciones>
      <Skills></Skills>
      <Idiomas></Idiomas>
      <Tecnologias></Tecnologias>
      <Footer></Footer>
    </div>
  );
}

export default App;
