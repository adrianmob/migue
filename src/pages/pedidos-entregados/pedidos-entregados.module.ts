import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidosEntregadosPage } from './pedidos-entregados';

@NgModule({
  declarations: [
    PedidosEntregadosPage,
  ],
  imports: [
    IonicPageModule.forChild(PedidosEntregadosPage),
  ],
})
export class PedidosEntregadosPageModule {}
