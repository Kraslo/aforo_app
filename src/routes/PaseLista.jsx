import { useState } from "react";
import { submitlista } from "../api/paselista";
import { useAuth } from "../components/auth/UseAuth";


const PaseLista = () => {

    const [users, setUsers] = useState();
    const [isLoading, setIsLoading] = useState();
    const { token } = useAuth();


    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const json_response = await submitlista(token.response.access_token, users); // users is supposed to be the formdata
        } catch (error) {
            console.error(error);
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