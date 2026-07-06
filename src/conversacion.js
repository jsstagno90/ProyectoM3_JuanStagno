const guardado = localStorage.getItem("historialSherlock");

export const historialConversacion =
    guardado ? JSON.parse(guardado) : [];

export function guardarHistorial() {

    localStorage.setItem(
        "historialSherlock",
        JSON.stringify(historialConversacion)
    );

}