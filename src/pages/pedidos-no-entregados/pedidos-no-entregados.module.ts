import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidosNoEntregadosPage } from './pedidos-no-entregados';

@NgModule({
  declarations: [
    PedidosNoEntregadosPage,
  ],
  imports: [
    IonicPageModule.forChild(PedidosNoEntregadosPage),
  ],
})
export class PedidosNoEntregadosPageModule {}
