import buttonCapture from "./components/buttons/buttonCapture";
import buttonGame from "./components/buttons/buttonGame";
import './css/buttons.css'
import './css/background.css'

function App() {
  return (
    <div className="container" style={{ border: " 1px solid black" }}>

      {/* Fila 1 */}
      <div className="row" style={{ backgroundColor: " white " }}>
        <div className="col-6 text-center">
          <h1><i>The Quiz Game!</i></h1>
          <p><b>¡Contesta, crea, y diviertete desafiando a tus amigos!</b></p>
        </div>
        <div className="col-6 text-center bannerQ">
        </div>
      </div>

      {/* Fila 2 */}
      <div className="row" style={{ backgroundColor: " orange " }}>

        <div className="col-2 text-center" style={{ border: " 1px solid black" }}>
          {/* Botones */}
          <button type="button"
            className="btn btnC"
            onClick={buttonCapture}>
          </button>
          <b>CREAR</b>

          <button type="button"
            className="btn btnP"
            onClick={buttonGame}>
          </button>
          <b>JUGAR</b>
        </div>

        <div className="col-10 text-center" style={{ border: " 1px solid black" }}>
          {/* Contenedor de preguntas */}
          <h4>Cuestionarios</h4>
          <div className="row" style={{ border: "1px solid black" }}>
            <div className="col-2">
              <button className=" btn btnBgImg"></button>
              <p>Titulo</p>
            </div>
            <div className="col-2">
              <button className=" btn btnBgImg"></button>
              <p>Titulo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App