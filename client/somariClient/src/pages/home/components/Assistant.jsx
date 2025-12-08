import React, { useState } from "react";
import "../styles/Assistant.css";

const Assistant = () => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [open, setOpen] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        setMessages(prev => [...prev, userMessage]);

        const messageToSend = input;
        setInput("");

        try {
            const res = await fetch("http://localhost:3001/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message: messageToSend })
            });

            const data = await res.json();

            const botMessage = { role: "assistant", content: data.reply };
            setMessages(prev => [...prev, botMessage]);

        } catch (error) {
            console.error("Error:", error);

            const errorMessage = { role: "assistant", content: "Hubo un error al conectar con el servidor." };
            setMessages(prev => [...prev, errorMessage]);
        }
    };

    return (
        <>
            <button className="assistant-btn" onClick={() => setOpen(prev => !prev)}>
                <img src="/assets/Asistente.png" alt="Chat" />
            </button>

            {open && (
                <div className="assistant-chat">

                    <div className="chat-messages">
                        {messages.map((m, i) => (
                            <div
                                key={i}
                                className={`message ${m.role === "user" ? "user" : "bot"}`}
                            >
                                {m.content}
                            </div>
                        ))}
                    </div>

                    <div className="chat-input">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Escribe un mensaje..."
                        />
                        <button onClick={sendMessage}>Enviar</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Assistant;
