import Button from "react-bootstrap/Button";
const Citas = () => {
    return (
        <>
            <article className="cards border rounded col-12 col-md-4 col-lg-5 my-3 mx-3 bg-light">
                <aside className="card-bod ">
                    <h5 className="car-title fs-7">Mascota:</h5>
                    <p className="car-subtitle mb-2 text-muted fs-8">Dueño:</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item fs-7">Fecha:</li>
                        <li className="list-group-item fs-7">Hora:</li>
                        <li className="list-group-item fs-7">Sintoma:</li>
                    </ul>
                </aside>
                <aside className="text-center mb-2">
                    <Button variant="outline-light" size="sm">
                        <i className="text-danger bi bi-x-lg"></i>
                    </Button>
                </aside>
            </article>
        </>
    );
};

export default Citas;
