import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Formulario from "./components/Formulario";
function App() {
    return (
        <main>
            <h1 className="text-center display-6 py-3">Administrador pacientes de veterinaria</h1>
            <Formulario />
        </main>
    );
}

export default App;
