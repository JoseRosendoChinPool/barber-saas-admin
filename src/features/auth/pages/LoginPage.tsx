import { useState } from "react";
import { login } from "../services/auth.service";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
        const res = await login({ email, password });
        console.log(res);
        if (res.data.token) {
            localStorage.setItem("token", res.data.token);

            // opcional: guardar user
            localStorage.setItem("user", JSON.stringify(res.data.user));

            // 🚀 REDIRECT AL DASHBOARD
            navigate("/", { replace: true });
        }
        } catch (error) {
        console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80">
        <h1 className="text-xl mb-4">Login</h1>

        <input
            className="border p-2 w-full mb-2"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
        />

        <input
            className="border p-2 w-full mb-2"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-black text-white w-full p-2">
            Entrar
        </button>
        </form>
    );
}