import { useState } from "react";
import { login } from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import Button from "../../../ui/Button";

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

    const handleGoogleLogin = () => {
        window.location.href = "http://127.0.0.1:8000/api/v1/auth/google/redirect";
    };

    return (
        <div className="w-full max-w-sm rounded-lg bg-gray-50 border border-gray-200 p-4 mx-2">
            <div className="py-4 flex justify-center">
                <a href="/">
                <img
                    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyFavicon.svg"
                    alt="icon"
                    width="45"
                    height="45"
                    loading="lazy"
                />
                </a>
            </div>
            <h1 className="mb-4 text-center text-2xl font-semibold">
                Iniciar Sesión
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="mb-1 block text-sm text-gray-400">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="name@example.com"
                        className="py-2 w-full rounded border border-gray-300 bg-slate-100 px-2 text-gray-400 placeholder-[#7f8c8d] focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="mb-1 block text-sm text-gray-400"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="py-2 w-full rounded border border-gray-300 bg-slate-100 px-2 text-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-2 text-right">
                    <a href="#" className="text-sm text-gray-400 hover:text-indigo-500">
                        Olvidaste la contraseña?
                    </a>
                </div>
                <Button variant="primary" className="w-full">
                    Entrar
                </Button>
            </form>
            <div className="relative my-8 text-center">
                <span className="relative z-10 bg-gray-100 px-3 text-gray-400">
                Continuar con
                </span>
                <div className="absolute top-1/2 left-0 h-px w-2/5 -translate-y-1/2 transform bg-gray-300"></div>
                <div className="absolute top-1/2 right-0 h-px w-2/5 -translate-y-1/2 transform bg-gray-300"></div>
            </div>

            <Button variant="secondary" className="w-full" onClick={handleGoogleLogin}>
                <div className="flex justify-center items-center gap-2">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="20"
                    height="20"
                    >
                    <path
                        fill="#FFC107"
                        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                    ></path>
                    <path
                        fill="#FF3D00"
                        d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691"
                    ></path>
                    <path
                        fill="#4CAF50"
                        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
                    ></path>
                    <path
                        fill="#1976D2"
                        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
                    ></path>
                    </svg>
                    Google
                </div>
            </Button>

            <p className="mt-8 text-center text-sm text-gray-400">
                By clicking on sign in, you agree to our
                <a href="#" className="underline">
                Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                Privacy Policy
                </a>
                .
            </p>
        </div>
    );
}
