import React from "react";
import "./MyForms.css";
import { useState } from "react";

const MyForms = ({ user }) => {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [obs, setObs] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  console.log(name);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando informações");
    console.log(name, email);

    //6 - limpando formulário
    setName("");
    setEmail("");
    setObs("");
  };

  // 5 - Controlled Input
  // 4 - Encio de formulário
  // 1 - Criação de form
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 
        2 - labrl envolvendo input 
        */}
        <div className="field">
          <label>
            {/* 
            3 - Simplificação de State
            */}
            <span>E-mail: </span>
            <input
              type="email"
              name="email"
              placeholder="Digite aqui seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
        </div>
        <div className="field">
          <label>
            <span>Observações</span>
            <textarea
              name="Observação"
              placeholder="Escreva aqui"
              onChange={(e) => setObs(e.target.value)}
              value={obs}
            ></textarea>
          </label>
        </div>
        <input className="button" type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForms;
