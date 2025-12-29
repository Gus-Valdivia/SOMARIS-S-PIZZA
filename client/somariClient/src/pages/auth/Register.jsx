import { useNavigate } from "react-router-dom"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"

export default function Register() {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        // Simulación de registro
        // Aquí después conectas con backend
        localStorage.setItem("token", "fake-token")

        // Redirigir al inicio
        navigate("/")
    }

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

            {/* IZQUIERDA - FORMULARIO */}
            <div className="relative flex flex-col justify-center px-12 bg-[#E6E6E6]">

                {/* BOTÓN VOLVER */}
                <button
                    onClick={() => navigate("/")}
                    className="absolute top-6 left-6 flex items-center gap-2 text-sm text-black hover:opacity-70 transition"
                >
                    <ArrowLeftIcon className="w-4 h-4" />
                    Volver al inicio
                </button>

                <h1 className="text-4xl font-light text-black mb-4">
                    Crea tu cuenta
                </h1>

                <p className="mb-8 text-sm text-black">
                    ¿Ya tienes cuenta?{" "}
                    <span
                        onClick={() => navigate("/login")}
                        className="font-semibold underline cursor-pointer"
                    >
                        Inicia sesión
                    </span>
                </p>

                <form onSubmit={handleSubmit} className="space-y-5 max-w-md">

                    <div>
                        <label className="block mb-1 text-sm text-black">
                            Nombre completo
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full h-10 px-3 bg-[#8F9B63] outline-none text-black"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm text-black">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full h-10 px-3 bg-[#8F9B63] outline-none text-black"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm text-black">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            required
                            className="w-full h-10 px-3 bg-[#8F9B63] outline-none text-black"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm text-black">
                            Confirmar contraseña
                        </label>
                        <input
                            type="password"
                            required
                            className="w-full h-10 px-3 bg-[#8F9B63] outline-none text-black"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#B11212] text-white py-3 font-semibold hover:bg-red-700 transition"
                    >
                        Crear cuenta
                    </button>
                </form>
            </div>

            {/* DERECHA - IMAGEN */}
            <div className="hidden md:flex items-center justify-center bg-[#9AA36E]">
                <img
                    src="/"
                    className="max-w-md"
                />
            </div>

        </div>
    )
}
