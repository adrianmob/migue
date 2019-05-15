import { User } from './../../models/model';
import { NegociosPage } from './../negocios/negocios';
import { PedidosPage } from './../pedidos/pedidos';
import { PerfilPage } from './../perfil/perfil';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  public userModel: User = new User();
  imgSource:any  = '/assets/imgs/user.png';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _sanitizer: DomSanitizer)
  {
      this.userModel = navParams.get('item');
      debugger
      this.imgSource = this.userModel.fotografia !=='/assets/imgs/user.png' ? 
                        this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
                        + this.userModel.fotografia): this.imgSource;

      // this.userModel.fotografia = this.userModel.fotografia !== ""? 'data:image/jpeg;base64,' + this.userModel.fotografia: this.userModel.fotografia; 
      // this.imgSource = this.userModel.fotografia != ""? this.userModel.fotografia : this.imgSource;
      console.log(this.userModel);
  }


  ionViewDidLoad() {}
  ionViewWillEnter(){

  }
  ionViewWillLeave(){}
  ionViewWillUnload(){}

  verPerfil($event)
  {
      this.navCtrl.push(PerfilPage,{item:this.userModel});
  }

  verPedidos($event)
  {
    this.navCtrl.push(PedidosPage,{item:this.userModel});
  }

  verNegocios($event)
  {
    this.navCtrl.push(NegociosPage,{item:this.userModel});
  }
}
