const Events = () => {
    const HandleMyEvent = (e) => {
        console.log (e);
        console.log("Ativou o evento");
    };
const renderSomething = (x) => {
    if (x) {
        return <h1>Pode ser isso </h1>;
    }
    else{
        
        return <h1>Ou também isso!</h1>;
    }
};

return(
    <div>
        <div className="button">
            <button onClick={HandleMyEvent}>Clique Aqui!</button>
        </div>
        <div className="button">
            <button onClick={() => console.log("Clicou")}>Clique aqui também</button>
        </div>
        <div className="button">
            <button onClick={() => {
                if(true){
                    console.log("Não utilize mais este método");
                }
            }}>Ou então clique aqui</button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}    
    </div>
)
}

export default Events;