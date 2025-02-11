import "./App.css";
import Car from "./Components/Car";

function App() {
  const myCars = [
    { name: "Uno", km: 9813, color: "Preto" },
    { name: "BMW", km: 0, color: "Vermelho" },
    { name: "Corsa", km: 7000, color: "Verde" },
  ];
  return (
    <div className="App">
      <h1>Showroom de carros</h1>
      <div className="car-container">
        {myCars.map((car) => (
          <Car car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
