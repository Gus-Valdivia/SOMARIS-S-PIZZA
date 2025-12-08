import React from 'react'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Testimonials = () => {
    return (
        <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                Pizzeria Somari
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                Tenemos pizzas, pastas, bebidas y antojitos de calidad, siempre 
                acompañados de un buen servicio y atención rápida. Cada día 
                buscamos mejorar para que vivas una experiencia agradable, con 
                todo bien organizado y con el objetivo de que siempre salgas 
                satisfecho.
            </p>

        </div>
    );
};

export default Testimonials;

