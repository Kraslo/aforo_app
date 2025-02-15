const API_URL = import.meta.env.VITE_API_URL

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


export const get_people = async (access_token) => {
    try {
        var requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            },
            redirect: 'follow'
        };

        const response = await fetch(API_URL + "/people/all", requestOptions);

        if (response.ok) {
            const json_response = await response.json();
            return json_response;
        } else if (response.status === 401) {
            throw new Error("Token expirado");
        } else {
            const errorData = await response.json();
            throw new Error(errorDatat.detail || "get_people fallido");
        }

    } catch (error) {
        console.error("Error al mandar la lista: ", error);
    };
};