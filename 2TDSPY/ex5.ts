function dobrarNumero(numero: number): number {
    return numero * 2;
}

function saudacaoHora(hora: number): string {
    if (hora >= 0 && hora < 12) {
        return "Bom dia";
    } else if (hora >= 12 && hora < 18) {
        return "Boa tarde";
    } else {
        return "Boa noite";
    }
}

let numeroDobrado: number = dobrarNumero(5);
console.log("O dobro de 5 é:", numeroDobrado);

let saudacao: string = saudacaoHora(15);
console.log("Saudação:", saudacao);
