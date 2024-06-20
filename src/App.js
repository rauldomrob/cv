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
import { useEffect } from 'react';
import supabase from './supabase';

function App() {
  useEffect(() => {
    const getIpAndSave = async () => {
      try {
        const response = await fetch('https://my-worker.rauldr718.workers.dev');
        const data = await response.json();
        const { ip } = data;

        const { error } = await supabase
          .from('ips')
          .insert([{ ip }]);
        if (error) {
        }
      } catch (error) {
      }
    };

    getIpAndSave();
  }, []);
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