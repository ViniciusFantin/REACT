import './App.css';
import Buttons from "./components/Buttons";
import Yggdrasil from "./assets/ygg.jpg";
import ManageData from "./components/ManageData"
import ListRender from "./components/ListRender"

function App() {
  return (
    <div className="App"> 
      <h1> BEM VINDO A SEÇÃO 3!</h1>
      <ListRender />
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
      <div>
        <p>Mudança de valores com state</p>
        <ManageData />
      </div>
    </div>
  );
}

export default App;
