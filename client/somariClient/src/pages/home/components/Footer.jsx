import React from 'react'

/*Carrousel aqui*/
const Footer = () => {
    return (
        <footer className="bg-black text-white py-4">
            <div className="max-w-6xl mx-auto px-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-center">

                    <div>
                        <h3 className="font-semibold text-lg mb-3">Aviso de privacidad</h3>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-3">Terminos y condiciones</h3>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-3">Legal</h3>
                    </div>

                </div>

                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
                    &copy; 2025 Sitio. Todos los derechos reservados.
                </div>

            </div>
        </footer>
    );
}

export default Footer;