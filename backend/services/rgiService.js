export function evaluarRiesgo(observacion) {
  return {
    riesgo: "ALTO",
    rgi: true,
    normas: ["Ley 29783", "DS 005-2012-TR"],
    observacion
  };
}