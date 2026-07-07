const guardado =
    typeof localStorage !== "undefined"
        ? localStorage.getItem("historialSherlock")
        : null;

export const historialConversacion =
    guardado ? JSON.parse(guardado) : [];

export function guardarHistorial() {

    localStorage.setItem(
        "historialSherlock",
        JSON.stringify(historialConversacion)
    );

}

export function limpiarHistorial() {
    historialConversacion.length = 0;
    localStorage.removeItem("historialSherlock");
}