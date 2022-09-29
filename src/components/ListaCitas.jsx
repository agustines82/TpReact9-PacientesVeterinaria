import Cita from "./Cita";
const ListaCitas = ({ ListaCitas, borrarCita }) => {
    return (
        <div className="container row justify-content-center align-items-center">
            {/* aqui expongo el arreglo de objetos de citas  iterendo el arreglo con el metodo maps de los arreglos*/}
            {/* {ListaCitas.map((objetoCita, posicion) => (
                <Cita key={posicion} objetoCita={objetoCita} borrarCita={borrarCita} />
            ))} */}
        </div>
    );
};

export default ListaCitas;
