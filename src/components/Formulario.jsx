import ListaCitas from "./ListaCitas";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

//variable para darle los valores iniciales al formulario:
const valoresInicialesForm = {
    petName: "",
    petType: "",
    petAge: "",
    petSymptom: "",
    ownName: "",
    ownPhone: "",
    ownEmail: "",
    ownAdress: "",
    ownCity: "",
    ownZip: "",
    appointmentDate: "",
    appointmentTime: "",
};

const Formulario = () => {
    //cargo las citas que se guardaron en el local storage
    const citasLocalStorage = JSON.parse(localStorage.getItem("keyListaCitas")) || [];
    //en el evento onChange en el FormControl necesito ir guardando lo que se escribe y el objeto form ira guardando ese valor en c/u de sus propiedades,
    const [form, setForm] = useState(valoresInicialesForm);
    //variable para guardar los objetos citas
    const [listaCitas, setListaCitas] = useState(citasLocalStorage);
    //variable de estado de bootstrap para realizar las validaciones y controlar los inputs del form
    const [validated, setValidated] = useState(false);

    //ciclo de vida del componente
    useEffect(() => {
        //guardar el arreglo de objetos citas en el local storage
        localStorage.setItem("keyListaCitas", JSON.stringify(listaCitas));
    }, [listaCitas]);

    const handleChange = (e) => {
        //desestructuro el name y el value del objeto e.tarjet:
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    const handleBlur = () => {};

    const handleSubmit = (event) => {
        const formx = event.currentTarget;
        if (formx.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
        }
        setValidated(true); //esto es una validacion de bootstrap
        //guardo los datos del form (los datos de la cita (el objeto)) el el arreglo de objetos (listaCitas) utilizando el spread operator
        setListaCitas([...listaCitas, form]);
    };
    const borrarCita = (citax) => {
        // hacer un arreglo nuevo sin la tarea a borrar
        let listaCitas2 = listaCitas.filter((item) => item !== citax);
        //actualizo el state
        setListaCitas(listaCitas2);
    };

    return (
        <>
            <section className="container">
                <Form className="border rounded-4 shadow p-3 bg-light" noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-2">
                        <Form.Label className="fs-2 lead">Registro de citas</Form.Label>
                        <hr />
                        <Form.Label className="mb-0 lead text-success">Datos del animal</Form.Label>
                    </Row>
                    <Row className="mb-2 border rounded py-1">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                name="petName"
                                required
                                type="text"
                                placeholder="Nombre de tu mascota"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={form.petName}
                            />
                            <Form.Control.Feedback type="invalid">errors.petName</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control
                                name="petType"
                                required
                                type="text"
                                placeholder="Tipo de animal"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={form.petType}
                            />
                            <Form.Control.Feedback type="invalid">Detalle el tipo de animal que es la mascota</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="2" controlId="validationCustom02">
                            <Form.Label>Edad</Form.Label>
                            <Form.Control
                                name="petAge"
                                required
                                type="number"
                                placeholder="Edad"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={form.petAge}
                            />
                            <Form.Control.Feedback type="invalid">Indique una edad aproximada</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom02">
                            <Form.Label>Sintomatología</Form.Label>
                            <Form.Control
                                name="petSymptom"
                                required
                                as="textarea"
                                placeholder="Sintomas"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={form.petSymptom}
                            />
                            <Form.Control.Feedback type="invalid">Indica brevemente los sintomas que presenta</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Label className="mt-1 lead text-success">Datos del dueño</Form.Label>
                    <Row className="mb-2 border rounded py-1">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                name="ownName"
                                required
                                type="text"
                                placeholder="Nombre del dueño"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={form.ownName}
                            />
                            <Form.Control.Feedback type="invalid">Indique el nombre del dueño de la mascota</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control
                                name="ownPhone"
                                required
                                type="number"
                                placeholder="155-123456"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={form.ownPhone}
                            />
                            <Form.Control.Feedback type="invalid">Suministre un telefono de contacto</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Email</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    name="ownEmail"
                                    type="text"
                                    placeholder="Correo electronico"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={form.ownEmail}
                                />
                                <Form.Control.Feedback type="invalid">Suministre email</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                name="ownAdress"
                                type="text"
                                placeholder="Dirección"
                                required
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={form.ownAdress}
                            />
                            <Form.Control.Feedback type="invalid">Indique la dirección donde vive con la mascota</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control
                                name="ownCity"
                                type="text"
                                placeholder="Ciudad"
                                required
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={form.ownCity}
                            />
                            <Form.Control.Feedback type="invalid">Indique la ciudad donde vive con la mascota.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="2" controlId="validationCustom05">
                            <Form.Label>CP</Form.Label>
                            <Form.Control
                                name="ownZip"
                                type="number"
                                placeholder="Cod. Postal"
                                required
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={form.ownZip}
                            />
                            <Form.Control.Feedback type="invalid">Indique el codigo postal donde vive con la mascota.</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Label className="mt-1 lead text-success">Turno</Form.Label>
                    <Row className="mb-4 border rounded py-1">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control
                                name="appointmentDate"
                                required
                                type="date"
                                placeholder="dd/mm/aaaa"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={form.appointmentDate}
                            />
                            <Form.Control.Feedback type="invalid">Indique el día que asistirá la mascota</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Hora</Form.Label>
                            <Form.Control
                                name="appointmentTime"
                                required
                                type="time"
                                placeholder="hh:mm"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={form.appointmentTime}
                            />
                            <Form.Control.Feedback type="invalid">Indique el horario de atención</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <div className="text-center">
                        <Button variant="success" className="shadow" type="submit">
                            Agendar nueva cita
                        </Button>
                    </div>
                </Form>
            </section>
            <section className="container my-3">
                <h3 className="display-6 text-center pt-3 my-1">Administra las citas aquí</h3>
                <hr className="py-0 my-0 mx-5" />
                <article className="container">
                    <ListaCitas listaCitas={listaCitas} borrarCita={borrarCita} />
                </article>
            </section>
        </>
    );
};

export default Formulario;
