import {useState} from "react"
const ManageData = () => {
    let someData = 10;

    console.log(someData);

    const [number, SetNumber] = useState(15);
    console.log(number);

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)} className="buttons2"> Mudar a Variável</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => SetNumber(25)} className="buttons2" > mudar o state</button>
        </div>
    </div>
  )
}

export default ManageData