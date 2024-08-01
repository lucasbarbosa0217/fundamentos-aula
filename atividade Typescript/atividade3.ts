interface Automovel {
    nome: string;
    marca: string;
    ano: string;
}



let veiculo1: Automovel = {
    nome: "Avião",
    marca: "Boing",
    ano: "2024"
};

let ciclo: Automovel = {
    nome: "Quadriculo",
    marca: "Jeep",
    ano: "2015",
}

console.log(
`O segundo veículo é um ${ciclo.nome}
A marca do veículo é ${ciclo.marca}
O ano do veículo é ${ciclo.ano}`)

