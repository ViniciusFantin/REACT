import React from "react";

const ChangeMessageState = ({ handleMessage }) => {
  const messages = [
    "Pizza",
    "Pastel",
    "Calzone da nika",
    "Subway",
    "Sushi",
    "Algo diferente",
  ];
  return (
    <div className="borderbuttons">
      <button className="buttons3" onClick={() => handleMessage(messages[0])}>
        {" "}
        1{" "}
      </button>
      <button className="buttons3" onClick={() => handleMessage(messages[2])}>
        {" "}
        2{" "}
      </button>
      <button className="buttons3" onClick={() => handleMessage(messages[3])}>
        {" "}
        3{" "}
      </button>
      <button className="buttons3" onClick={() => handleMessage(messages[4])}>
        {" "}
        4{" "}
      </button>
      <button className="buttons3" onClick={() => handleMessage(messages[5])}>
        {" "}
        5{" "}
      </button>
      <button></button>
    </div>
  );
};

export default ChangeMessageState;
