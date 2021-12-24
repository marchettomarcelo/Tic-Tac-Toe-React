import { useState } from "react";
import "./App.css";

//--------------------------------------------------------------------------------------------------

function Quad(props) {
  return (
    <div className="quad" onClick={props.clk} id={props.id}>
      {props.texto}
    </div>
  );
}

function Input(props) {
  const [playername, setPlayername] = useState({ one: "", two: "" });

  return (
    <form onSubmit={(e) => props.inp(e, playername)}>
      <div className="inputDiv">
        <label>Jogador 1</label>
        <input
          type="text"
          value={playername.one}
          onChange={(e) =>
            setPlayername({ one: e.target.value, two: playername.two })
          }
        />
      </div>

      <div className="inputDiv">
        <label>Jogador 2</label>
        <input
          type="text"
          value={playername.two}
          onChange={(e) =>
            setPlayername({ one: playername.one, two: e.target.value })
          }
        />
      </div>

      <button>ok</button>
    </form>
  );
}

function Table() {
  const [jogo, setJogo] = useState(["", "", "", "", "", "", "", "", ""]);

  const [playername, setPlayername] = useState({ one: "", two: "" });
  const [eo1, setEo1] = useState(true);

  const handleClk = (data) => {
    var newJogo = [...jogo];
    newJogo[data.target.id] = eo1
      ? playername.one.substring(0, 2)
      : playername.two.substring(0, 2);

    setJogo(newJogo);
    setEo1(!eo1);
  };

  function handleInput(event, userinp) {
    event.preventDefault();
    setPlayername(userinp);
  }

  return (
    <>
      <Input inp={handleInput} />
      <h1>Jogador atual: {eo1 ? playername.one : playername.two}</h1>

      <div className="head">
        <h2>
          Jogo da velha do <br /> Marcelo e do Thomas
        </h2>

        <button
          className="but"
          onClick={() => setJogo(["", "", "", "", "", "", "", "", ""])}
        >
          Limpar
        </button>
      </div>

      <div className="board">
        {jogo.map((casa, id) => {
          return <Quad texto={casa} id={id} key={id} clk={handleClk} />;
        })}
      </div>
    </>
  );
}

function App() {
  return (
    <main>
      <Table />
    </main>
  );
}

export default App;
