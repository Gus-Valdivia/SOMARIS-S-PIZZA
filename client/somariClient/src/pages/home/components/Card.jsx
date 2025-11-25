import React from "react";
import "../../../styles/Carrousel.css"; // Si quieres los estilos de las cards

export default function Card({ title, content }) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}