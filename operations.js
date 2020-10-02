export const calcularTrayectoria = (anioInicio, anioFin) => {

    let anioDiferencia = anioFin - anioInicio
    let margenDiferencia = 100 / anioDiferencia

    let data = [];

    for (let i = 0; i <= anioDiferencia; i++) {
        let porcentaje = Number(i * margenDiferencia).toFixed(2)
        data.push([anioFin--, Number(porcentaje)])
    }

    return data
}