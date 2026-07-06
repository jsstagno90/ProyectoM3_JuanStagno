import { SYSTEM_PROMPT } from "./prompt.js";
import { historialConversacion } from "./conversacion.js";
export async function preguntarASherlock() {

    try {

        const response = await fetch("/api/chat",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    systemInstruction: {

                        parts: [

                            {

                                text: SYSTEM_PROMPT

                            }

                        ]

                    },

                    contents: historialConversacion

                })

            }
        );
        const data = await response.json();

        console.log(data);

        if (!response.ok || data.error) {
            throw new Error(
                data.error?.message || "Error al comunicarse con Sherlock."
            );
        }

        const respuesta = data.candidates[0].content.parts[0].text;

        return respuesta;
    } catch (error) {

        console.error(error);
        throw error;
    }

}   