import React from "react";
import "./Myforms.css";

const MyForms = () => {
  // 1 - Criação de orm
  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Nome: </label>
          <input type="text" name="name" placeholder="Digite o seu nome" />
        </div>
        <div>
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
};

export default MyForms;
