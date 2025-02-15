import { useState } from "react";
import { login } from "../../api/login";
import { useAuth } from "../auth/UseAuth";
import ProtectedComponent from "../routes/ProtectedRoute";


const Login = () => {
    
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [isRejected, setIsRejected] = useState("");
    const { login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const json_response = await login(usuario, contraseña); // add parameters here
            
            if (json_response) {
                setIsRejected(false);
            } else {
                setIsRejected(true);
            }
        } catch (error) {
            console.error(error)
        }
    };

    

    return (
        <>
            <form onSubmit={handleLogin}>
                <input
                    id="usuario"
                    value = {user}
                    onChange = {(e) => setUsuario(e.target.value)}
                    type="text"
                />
                <input
                    id="contraseña"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    type="password"
                />
            </form>
            <button type="submit">Iniciar sesión</button>
            {isRejected  // show rejection message TODO: add style (red colour, smt like that)
            ? <p>Usuario o contraseña incorrectos</p>
            : null}
        </>
    )
};

export default Login;