import "./EndScreen.css";

const EndScreen = ( { retry, score } ) => {
  return (
    <div className="end-screen">
      <h1>Fim de jogo</h1>
      <h2>A sua pontuação foi: <span>{score}</span></h2>
      <button onClick={retry}>Play Again</button>
    </div>
  );
}

export default EndScreen;