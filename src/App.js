import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import oli from "./images/oli.png";
import { Container } from "react-bootstrap";

function App() {
  const [name, setName] = useState("");
  const [sueldo, setSueldo] = useState("");
  const [hijo, setHijo] = useState("");

  const [total, setTotal] = useState();
  const [bono, setBono] = useState();

  const onChangeSueldo = (e) => {
    setSueldo(e.target.value);
  };
  const onChangeHijo = (e) => {
    setHijo(e.target.value);
  };
  const enviardatos = (e) => {
    //preventDefault(); sirve para que no se borre los datos de los formularios
    e.preventDefault();
    // SUELDO BASE + (%5 SUELDO BASE x HIJO)
    // SUELDO TOTAL = SUELDO + ((SUELDO * 0.05) * CANTIDAD DE HIJOS)
    let suel = parseFloat(sueldo).toFixed(2);
    let bonohijo = (parseFloat(sueldo) * 0.05).toFixed(2);
    let totalSueldo = (
      parseFloat(sueldo) + parseFloat(sueldo * 0.05 * hijo)
    ).toFixed(2);

    setTotal(totalSueldo);
    setSueldo(suel);
    setBono(bonohijo);
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark p-4"></nav>

      <h1> Formulario de calculo de - Planilla</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="col-sm-5">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={enviardatos}>
                    <label>ingrese nombre</label>
                    <div className="align-bottom">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <br />
                      <label> sueldo base</label>

                      <input
                        type="number"
                        value={sueldo}
                        onChange={onChangeSueldo}
                      />

                      <br />
                      <label> cantidad de hijos </label>
                      <input
                        type="number"
                        value={hijo}
                        onChange={onChangeHijo}
                      />
                      <br />
                    </div>

                    <button className="btn btn-primary" type="submit">
                      Aceptar
                    </button>
                    <br />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="col">
            <h3>
              <div className="col-sm-9">
                <div className="card">
                  <div className="card-body">
                    <div className="card mb-3" style={{ width: "30rem" }}>
                      <div className="row g-0">
                        <div className="col-md-6">
                          <img src={oli} className="" alt="..." />
                        </div>
                        <div className="col-md-6">
                          <h5 className="card-title"></h5>
                          <h6>
                            Personal: {name}
                            <br />
                            sueldo:S/.{sueldo}
                            <br />
                            hijjos: {hijo}
                            <br />
                            bono por hijo: {bono}
                            <br />
                            total sueldo:S/.{total}
                            <br />
                          </h6>
                          <p className="card-text"> </p>
                          <small className="text-muted"></small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
