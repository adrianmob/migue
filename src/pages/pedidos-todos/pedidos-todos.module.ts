import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidosTodosPage } from './pedidos-todos';

@NgModule({
  declarations: [
    PedidosTodosPage,
  ],
  imports: [
    IonicPageModule.forChild(PedidosTodosPage),
  ],
})
export class PedidosTodosPageModule {}
