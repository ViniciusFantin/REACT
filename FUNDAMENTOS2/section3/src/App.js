import './App.css';
import Buttons from "./components/Buttons";
import Yggdrasil from "./assets/ygg.jpg";
import ManageData from "./components/ManageData"
import ListRender from "./components/ListRender"
import ConditionalRender from './components/ConditionalRender';
function App() {
  return (
    <div className="App"> 
      <h1> BEM VINDO A SEÇÃO 3!</h1>
      {/* Imagem em public */}
      <div>
        <h1 className="Titulos">Palácio de Tudo</h1>
        <img src="universo.jpg" alt="grandioso" className="img1" />
      </div>
      <Buttons />
      <div >
        <h1 className="Titulos">Yggdrasil</h1>
        <img src={Yggdrasil} alt="Sagrada" className="img2"/> 
      </div>
      <Buttons />
      <div className="state">
        <p>Mudança de valores com state</p>
        <ManageData />
      </div>
      <div className="Lista1">
        <h1> Lista </h1>
        <ListRender />  
      </div>
      <div>
        <ConditionalRender />
      </div>
    </div>
  );
}

export default App;
