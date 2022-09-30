import Button from "react-bootstrap/Button";
const Cita = ({ objetoCita, borrarCita }) => {
    return (
        <>
            <article className="cards border rounded col-12 col-md-4 col-lg-5 my-3 mx-3 bg-light">
                <aside className="card-bod ">
                    <h5 className="car-title fs-7">Mascota: {objetoCita.petName}</h5>
                    <p className="car-subtitle mb-2 text-muted fs-8">Dueño: {objetoCita.ownName}</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item fs-7">Fecha: {objetoCita.appointmentDate}</li>
                        <li className="list-group-item fs-7">Hora: {objetoCita.appointmentTime}</li>
                        <li className="list-group-item fs-7">Sintoma: {objetoCita.petSymptom}</li>
                    </ul>
                </aside>
                <aside className="text-center mb-2">
                    <Button variant="outline-light" size="sm" onClick={() => borrarCita(objetoCita)}>
                        <i className="text-danger bi bi-x-lg"></i>
                    </Button>
                </aside>
            </article>
        </>
    );
};

export default Cita;
