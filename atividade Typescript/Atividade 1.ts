let liquido: number, bruto: number, adicionalNoturno: number, horasExtras: number, descontos: number;

bruto = 2000.00;
adicionalNoturno = 500.00;
horasExtras = 100.67;
descontos = 200.00;

const calcularLiquido = (bruto: number, adicionalNoturno: number, horasExtras: number, descontos: number): number => {
    return bruto + adicionalNoturno + (horasExtras * 5) - descontos;
}

liquido = calcularLiquido(bruto, adicionalNoturno, horasExtras, descontos);

console.log(`Salário Liquido: ${Number(liquido).toFixed(2)}`);