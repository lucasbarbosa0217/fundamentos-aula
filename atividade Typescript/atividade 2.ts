const calcular = (numero1: number, numero2: number, numero3: number, numero4: number): number => {
    return (numero1 * numero2) - (numero3 * numero4)
}


let numero1: number, numero2: number, numero3: number, numero4: number, resultado: string;

numero1 = 5.0;
numero2 = 6.0;
numero3 = 7.0;
numero4 = 8.0;

resultado = Number(calcular(numero1, numero2, numero3, numero4)).toFixed(2);

console.log(`Diferença: ${resultado}`)






