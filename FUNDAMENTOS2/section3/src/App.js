import './App.css';
import Buttons from "./components/Buttons";
import Yggdrasil from "./assets/ygg.jpg";
import ManageData from "./components/ManageData"
import ListRender from "./components/ListRender"
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import PlanetInfo from './components/PlanetInfo';
import CarDetails from './components/CarDetails';
function App() {
  const name = "Anderson"
  const [userName] = useState("Nathalia")
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
        {/* Props */}
        {/*<ShowUserName name={userName} />*/}
        {/* Destructuring */}
        <PlanetInfo name="Xytheron" N="9,34 m/s²" AT="Exótica (Similar a Titã, lua de Saturno)" 
        AE="Nitrogênio e Oxigênio" moon="Varenth" r="8.000 km(pouco maior que a terra" star="Syrion" 
        gl="Veydraxis" s="Se houver vegetação, ela pode ter pigmentos adaptados à luz azulada de Syrion." 
        b="Bactérias extremófilas podem ter evoluído para resistir a variações de temperatura e possíveis tempestades cósmicas." 
        l="A caminho da inteligência" />
        <p>More About the Citizen</p>
        <img src="citizen.jpeg" alt="citizen" className="final" />
      </div>
      <div>
        <h1>MARCA DE CARRO</h1>
        <CarDetails brand="Fiat" km={119234} color="Cinza" year="2014" newCar={false}/>
        <img src="uno.jpeg" alt="uno caquera" />
        <CarDetails brand="BMW" km={349234} color="Vermelho" year="2003" newCar={false}/>
        <CarDetails brand="VWM" km={0} color="Cinza" year="2025" newCar={true} />
      </div>
    </div>
  );
}

export default App;
