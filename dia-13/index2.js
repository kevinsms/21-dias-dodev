class Pc {
    tipo
    processador
    video
    armazenamento
    memoriaRam
    ssd

    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd) {
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.ssd = ssd
    }

    exibir() {
        console.log(`Tipo de computador: ${this.tipo}`)
        console.log(`Processador: ${this.processador}`)
        console.log(`Video: ${this.video}`)
        console.log(`Armazenamento: ${this.armazenamento}`)
        console.log(`Memória Ram: ${this.memoriaRam}`)
        console.log(`SSD: ${this.ssd}`)
    }
}
let indexPc = 0
let continuar = true;
let pcs = []
console.log("========= Montar PC =========")
while (continuar) {
    let tipo = prompt('Digite o tipo de computador: desktop ou notebook')
    let processador = prompt('Digite o nome do seu processador: ')
    let video = prompt('Digite o tipo de video: integrada ou dedicada')
    let armazenamento = prompt("Digite a quantidade de armazenamento em GB: ")
    let memoriaRam = prompt("Digite a quantidade de memória ram em GB: ")
    let ssd = prompt('Digite se terá ssd: Sim/Não')
    let pc = new Pc(tipo, processador, video, armazenamento, memoriaRam, ssd);
    pcs[indexPc] = pc
    console.log(pcs[indexPc])
    let desejaContinuar = prompt('Deseja inserir mais computadores?')

    if (desejaContinuar.toLowerCase() === 'sim') {
        indexPc++;
    } else {
        continuar = false;
    }

}

