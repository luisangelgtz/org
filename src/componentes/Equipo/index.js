import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  //Destructuración
  const { colorPrimario, colorSecundario, titulo, id } = props.datos;
  const styloColor2 = { backgroundColor: hexToRgba(colorPrimario,0.4) };
  const styloColor1 = { borderColor: colorPrimario };
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props;

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={styloColor2}>
          <input
            type="color"
            className="input-Color"
            value={colorPrimario}
            onChange={(e) => {
              actualizarColor(e.target.value, id)
            }}
          />
          <h3 style={styloColor1}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={index}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like = {like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
