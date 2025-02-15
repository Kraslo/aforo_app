import { useEffect, useState } from "react";
import { get_people, submitlista } from "../api/paselista";
import { useAuth } from "../components/auth/UseAuth";
import PersonComponent from "../components/people/PersonComponent";


const PaseLista = () => {

    const [users, setUsers] = useState();
    const [isLoading, setIsLoading] = useState();
    const { token, logout } = useAuth();
    const [people, setPeople] = useState("");

    const [formData, setFormData] = useState({
        fecha: "",
        grupo: "",
        asistentes: [],
        incidencias: ""
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const json_response = await get_people(token.response.access_token);
                return json_response
            } catch (error) {
                if (error.meesage.includes("Token")) {
                    logout();
                }
            }
        };

        const people = fetchData();
        setPeople(people);
    }, []);
    


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


    const handleSelectPerson = (personId) => {
        setPeople(people.map((person, idx) => {
            if (person.id === personId) {
                person.selected = true;
            }
            return person
        }))
    };


    const handleOnChange = (e) => {
        console.log('targetid ', e.target.id);
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    return (
        <>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    {/* estructura del form: seguir el forms de google */}
                    <label className="">Fecha</label>
                    <input type="date" name="fecha" id="fecha" value={formData.fecha}
                           onChange={handleOnChange}
                    />
                    

                    <label className="">Grupo</label>
                    {/* Radio for group selection */}
                    {/* TODO: MAKE GROUPS DYNAMIC (QUERY DB FOR GROUPS: NAME, IDS, QUANTITY...) 
                    TO ADAPT TO CHANGE WITHOUT REPROGRAMMING */}
                    <label className="">4° y 5° de primaria</label>
                    <input type="radio" name="grupo" id="grupo" value="45PRIM" 
                           onChange={handleOnChange}
                    />
                    <label className="">6° y 1° de la ESO</label>
                    <input type="radio" name="grupo" id="grupo" value="61ESO"
                           onChange={handleOnChange}
                    />
                    <label className="">2° de la ESO</label>
                    <input type="radio" name="grupo" id="grupo" value="2ESO"
                           onChange={handleOnChange}
                    />
                    <label className="">3° y 4° de la ESO</label>
                    <input type="radio" name="grupo" id="grupo" value="34ESO"
                           onChange={handleOnChange}
                    />

                    <div className="assitance-selection">
                        <label className="">¿Quienes han venido?</label>
                        {/* QUERY DB FOR KID'S NAMES */}
                        {people.map((person, idx) => (
                            <PersonComponent name={person.name} id={person.id} onSelect={handleSelectPerson} />
                        ))}
                    </div>
                </form>
            </div>
        </>
    );

};

export default PaseLista;