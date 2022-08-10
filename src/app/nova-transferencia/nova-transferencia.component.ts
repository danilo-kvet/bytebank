import { Component, Output, EventEmitter } from '@angular/core';

export interface TransferEvent {
  valor: number;
  destino: number;
}

@Component({
  styleUrls: ['./nova-transferencia.component.scss'],
  templateUrl: './nova-transferencia.component.html',
  selector: 'app-nova-transferencia',
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<TransferEvent>();

  valor: number;
  destino: number;

  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir = { destino: this.destino, valor: this.valor };
    this.aoTransferir.emit(valorEmitir);
    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
