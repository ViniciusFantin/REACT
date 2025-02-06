import {useState} from "react"

const ConditionalRender = () => {
  const [x] = useState(true)
  const [name, setName] = useState("Não há nada aqui");
    return (
    <div>
        <h1> Isso Está sendo exibido?</h1>
        {x && <p>Se sim, X é Verdadeiro</p>}
        {!x && <p>Se não, X é Falso</p>}

        <h1>Segredos</h1>  {/*  IF TERNÁRIO  */}
        {name === "Vinicius" ? (
            <div>
                <p>Bruh, GET OUT NOW WTF</p>
            </div>
        ) : (
            <div>
                <p>Wanna see some? hehehe</p>
            </div>
        ) }
        <button onClick={() => setName("Vinicius")}> CLick here to See</button>
    </div>
  )
}

export default ConditionalRender