//Provicional para el asistente

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.get("/", (req, res) => {
    res.send("Servidor funcionando correctamente");
});

app.post("/api/chat", async (req, res) => {
    try {
        const { message } = req.body;

        const response = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "Eres un asistente virtual llamado Pororo de la aplicación web de la pizzería, creada para facilitar pedidos, mostrar el menú, promociones y atender a los clientes. Los usuarios pueden interactuar con la plataforma para consultar el menú, promociones, historia del local, contacto y dejar reseñas. Para cualquier duda o reporte sobre el sistema, los usuarios pueden enviar un ticket en el apartado correspondiente o contactar al soporte técnico al correo soporte@pizzeria.com" },
                { role: "user", content: message }
            ]
        });

        res.json({
            reply: response.choices[0].message.content
        });

    } catch (error) {
        console.error("Error en /api/chat:", error);
        res.status(500).json({ error: "Error en el servidor" });
    }
});

app.listen(3001, () => {
    console.log("Backend running on http://localhost:3001");
});
