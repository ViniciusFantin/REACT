import "./App.css";
import MyComponent from "./components/MyComponent";
import { useState } from "react";
import Tittle from "./components/Tittle";
function App() {
  const n = 15;
  const name = useState("Vinicius");

  const redTitle = true;

  return (
    <div className="App">
      {/* CSS GLOBAL */}
      <h1>CSS COM REACT</h1>
      {/* CSS de Componente */}
      <MyComponent />
      <p>Este paragrafo é do App.js</p>
      <p className="My-comp-paragraph">Este paragrafo é do App.js</p>
      {/* Inline CSS */}
      <p
        style={{
          color: "magenta",
          padding: "25px",
          borderTop: "2px solid gold",
        }}
      >
        {" "}
        Este elemento foi estilizado de forma Inline{" "}
      </p>{" "}
      {/* CSS inline Dinâmico*/}
      <h2 style={n < 10 ? { color: "red" } : { color: "Green" }}>
        {" "}
        CSS dinâmico{" "}
      </h2>
      <h2 style={n > 10 ? { color: "red" } : { color: "Green" }}>
        {" "}
        CSS dinâmico{" "}
      </h2>
      <h3
        style={
          name === "Vinicius"
            ? { color: "blue", backgroundColor: "white" }
            : { color: "red" }
        }
      >
        Esse texto ficara azul se estiver correto
      </h3>
      <h3
        style={
          name === "Nathalia"
            ? { color: "blue", backgroundColor: "white" }
            : { color: "pink", borderTop: "green" }
        }
      >
        Esse texto ficara azul se estiver correto
      </h3>
      <Tittle />
    </div>
  );
}

export default App;
