const TemplateExpressions = () => {
    const name = "Vinicius"
    const data = {
        age: 21,
        job: "programador",
        city: "Videira"
    }
    return (
        <div>
            <h1>Seja Bem vindo!!</h1>
            <p>Meu chamo {name}, sou {data.job}, possuo {data.age} anos, e moro em {data.city}</p>
            <p>4000 X 3233432 = {4000 * 3233432}</p>
            <p>{console.log("Hidden informations")}</p>
        </div>
    )
}

export default TemplateExpressions