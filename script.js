function evaluarEntrenamiento(dias) {
    if (dias >= 5) {
        console.log("Semana excelente - " + dias + " dias entrenados.");
    } else if (dias >= 3) {
        console.log("Semana decente - " + dias + " dias entrenados.");
    } else {
        console.log("Semana floja - solo " + dias + " dias entrenados.");
    }
}

evaluarEntrenamiento(6);
evaluarEntrenamiento(4);
evaluarEntrenamiento(1);