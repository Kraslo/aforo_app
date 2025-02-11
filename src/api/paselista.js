import { AuthProvider } from "../components/auth/UseAuth";


export const submitlista = async (access_token, listdata) => {
    try {
        const formData = new FormData();
        formData.append('listdata', listdata);

        var requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            },
            redirect: 'follow'
        }

        const response = await fetch(API_URL  + "submitlist");

        if (response.ok) {
            console.log("submitlista exitoso");
            json_response = await response.json();
        } else if (response.status === 401) {
            throw new Error("Token Expirado");
        } else {
            const errorData = await response.json();
            throw new Error(errorData.detail || "submitlista fallido");
        }

    } catch (error) {
        console.error("Error al mandar la lista: ", error);
    }
        
    
    
};