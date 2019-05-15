import { NegocioDetalleEditarPage } from './../negocio-detalle-editar/negocio-detalle-editar';
import { MapPage } from './../map/map';
import { Negocio, Producto } from './../../models/model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NegocioAgregarProductoPage } from '../negocio-agregar-producto/negocio-agregar-producto';
import { Geolocation } from '@ionic-native/geolocation';
import { ElstorapiProvider } from '../../providers/elstorapi/elstorapi';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForOf } from '@angular/common';

@IonicPage()
@Component({
  selector: 'page-negocio-detalle',
  templateUrl: 'negocio-detalle.html',
})
export class NegocioDetallePage {

  negocioModel: Negocio;

  imgSourceProd:any  = '/assets/imgs/user.png';

  imgSourceBanner:any  = '/assets/imgs/banner.jpg';
  imgSourceLogo:any  = '/assets/imgs/toks.png';

  mostrarDiv: boolean = false;
  productos: Producto[];
  //producto model


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public api: ElstorapiProvider,
    private _sanitizer: DomSanitizer) {

      this.negocioModel =  navParams.get('item');

      debugger
      // this.imgSourceProd = this.negocioModel.fotografia !=='/assets/imgs/user.png' ? 
      //                   this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
      //                   + this.negocioModel.fotografia): this.imgSourceProd;
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

  borrarProducto(prod)
  {
    this.api.borrarProducto(prod).subscribe(
      (data: Producto[]) => {
        debugger
        if(data !== null)
        {
          this.productos = data;
        }
        else
        {
          debugger
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
