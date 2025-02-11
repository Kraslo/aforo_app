import { useState } from "react";
import { submitlista } from "../api/paselista";
import { useAuth } from "../components/auth/UseAuth";


const PaseLista = () => {

    const [users, setUsers] = useState();
    const [isLoading, setIsLoading] = useState();
    const { token, logout } = useAuth();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const json_response = await submitlista(token.response.access_token, users); // users is supposed to be the formdata
        } catch (error) {
            if (error.message.includes("Token")) {
                logout();
            }
        };
    };

    return (
        <>
            <div className="form">
                <form onSubmit={handleSubmit}>

                </form>
            </div>
        </>
    );

};

export default PaseLista;