import "./App.css";
import MyForms from "./Components/MyForms";

function App() {
  return (
    <div className="App">
      <h1>FORMS</h1>
      <MyForms
        user={{
          name: "Vinicius",
          email: "vinifantin3@gmail.com",
          obs: "Automatização de campos",
          role: "Adm",
        }}
      />
    </div>
  );
}

export default App;
