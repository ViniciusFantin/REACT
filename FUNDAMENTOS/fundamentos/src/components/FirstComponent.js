import MyComponent from "./MyComponent";

const FirstComponent = () => {  //Constante em ArrowFunction 
    return (
        <div>
            <h1>Primeiro Componente!!</h1>
            <MyComponent />
        </div>
    )
}

export default FirstComponent;
// Exporta para referência futura //"import (nome do arquivo) from './component/(nome do arquivo)" Para importar

//para colocar o componentes importado em outro componente, precisamos coloca-lo em forma de tag: <FirstComponent />