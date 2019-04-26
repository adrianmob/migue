import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NegocioDetalleEditarPage } from './negocio-detalle-editar';

@NgModule({
  declarations: [
    NegocioDetalleEditarPage,
  ],
  imports: [
    IonicPageModule.forChild(NegocioDetalleEditarPage),
  ],
})
export class NegocioDetalleEditarPageModule {}
