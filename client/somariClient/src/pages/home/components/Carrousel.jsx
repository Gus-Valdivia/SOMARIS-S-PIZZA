import React, { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import "../../../styles/Carrousel.css"; // Ajusta la ruta según tu proyecto

const MAX_VISIBILITY = 3;

export default function Carousel({ children }) {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);

    return (
        <div className="carousel">
            {active > 0 && (
                <button className="nav left" onClick={() => setActive(a => a - 1)}>
                    <TiChevronLeftOutline />
                </button>
            )}

            {React.Children.map(children, (child, i) => {
                const isVisible = Math.abs(active - i) <= MAX_VISIBILITY;
                return (
                    <div
                        className="card-container"
                        style={{
                            "--active": i === active ? 1 : 0,
                            "--offset": (active - i) / MAX_VISIBILITY,
                            "--direction": Math.sign(active - i),
                            "--abs-offset": Math.abs(active - i) / MAX_VISIBILITY,
                            pointerEvents: i === active ? "auto" : "none",
                            opacity: isVisible ? 1 : 0,
                            display: isVisible ? "block" : "none",
                        }}
                    >
                        {child}
                    </div>
                );
            })}

            {active < count - 1 && (
                <button className="nav right" onClick={() => setActive(a => a + 1)}>
                    <TiChevronRightOutline />
                </button>
            )}
        </div>
    );
}