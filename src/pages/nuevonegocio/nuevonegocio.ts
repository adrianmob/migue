import { NegociosPage } from './../negocios/negocios';
import { CatNegocio, SubCatNegocio } from './../../models/model';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { User, Negocio } from '../../models/model';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { ElstorapiProvider } from '../../providers/elstorapi/elstorapi';
import { Geolocation } from '@ionic-native/geolocation';
import { convertFormatToKey } from 'ionic-angular/umd/util/datetime-util';

@IonicPage()
@Component({
  selector: 'page-nuevonegocio',
  templateUrl: 'nuevonegocio.html',
})
export class NuevonegocioPage {
  userModel: User = new User();
  catnegocio: CatNegocio[];
  subcatnegocio: SubCatNegocio[];

  imgSourceBanner:any  = '/assets/imgs/tienda-online-icono-png.png';
  imgSourceLogo:any  = '/assets/imgs/tienda-online-icono-png.png';

  cameraImgLogo:any = null;
  cameraImgBanner:any = null;

  negocio: Negocio = new Negocio();
  formGroup: FormGroup;

  nombre:AbstractControl;
  callenumero:AbstractControl;
  colonia: AbstractControl;
  ciudad: AbstractControl
  estado: AbstractControl;
  codigopostal: AbstractControl;
  horaapertura:AbstractControl;
  horacierre:AbstractControl;
  categoria:AbstractControl;
  FK_subcategoria:AbstractControl;
  descripcion:AbstractControl;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,
            public api: ElstorapiProvider,
            public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public toastController: ToastController,
              private geolocation: Geolocation,
              private camera: Camera) {

    this.formGroup = formBuilder.group({
      nombre: ['',[Validators.required]],
      callenumero:['', [Validators.required]],
      colonia:['', [Validators.required]],
      ciudad:['', [Validators.required]],
      estado:['', [Validators.required]],
      codigopostal:['', [Validators.required,Validators.maxLength(5)]],
      horaapertura:['', [Validators.required]],
      horacierre:['', [Validators.required]],
      categoria:['', [Validators.required]],
      FK_subcategoria:['', [Validators.required]],
      descripcion:['', [Validators.required]]
      });

      this.nombre = this.formGroup.controls['nombre'];
      this.callenumero = this.formGroup.controls['callenumero'];
      this.colonia = this.formGroup.controls['colonia'];
      this.ciudad = this.formGroup.controls['ciudad'];
      this.estado = this.formGroup.controls['estado'];
      this.codigopostal = this.formGroup.controls['codigopostal'];
      this.horaapertura = this.formGroup.controls['horaapertura'];
      this.horacierre = this.formGroup.controls['horacierre'];
      this.categoria = this.formGroup.controls['categoria'];
      this.FK_subcategoria = this.formGroup.controls['FK_subcategoria'];
      this.descripcion = this.formGroup.controls['descripcion'];

    this.userModel =  navParams.get('item');

  }


  ionViewDidLoad() {}
  ionViewWillEnter(){
    this.getCatNegocio();

    this.getSubCatNegocio();
  }
  ionViewWillLeave(){}
  ionViewWillUnload(){}

  agregarNegocio($event, biz, clientid)
  {
    this.negocio = biz;
    this.negocio.clientid = this.userModel.clientid;

    let message:string = "Agregando negocio..";
    let loader = this.loadingCtrl.create({
      content: message
    });

    const toast = this.toastController.create({
      message: 'Connection error...',
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Done'
    });

    let alert = this.alertCtrl.create({
      title: 'Negocio Agregado',
      subTitle: 'Negocio Agregado correctamente!',
      buttons: [{
        text: 'Ok',
      handler: () => {

        this.navCtrl.push(NegociosPage,{item:this.negocio});
      }
    }]
    });

    loader.present().then(() => {

      this.geolocation.getCurrentPosition().then((resp) => {
        this.negocio.latitud = resp.coords.latitude.toString();
        this.negocio.longitud = resp.coords.longitude.toString();

        this.api.agregarNegocio(this.negocio).subscribe(
          (data: Negocio) => {
          if(data !== null)
            {
                alert.present().then(() => {

                });

            }
          else
          {
              toast.present().then(() => {
                  toast.dismiss();
              });
          }
          },
           (error: any) => console.log(error));
           loader.dismiss();

       }).catch((error) => {
         console.log('Error getting location', error);
         loader.dismiss();
       });

    });
  }
  cancelar()
  {
    this.navCtrl.pop();
  }


  getCatNegocio()
  {
    let loader = this.loadingCtrl.create({
      content: ''
    });

    const toast = this.toastController.create({
      message: 'Error obteniendo categorias...',
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Done'
    });

    loader.present().then(() => {
      this.api.getCatNegocio().subscribe(
        (data: CatNegocio[]) => {
        if(data !== null)
          {
            //
             this.catnegocio = data;
          }
        else
        {
            toast.present().then(() => {
                toast.dismiss();
            });
        }
        },
         (error: any) => console.log(error));
         loader.dismiss();
    });
  }

  getSubCatNegocio()
  {
    let loader = this.loadingCtrl.create({
      content: ''
    });

    const toast = this.toastController.create({
      message: 'Error obteniendo subcategorias...',
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Done'
    });

    loader.present().then(() => {
      this.api.getSubCatNegocio(1).subscribe(
        (data: SubCatNegocio[]) => {
        if(data !== null)
          {
            //
            this.subcatnegocio = data;
          }
        else
        {
            toast.present().then(() => {
                toast.dismiss();
            });
        }
        },
         (error: any) => console.log(error));
         loader.dismiss();
    });
  }
  subCatChange($event, cat)
  {

  }

  catChange($event, subcat)
  {

  }

  capturarFotoLogo()
  {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false,
      targetHeight: 500,
      targetWidth: 500
    }

    this.camera.getPicture(options).then((imageData) => {
      this.cameraImgLogo = 'data:image/jpeg;base64,' + imageData;;
      if(this.cameraImgLogo !== null)
      {
        this.imgSourceLogo = this.cameraImgLogo;
      }
     }, (err) => {
      // Handle error
     });

  }

  capturarFotoBanner()
  {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false,
      targetHeight: 500,
      targetWidth: 500
    }

    this.camera.getPicture(options).then((imageData) => {
      this.cameraImgBanner = 'data:image/jpeg;base64,' + imageData;;
      if(this.cameraImgBanner !== null)
      {
        this.imgSourceBanner = this.cameraImgBanner;
      }
     }, (err) => {
      // Handle error
     });

  }

}
