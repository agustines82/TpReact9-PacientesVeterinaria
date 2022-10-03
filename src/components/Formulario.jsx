import ListaCitas from "./ListaCitas";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

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

    //variables para controlar las leyendes en el efento on blur:
    const [displayPetName, setDisplayPetName] = useState("");
    const [displayPetType, setDisplayPetType] = useState("");
    const [displayPetAge, setDisplayPetAge] = useState("");
    const [displayPetSymptom, setDisplayPetSymptom] = useState("");
    const [displayOwnName, setDisplayOwnName] = useState("");
    const [displayOwnPhone, setDisplayOwnPhone] = useState("");
    const [displayOwnEmail, setDisplayOwnEmail] = useState("");
    const [displayOwnAdress, setDisplayOwnAdress] = useState("");
    const [displayOwnCity, setDisplayOwnCity] = useState("");
    const [displayOwnZip, setDisplayOwnZip] = useState("");
    const [displayDate, setDisplayDate] = useState("");
    const [displayTime, setDisplayTime] = useState("");

    //validaciones de los input
    const validarPetName = (petName) => {
        let expReg = /^[a-zA-ZÀ-ÿ\s]{1,25}$/; // Letras y espacios, pueden llevar acentos.
        if (expReg.test(petName.trim())) {
            setDisplayPetName("none");
            return true;
        } else {
            setDisplayPetName("block");
            return false;
        }
    };

    const validarType = (petType) => {
        let expReg = /^[a-zA-ZÀ-ÿ\s]{3,20}$/;
        if (expReg.test(petType)) {
            setDisplayPetType("none");
            return true;
        } else {
            setDisplayPetType("block");
            return false;
        }
    };
    const validarPetAge = (petAge) => {
        let expReg = /^[0-9]{1,3}$/;
        if (expReg.test(petAge) && petAge > 0) {
            setDisplayPetAge("none");
            return true;
        } else {
            setDisplayPetAge("block");
            return false;
        }
    };
    const validarSymptom = (petSymptom) => {
        if (petSymptom.trim().length >= 5 && petSymptom.trim().length <= 80) {
            setDisplayPetSymptom("none");
            return true;
        } else {
            setDisplayPetSymptom("block");
            return false;
        }
    };

    const validarOwnName = (name) => {
        let expReg = /^[a-zA-ZÀ-ÿ\s]{2,25}$/; // Letras y espacios, pueden llevar acentos.
        if (expReg.test(name.trim())) {
            setDisplayOwnName("none");
            return true;
        } else {
            setDisplayOwnName("block");
            return false;
        }
    };

    const validarPhone = (phone) => {
        let expReg = /^[0-9]{9,12}$/;
        if (expReg.test(phone)) {
            setDisplayOwnPhone("none");
            return true;
        } else {
            setDisplayOwnPhone("block");
            return false;
        }
    };

    const validarEmail = (email) => {
        let expReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (expReg.test(email)) {
            setDisplayOwnEmail("none");
            return true;
        } else {
            setDisplayOwnEmail("block");
            return false;
        }
    };

    const validarAdress = (direccion) => {
        if (direccion.trim().length >= 5 && direccion.trim().length <= 80) {
            setDisplayOwnAdress("none");
            return true;
        } else {
            setDisplayOwnAdress("block");
            return false;
        }
    };
    const validarCity = (city) => {
        let expReg = /^[a-zA-ZÀ-ÿ\s]{3,20}$/; // Letras y espacios, pueden llevar acentos.
        if (expReg.test(city.trim())) {
            setDisplayOwnCity("none");
            return true;
        } else {
            setDisplayOwnCity("block");
            return false;
        }
    };
    const validarZip = (zip) => {
        let expReg = /^[0-9]{4}$/;
        if (expReg.test(zip)) {
            setDisplayOwnZip("none");
            return true;
        } else {
            setDisplayOwnZip("block");
            return false;
        }
    };

    const validarDate = (date) => {
        if (date.trim().length > 0) {
            setDisplayDate("none");
            return true;
        } else {
            setDisplayDate("block");
            return false;
        }
    };

    const validarTime = (time) => {
        if (time.trim().length > 0) {
            setDisplayTime("none");
            return true;
        } else {
            setDisplayTime("block");
            return false;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            validarPetName(form.petName) &&
            validarPetAge(form.petAge) &&
            validarType(form.type) &&
            validarOwnName(form.ownName) &&
            validarPhone(form.ownPhone) &&
            validarEmail(form.ownEmail) &&
            validarAdress(form.ownAdress) &&
            validarCity(form.ownCity) &&
            validarZip(form.ownZip) &&
            validarDate(form.appointmentDate) &&
            validarTime(form.appointmentTime)
        ) {
            setValidated(true);
            //guardo los datos del form (los datos de la cita (el objeto)) el el arreglo de objetos (listaCitas) utilizando el spread operator
            setListaCitas([...listaCitas, form]);
            event.stopPropagation();
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo va mal!",
                footer: "Comprueba la carga de los datos",
            });
        }
        setForm(valoresInicialesForm);
        setValidated(false);
    };

    const borrarCita = (objetoCita) => {
        // hacer un arreglo nuevo sin la tarea a borrar
        let listaCitas2 = listaCitas.filter((item) => item !== objetoCita);
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
                                onBlur={() => validarPetName(form.petName)}
                                value={form.petName}
                            />
                            <Form.Control.Feedback type="invalid" style={{ display: displayPetName }}>
                                Indique el Nombre al que responde el animal.Se requiere un caractér como mínimo a un máximo de 25.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control
                                name="petType"
                                required
                                type="text"
                                placeholder="Tipo de animal"
                                onBlur={() => validarType(form.petType)}
                                onChange={handleChange}
                                value={form.petType}
                            />
                            <Form.Control.Feedback type="invalid" style={{ display: displayPetType }}>
                                Detalle el tipo de animal que es la mascota. Se requiere 3 caractéres como mínimo a un máximo de 20.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="2" controlId="validationCustom02">
                            <Form.Label>Edad</Form.Label>
                            <Form.Control
                                name="petAge"
                                required
                                type="number"
                                placeholder="Edad"
                                onBlur={() => validarPetAge(form.petAge)}
                                onChange={handleChange}
                                value={form.petAge}
                            />
                            <Form.Control.Feedback type="invalid" style={{ display: displayPetAge }}>
                                Indique una edad aproximada
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom02">
                            <Form.Label>Sintomatología</Form.Label>
                            <Form.Control
                                name="petSymptom"
                                required
                                as="textarea"
                                placeholder="Sintomas"
                                onBlur={() => validarSymptom(form.petSymptom)}
                                onChange={handleChange}
                                value={form.petSymptom}
                            />
                            <Form.Control.Feedback type="invalid" style={{ display: displayPetSymptom }}>
                                Indica brevemente los sintomas que presenta
                            </Form.Control.Feedback>
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
                                onBlur={() => validarOwnName(form.ownName)}
                                onChange={handleChange}
                                value={form.ownName}
                            />
                            <Form.Control.Feedback type="invalid" style={{ display: displayOwnName }}>
                                Indique el nombre del dueño de la mascota
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control
                                name="ownPhone"
                                required
                                type="number"
                                placeholder="155-123456"
                                onBlur={() => validarPhone(form.ownPhone)}
                                onChange={handleChange}
                                value={form.ownPhone}
                            />
                            <Form.Control.Feedback type="invalid" style={{ display: displayOwnPhone }}>
                                Suministre un telefono de contacto
                            </Form.Control.Feedback>
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
                                    onBlur={() => validarEmail(form.ownEmail)}
                                    onChange={handleChange}
                                    value={form.ownEmail}
                                />
                                <Form.Control.Feedback type="invalid" style={{ display: displayOwnEmail }}>
                                    Suministre email
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                name="ownAdress"
                                type="text"
                                placeholder="Dirección"
                                required
                                onBlur={() => validarAdress(form.ownAdress)}
                                onChange={handleChange}
                                value={form.ownAdress}
                            />
                            <Form.Control.Feedback type="invalid" style={{ display: displayOwnAdress }}>
                                Indique la dirección donde vive con la mascota
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control
                                name="ownCity"
                                type="text"
                                placeholder="Ciudad"
                                required
                                onBlur={() => validarCity(form.ownCity)}
                                onChange={handleChange}
                                value={form.ownCity}
                            />
                            <Form.Control.Feedback type="invalid" style={{ display: displayOwnCity }}>
                                Indique la ciudad donde vive con la mascota.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="2" controlId="validationCustom05">
                            <Form.Label>CP</Form.Label>
                            <Form.Control
                                name="ownZip"
                                type="number"
                                placeholder="Cod. Postal"
                                required
                                onBlur={() => validarZip(form.ownZip)}
                                onChange={handleChange}
                                value={form.ownZip}
                            />
                            <Form.Control.Feedback type="invalid" style={{ display: displayOwnZip }}>
                                Indique el codigo postal donde vive con la mascota.
                            </Form.Control.Feedback>
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
                                onBlur={() => validarDate(form.appointmentDate)}
                                onChange={handleChange}
                                value={form.appointmentDate}
                            />
                            <Form.Control.Feedback type="invalid" style={{ display: displayDate }}>
                                Indique el día que asistirá la mascota
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Hora</Form.Label>
                            <Form.Control
                                name="appointmentTime"
                                required
                                type="time"
                                placeholder="hh:mm"
                                onBlur={() => validarTime(form.appointmentTime)}
                                onChange={handleChange}
                                value={form.appointmentTime}
                            />
                            <Form.Control.Feedback type="invalid" style={{ display: displayTime }}>
                                Indique el horario de atención
                            </Form.Control.Feedback>
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
