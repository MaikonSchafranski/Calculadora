export class Calcular {
    private _primeiroValor!: number
    private _segundoValor!: number
    private _operacao!: number
    private _resultado!: number
    private _selecionarselecionar!: number
    private _selecionar!: string

    constructor(primeiroValor: number, segundoValor: number) {
        this._primeiroValor = primeiroValor
        this._segundoValor = segundoValor
    }

    public get primeiroValor(): number {
        return this._primeiroValor
    }
    public set primeiroValor(primeiroValor: number) {
        this._primeiroValor = primeiroValor
    }

    public get segundoValor(): number {
        return this._segundoValor
    }
    public set segundoValor(segundoValor: number) {
        this._segundoValor = segundoValor
    }

    public get operacao(): number {
        return this._operacao
    }
    public set operacao(operecao: number) {
        this._operacao = operecao
    }

    public get resultado(): number {
        return this._resultado
    }
    public set resultado(value: number) {
        this._resultado = value
    }

    public get selecionarselecionar(): number {
        return this._selecionarselecionar
    }
    public set selecionarselecionar(selecionarselecionar: number) {
        this._selecionarselecionar = selecionarselecionar
    }

    public get selecionar(): string {
        return this._selecionar
    }
    public set selecionar(selecionar: string) {
        this._selecionar = selecionar
    }

}