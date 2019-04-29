import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ElstorapiProvider } from '../../providers/elstorapi/elstorapi';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-pedidos-todos',
  templateUrl: 'pedidos-todos.html',
})
export class PedidosTodosPage {

  public items: Observable<any[]>;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public api: ElstorapiProvider) {
  }

  ionViewDidLoad() {
    this.items = this.api.obtenerPedidos();
  }

}
