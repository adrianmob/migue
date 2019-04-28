import { PedidosNoEntregadosPage } from './../pedidos-no-entregados/pedidos-no-entregados';
import { PedidosEntregadosPage } from './../pedidos-entregados/pedidos-entregados';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/model';
import { PedidosTodosPage } from '../pedidos-todos/pedidos-todos';

@IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {
  userModel: User = new User();

  public pedidosTodos = PedidosTodosPage;
  public pedidosEntregados = PedidosEntregadosPage;
  public pedidosNoEntregados = PedidosNoEntregadosPage;

  constructor(public navCtrl: NavController,
            public navParams: NavParams)
  {
    this.userModel =  navParams.get('item');
  }


  ionViewDidLoad() {}
  ionViewWillEnter(){

  }
  ionViewWillLeave(){}
  ionViewWillUnload(){}

}
