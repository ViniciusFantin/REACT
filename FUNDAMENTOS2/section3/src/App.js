import "./App.css";
import Buttons from "./components/Buttons";
import Yggdrasil from "./assets/ygg.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
//import ShowUserName from './components/ShowUserName';
import { useState } from "react";
import PlanetInfo from "./components/PlanetInfo";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {
  //const name = "Anderson"
  //const [userName] = useState("Nathalia")
  const cars = [
    {
      id: 1,
      brand: "Fiat",
      km: 38329,
      year: 2012,
      color: "Branco",
      newCar: false,
    },
    {
      id: 2,
      brand: "BMW",
      km: 0,
      year: 2025,
      color: "Ocean Blue",
      newCar: true,
    },
    {
      id: 3,
      brand: "VWM",
      km: 549000,
      year: 2018,
      color: "preto",
      newCar: false,
    },
    {
      id: 4,
      brand: "Nissan",
      km: 0,
      year: 2023,
      color: "Branco",
      newCar: true,
    },
    {
      id: 5,
      brand: "Hyundai",
      km: 259,
      year: 2024,
      color: "preto",
      newCar: false,
    },
  ];

  function showMessage() {
    console.log("Sup");
  }

  const [message, setMessage] = useState("");
  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const users = [
    { id: 1, name: "Vinicius", idade: 21, job: "programador" },
    { id: 2, name: "Leandro", idade: 21, job: "Arquiteto" },
    { id: 3, name: "Nathalia", idade: 20, job: "Designer" },
    { id: 4, name: "Larissa", idade: 17, job: "Estudante" },
    { id: 5, name: "Julia", idade: 15, job: "Menor Aprendiz" },
  ];

  return (
    <div className="App">
      <h1> BEM VINDO A SEÇÃO 3!</h1>
      {/* Imagem em public */}
      <div>
        <h1 className="Titulos">Palácio de Tudo</h1>
        <img src="universo.jpg" alt="grandioso" className="img1" />
      </div>
      <Buttons />
      <div>
        <h1 className="Titulos">Yggdrasil</h1>
        <img src={Yggdrasil} alt="Sagrada" className="img2" />
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
        <PlanetInfo
          name="Xytheron"
          N="9,34 m/s²"
          AT="Exótica (Similar a Titã, lua de Saturno)"
          AE="Nitrogênio e Oxigênio"
          moon="Varenth"
          r="8.000 km(pouco maior que a terra"
          star="Syrion"
          gl="Veydraxis"
          s="Se houver vegetação, ela pode ter pigmentos adaptados à luz azulada de Syrion."
          b="Bactérias extremófilas podem ter evoluído para resistir a variações de temperatura e possíveis tempestades cósmicas."
          l="A caminho da inteligência"
        />
        <p>More About the Citizen</p>
        <img src="citizen.jpeg" alt="citizen" className="final" />
      </div>
      <div>
        {/* Reaproveitando */}
        <h1>MARCA DE CARRO</h1>
        <CarDetails
          brand="Fiat"
          km={119234}
          color="Cinza"
          year="2014"
          newCar={false}
        />
        <img src="uno.jpeg" alt="uno caquera" />
        <CarDetails
          brand="BMW"
          km={349234}
          color="Vermelho"
          year="2003"
          newCar={false}
        />
        <CarDetails
          brand="VWM"
          km={0}
          color="Cinza"
          year="2025"
          newCar={true}
        />
      </div>
      <div>
        {/* Loop em array de objetos */}
        <h1>Carros Importados</h1>
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            km={car.km}
            colo={car.color}
            year={car.year}
            newCar={car.newCar}
          />
        ))}

        {/* Fragment */}
        <Fragment propFragment="Properties Fragment" />
      </div>
      <div>
        {/*Children*/}
        <Container myValue="Valor de myValue">
          <p>Utilização de elemento children</p>
        </Container>
        <Container myValue="Segundo Valor">
          <p>Segunda utilização</p>
        </Container>
      </div>
      <div>
        {/*Executar Função*/}
        <ExecuteFunction myFunction={showMessage} />
      </div>
      <div>
        {/* State Lift */}
        <Message msg={message} />
        <ChangeMessageState handleMessage={handleMessage} />
      </div>
      <div></div>

      {/* DESAFIO */}
      <div className="userdetails">
        {users.map((user) => (
          <UserDetails
            key={user.id}
            name={user.name}
            age={user.idade}
            job={user.job}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
