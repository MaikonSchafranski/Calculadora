import { Component } from '@angular/core';
import { AlertController, SelectValueAccessor } from '@ionic/angular';
import { switchAll } from 'rxjs';
import { Calcular } from 'src/app/model/entities/Calcular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public primeirovalor!: number
  public segundoValor!: number
  public operacao!: number
  public numerosCalculados: Calcular[] = []
  public selecionar!: string
  public resultado!: any

  constructor(private alertController: AlertController, private alertDivisao: AlertController, private alertResultado: AlertController) {
  }

  calcular() {
    if (this.primeirovalor !== null && this.segundoValor !== null) {
      if (this.segundoValor === 0 && this.selecionar === 'divisao') {
        this.presentDivisao('Erro ao calcular', 'Não deve dividir por zero');
      }

      let conta: Calcular = new Calcular(this.primeirovalor, this.segundoValor);
      conta.operacao = this.operacao
      this.numerosCalculados.push(conta)

      switch (this.selecionar) {
        case 'adisao':
          this.resultado = this.primeirovalor + this.segundoValor
          break
        case 'subtracao':
          this.resultado = this.primeirovalor - this.segundoValor
          break
        case 'Multiplicacao':
          this.resultado = this.primeirovalor * this.segundoValor
          break
        case 'divisao':
          this.resultado = this.primeirovalor / this.segundoValor
          break
        default:
          this.resultado = 0
          break
      }

      this.presentResultado(this.resultado)
    }

    else {
      this.presentAlert('Erro: ', 'Todos os campos devem ser preenchidos')
    }
  }

  async presentDivisao(subheader: string, message: string) {
    const alert = await this.alertDivisao.create({
      header: 'Calculadora',
      subHeader: 'Erro ao tentar calcular',
      message: 'Não deve dividir por zero',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlert(subheader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Calculadora',
      subHeader: 'Erro ao tentar calcular',
      message: 'Todos os campos devem ser preenchido',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentResultado(subheader: number) {
    const alert = await this.alertResultado.create({
      header: 'Calculadora',
      message: `O resultado da operação é ${this.resultado}`,
      buttons: ['OK'],
    });

    await alert.present();
  }
}