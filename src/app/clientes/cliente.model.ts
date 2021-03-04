export class Cliente {
    constructor(
        public id: number,
        public cnpj: string,
        public nome: string,
        public email : string,
        public telefone : string
    ){}
}