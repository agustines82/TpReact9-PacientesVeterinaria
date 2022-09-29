import Cita from "./Cita";
const ListaCitas = ({ listaCitas, borrarCita }) => {
    return (
        <div className="container row justify-content-center align-items-center">
            {/* aqui expongo el arreglo de objetos de citas  iterendo el arreglo con el metodo maps de los arreglos*/}
            {listaCitas.map((elemento, posicion) => (
                <Cita key={posicion} objetoCita={elemento} borrarCita={borrarCita} />
            ))}
        </div>
    );
};

export default ListaCitas;
