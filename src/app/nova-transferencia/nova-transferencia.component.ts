import { Component } from '@angular/core';

@Component({
  styleUrls: ['./nova-transferencia.component.scss'],
  templateUrl: './nova-transferencia.component.html',
  selector: 'app-nova-transferencia',
})
export class NovaTransferenciaComponent {
  valor: number;
  destino: number;

  transferir() {
    console.log('Solicitada nova transferência');
    console.log({ valor: this.valor });
    console.log({ destino: this.destino });
  }
}
