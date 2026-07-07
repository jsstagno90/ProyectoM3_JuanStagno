import { describe, it, expect, beforeEach } from "vitest";
import {
    historialConversacion,
    guardarHistorial,
    limpiarHistorial
} from "../src/conversacion.js";

describe("Historial de conversación", () => {

    beforeEach(() => {
        limpiarHistorial();
    });

    it("empieza vacío", () => {
        expect(historialConversacion).toEqual([]);
    });

    it("guarda el historial en localStorage", () => {

        historialConversacion.push({
            role: "user",
            parts: [{ text: "Hola Sherlock" }]
        });

        guardarHistorial();

        expect(
            JSON.parse(localStorage.getItem("historialSherlock"))
        ).toEqual(historialConversacion);

    });

    it("limpia el historial", () => {

        historialConversacion.push({
            role: "user",
            parts: [{ text: "Caso" }]
        });

        limpiarHistorial();

        expect(historialConversacion.length).toBe(0);

    });

    it("elimina el historial del localStorage", () => {

        historialConversacion.push({
            role: "user",
            parts: [{ text: "Caso" }]
        });

        guardarHistorial();

        limpiarHistorial();

        expect(localStorage.getItem("historialSherlock")).toBeNull();

    });

});