import buttonCapture from "./components/buttons/buttonCapture";
import buttonGame from "./components/buttons/buttonGame";
import './css/buttons.css'
import './css/background.css'

function App() {
  return (
    <div className="container">
      {/* fila 1 */}
      <div className="row container">
        <div className="col-4 text-start">
          <h1><i>The Quiz Game!</i></h1>
          <p><b>¡Contesta, crea, y diviertete desafiando a tus amigos!</b></p>
        </div>
        <hr style={{ border: "5px solid black" }} /><br />
      </div>
      {/* Fila 2 */}
      <div className="row">
        <div className="col-1">
          {/* Botones */}
          <button type="button"
            className="btn btn-outline-primary buttonC"
            onClick={buttonCapture}>
            <h4>CREAR</h4>
          </button>
          <br /><br />
          <button type="button"
            className="btn btn-outline-success buttonC"
            onClick={buttonGame}>
            <h4>JUGAR</h4>
          </button>
        </div>
        <div className="col text-center">
          {/* Contenedor de preguntas */}
          <h4>Cuestionarios</h4>
        </div>
      </div>
    </div>
  )
}

export default App