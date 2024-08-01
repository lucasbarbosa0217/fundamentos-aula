// DECLARAÇÃO DA INTERFACE
interface Veiculo {
    marca: string;
    modelo: string;
    ano: number;

    ligar(): void;
    acelerar(): void;
}

class Moto implements Veiculo{
    marca: string;
    modelo: string;
    ano: number;

    
    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    ligar(): void {
        console.log("Method not implemented.");
    }
    acelerar(): void {
        console.log("Method not implemented.");
    }
}

// DECLARAÇÃO DA CLASSE IMPLEMENTANDO A INTERFACE
class Carro implements Veiculo {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    ligar() {
        console.log(`${this.marca} ${this.modelo} está ligado.`);
    }

    acelerar() {
        console.log(`${this.marca} ${this.modelo} está acelerando.`);
    }
}

// INSTANCIANDO UM OBJETO DA CLASSE
const meuCarro: Moto = new Carro('Toyota', 'Corolla', 2022);

meuCarro.ligar();     // Output: "Toyota Corolla está ligado."
meuCarro.acelerar();  // Output: "Toyota Corolla está acelerando."