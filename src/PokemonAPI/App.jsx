import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("");
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        setName(res.data.name);
        setMoves(res.data.moves.length);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }
    getData();
  });

  return (
    <>
      <h1>You chose {num}</h1>
      <h1>My name is {name}</h1>
      <h1>I have {moves} moves</h1>
      <select value={num} onChange={(event) => setNum(event.target.value)}>
        <option value={"1"}>1</option>
        <option value={"2"}>2</option>
        <option value={"3"}>3</option>
        <option value={"4"}>4</option>
        <option value={"25"}>25</option>
      </select>
    </>
  );
};

export default App;
