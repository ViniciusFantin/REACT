import "./App.css";
import MyForms from "./Components/MyForms";

function App() {
  return (
    <div className="App">
      <h1>FORMS</h1>
      <MyForms user={{ name: "Vinicius", email: "vinifantin3@gmail.com" }} />
    </div>
  );
}

export default App;
