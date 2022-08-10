import { Component } from '@angular/core';
import { TransferEvent } from './nova-transferencia/nova-transferencia.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';

  transferencia: TransferEvent;

  transferir($event: TransferEvent) {
    this.transferencia = $event;
  }
}
