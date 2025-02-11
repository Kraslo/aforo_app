const API_URL = import.meta.env.VITE_API_URL;

export const login = async (usuario, contraseña) => {
    try {
        const formData = new URLSearchParams();
        formData.append("username", usuario);
        formData.append("passwrod", contraseña);
        formData.append("grant_type", "password");

        var requestOptions = {
            method: 'POST',
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            },
            body: formData.toString(),
            rediredt: "follow"
        };

        const response = await fetch(API_URL +  "/login", requestOptions);

        if (response.ok) {
            console.log("login exitoso");
            console.log(response);
            const json = await response.json();
            return json;
        } else {
            const errorData = await response.json();
            throw new Error(errorData.detail || "Login fallido");
        }
    } catch (error) {
        const errorData = await response.json();
        console.error(errorData.detail || "Login fallido");
        throw new Error(errorData.detail || "Login fallido");
    }
};

