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

function Table() {
  const [jogo, setJogo] = useState(["", "", "", "", "", "", "", "", ""]);

  const [jogador1, setJogador1] = useState(true);

  const calcWinner = () => {
    const compare = [jogo[0], jogo[1], jogo[2]];
    console.log(compare);
  };

  const handleClk = (data) => {
    var newJogo = [...jogo];
    newJogo[data.target.id] = jogador1 ? "X" : "O";

    setJogo(newJogo);
    setJogador1(!jogador1);
  };

  return (
    <>
      <h1>Jogador atual: {jogador1 ? "X" : "O"}</h1>

      <button onClick={() => setJogo(["", "", "", "", "", "", "", "", ""])}>
        Limpar
      </button>

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
