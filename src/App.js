import { useState } from "react";
import "./App.css";

function Jogadas(props) {
  const [inp, setInp] = useState({ texto: "", casa: 3 });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inp);

    const possiveis = ["x", "y"];

    if (inp.casa > 8 || inp.casa < 0) {
      return console.log("coloque valido input. Numeros apenas entre 8 e 0");
    }
    if (!possiveis.includes(inp.texto)) {
      return console.log("coloque valido input");
    }

    props.func(inp);
  };

  const Change = (e) => {
    setInp({ ...inp, [e.target.name]: e.target.value });
  };

  return (
    <div id="formDiv">
      <form onSubmit={handleSubmit}>
        <label>Jogador: "X" ou "Y"</label>
        <input type="text" name="texto" value={inp.texto} onChange={Change} />

        <label>Casa: 0-8</label>
        <input type="number" name="casa" value={inp.casa} onChange={Change} />
        <button className="button-79">ok</button>
      </form>
    </div>
  );
}
//--------------------------------------------------------------------------------------------------

function Table() {
  const [jogo, setJogo] = useState(["", "", "", "", "", "", "", "", ""]);

  const pullData = (data) => {
    var newJogo = [...jogo];
    newJogo[data.casa] = data.texto;
    setJogo(newJogo);
  };

  return (
    <>
      <Jogadas func={pullData} />
      <table>
        <tbody>
          <tr>
            <td>{jogo[0]}</td>
            <td>{jogo[1]}</td>
            <td>{jogo[2]}</td>
          </tr>
          <tr>
            <td>{jogo[3]}</td>
            <td>{jogo[4]}</td>
            <td>{jogo[5]}</td>
          </tr>
          <tr>
            <td>{jogo[6]}</td>
            <td>{jogo[7]}</td>
            <td>{jogo[8]}</td>
          </tr>
        </tbody>
      </table>
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
