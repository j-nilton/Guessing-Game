let m1: number = 10;
let m2: number = 10;
let m3: number = 10;
let m4: number = 10;
let m5: number = 10;
let m6: number = 10;
let m7: number = 10;
let m8: number = 10;
let m9: number = 10;
let m10: number = 10;
let m11: number = 10;
let m12: number = 10;

let quantPesagens = 0;//esta variável irá armazenar o número de pesagens

//sortear o peso da moeda falsa
let pesoFalsa: number = sortearPesoMoedaFalsa(10); //criei uma função para retornar o peso da moeda falsa. A função precisa receber o peso da verdadeira.

//alterar o peso da moeda falsa
m3 = pesoFalsa; //aqui estamos colocando que a moeda m3 é a falsa

let moedaFalsa: string = descobrirMoedaFalsa(); //aqui está a função que você precisa criar

console.log('A moeda falsa é a: ' + moedaFalsa); //aqui exibimos na tela a moeda falsa
console.log('Foram feitas ' + quantPesagens + ' pesagens');

//Esta função descobre qual moeda é a falsa entre as moedas de 1 a 12
function descobrirMoedaFalsa(): string {
    switch (pesarMoedas('m1 m2 m3 m4', 'm5 m6 m7 m8')) {
        case 'iguais'://a falsa está entre 9 e 12
            return procurarMoedaFalsaEntre4('m9', 'm10', 'm11', 'm12', 'm1');
            break;
        default://está entre 1 e 8
            switch (pesarMoedas('m1 m2', 'm3 m4')) {
                case 'iguais'://a falsa está entre 5 e 8
                    return procurarMoedaFalsaEntre4('m5', 'm6', 'm7', 'm8', 'm1');
                    break;
                default: //a falsa está entre 1 e 4
                    return procurarMoedaFalsaEntre4('m1', 'm2', 'm3', 'm4', 'm12');
            }
    }
}

//Esta função procurar a moeda falsa entre 4 opções, você precisa informar uma moeda verdadeira
function procurarMoedaFalsaEntre4(m1: string, m2: string, m3: string, m4: string, moedaVerdadeira: string): string {
    switch (pesarMoedas(m1, m2)) {
        case 'iguais': // a falsa está entre m3 e m4
            return procurarMoedaFalsaEntre2(m3, m4, moedaVerdadeira);
            break;
        default://a falsa está entre m1 e m2
            return procurarMoedaFalsaEntre2(m1, m2, moedaVerdadeira);
    }
}

//Esta função procurar a moeda falsa entre 2 opções, você precisa informar uma moeda verdadeira
function procurarMoedaFalsaEntre2(m1: string, m2: string, moedaVerdadeira: string) {
    switch (pesarMoedas(m1, moedaVerdadeira)) {
        case 'iguais':
            return m2;
            break;
        default:
            return m1;
    }
}

//Esta função pesa dois grupos de moedas e retorna o grupo mais pesado ou se os pesos são iguais
function pesarMoedas(grupo1: string, grupo2: string): string {
    let g1: string[] = grupo1.split(' ');
    let g2: string[] = grupo2.split(' ');

    let p1: number = 0;
    let p2: number = 0;
    g1.forEach(element => {
        p1 = p1 + pesoMoeda(element);
    });
    g2.forEach(element => {
        p2 = p2 + pesoMoeda(element);
    });
    quantPesagens++;
    console.log('Você já pesou ' + quantPesagens + ' vezes.');
    if (p1 > p2) {
        return 'grupo1';
    }
    if (p2 > p1) {
        return 'grupo2';
    }
    if (p1 == p2) {
        return 'iguais'
    }
    return ''; //a função nunca chegará aqui, porém o compilador não sabe disso então tive que colocar esta linha.
}

//função que descobre o peso de uma moeda pelo nome dela
function pesoMoeda(moeda: string): number {
    switch (moeda) {
        case 'm1': return m1;
            break;
        case 'm2': return m2;
            break;
        case 'm3': return m3;
            break;
        case 'm4': return m4;
            break;
        case 'm5': return m5;
            break;
        case 'm6': return m6;
            break;
        case 'm7': return m7;
            break;
        case 'm8': return m8;
            break;
        case 'm9': return m9;
            break;
        case 'm10': return m10;
            break;
        case 'm11': return m11;
            break;
        case 'm12': return m12;
            break;
        default:
            console.log('moeda desconhecida')
            return 0;
    }
}

//Esta função retorna um peso que varia em até 1 para mais ou mara menos
function sortearPesoMoedaFalsa(pesoVerdadeira: number): number {
    let novoPeso: number = pesoVerdadeira + (Math.random() * 2 - 1);
    while (novoPeso == pesoVerdadeira) {
        novoPeso = pesoVerdadeira + (Math.random() * 2 - 1);
    }
    return novoPeso;
}
