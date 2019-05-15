import { NuevonegocioPage } from './../nuevonegocio/nuevonegocio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { User, Negocio } from '../../models/model';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ElstorapiProvider } from '../../providers/elstorapi/elstorapi';
import { t } from '@angular/core/src/render3';
import { NegocioDetallePage } from '../negocio-detalle/negocio-detalle';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-negocios',
  templateUrl: 'negocios.html',
})
export class NegociosPage {

  userModel: User = new User();
  negocioModel: Negocio = new Negocio();
  mostrarDiv: boolean = false;
  clientid: string = '';
  message:string = "Obteniendo listado de negocios..";

  imgSourceNeg:any  = '/assets/imgs/tienda-online-icono-png.png';
  imgSource:any  = '/assets/imgs/tienda-online-icono-png.png';

  tcontroller: ToastController;

  enableButton:boolean = true;

  constructor(public navCtrl: NavController,
            public navParams: NavParams,
            public api: ElstorapiProvider,
            public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public toastController: ToastController,
              private _sanitizer: DomSanitizer)
  {
    this.userModel =  navParams.get('item');
    this.clientid = this.userModel.clientid;
  }

  ionViewDidLoad() {}
  ionViewWillEnter(){
    this.getNegocios();
  }
  ionViewWillLeave(){}
  ionViewWillUnload(){}

  agregarNegocio($event)
  {
      this.navCtrl.push(NuevonegocioPage, {item:this.userModel});
  }

  negocioDetalle(biz)
  {

      this.navCtrl.push(NegocioDetallePage, {item:biz})
  }

  getNegocios()
  {
    let loader = this.loadingCtrl.create({
      content: this.message
    });
    const toast = this.toastController.create({
      message: 'Connection error...',
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Ok'
    });

    loader.present().then(() => {
      this.api.obtenerNegocio(this.clientid).subscribe(
        (data: Negocio[]) => {
          if(data !== null)
          {
            this.negocioModel = data[0];

            this.imgSourceNeg = data[0].fotografia !=='/assets/imgs/tienda-online-icono-png.png' ? 
                this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
                + data[0].fotografia): this.imgSourceNeg;

              if(data.length == 0)
              {
                this.enableButton = true;
                console.log(data);
              }
              else
              {
                this.enableButton = false;
              }
          }
          else
          {
              toast.present().then(() => {
                toast.dismiss();
              });
          }
        },
         (error: any) =>  {
           console.log(error)
          });
         loader.dismiss();
    });

   
  }

  borrar(bzz)
  {

  }

}
