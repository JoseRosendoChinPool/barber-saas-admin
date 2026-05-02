import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function GoogleCallback() {
    const [params] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const token = params.get("token");

        if (token) {
        localStorage.setItem("token", token);
        navigate("/");
        } else {
        navigate("/login");
        }
    }, []);

    return <p>Iniciando sesión...</p>;
}
