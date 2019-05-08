import { NegocioDetalleEditarPage } from './../negocio-detalle-editar/negocio-detalle-editar';
import { MapPage } from './../map/map';
import { Negocio, Producto } from './../../models/model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NegocioAgregarProductoPage } from '../negocio-agregar-producto/negocio-agregar-producto';
import { Geolocation } from '@ionic-native/geolocation';
import { ElstorapiProvider } from '../../providers/elstorapi/elstorapi';

@IonicPage()
@Component({
  selector: 'page-negocio-detalle',
  templateUrl: 'negocio-detalle.html',
})
export class NegocioDetallePage {

  negocioModel: Negocio;
  imgSource:any  = '/assets/imgs/user.png';
  mostrarDiv: boolean = false;
  productos: Producto[];
  //producto model


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public api: ElstorapiProvider) {

      this.negocioModel =  navParams.get('item');
      console.log(this.negocioModel);
  }


  ionViewDidLoad() {}
  ionViewWillEnter(){
    this.cargarProducto();
  }
  ionViewWillLeave(){}
  ionViewWillUnload(){}

  agregarProducto(biz)
  {
    this.navCtrl.push(NegocioAgregarProductoPage, {item:biz});
  }

  verMapa(biz)
  {
    
    this.navCtrl.push(MapPage, {item:biz});
  }

  editarNegocio($event, bz)
  {
    this.navCtrl.push(NegocioDetalleEditarPage, {item:this.negocioModel})
  }

  cargarProducto()
  {
    this.api.getProductos(this.negocioModel).subscribe(
      (data: Producto[]) => {
        if(data !== null)
        {
          this.productos = data;
        }
        else
        {
            // toast.present().then(() => {
            //   toast.dismiss();
            // });
        }
      },
       (error: any) =>  {
         console.log(error)
        });
  }
}
