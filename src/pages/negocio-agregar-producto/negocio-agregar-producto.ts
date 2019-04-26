import { Producto } from './../../models/model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { Negocio } from '../../models/model';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ElstorapiProvider } from '../../providers/elstorapi/elstorapi';

@IonicPage()
@Component({
  selector: 'page-negocio-agregar-producto',
  templateUrl: 'negocio-agregar-producto.html',
})
export class NegocioAgregarProductoPage {

  public negocioModel: Negocio = new Negocio();
  public producto: Producto = new  Producto();
  imgSource:any  = '/assets/imgs/user.png';
  formGroup: FormGroup;

  platillo:AbstractControl;
  precio:AbstractControl;
  descripcion: AbstractControl;
  foto:AbstractControl;
  cantidad: AbstractControl;

  editar: boolean = false;

  constructor(public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    public api: ElstorapiProvider,
    public camera: Camera,
    public navParams: NavParams,
    public navCtrl: NavController) {

      this.formGroup = formBuilder.group({
        platillo: ['',[Validators.required]],
        descripcion:['', [Validators.required]],
        precio:['', [Validators.required]],
        cantidad:['', [Validators.required]]
        });
        this.platillo = this.formGroup.controls['platillo'];
        this.descripcion = this.formGroup.controls['descripcion'];
        this.precio = this.formGroup.controls['precio'];
        this.cantidad = this.formGroup.controls['cantidad'];

      this.negocioModel =  navParams.get('item');
      this.producto.FK_idNegocio = this.negocioModel.id_negocio;
  }

  ionViewDidLoad() {}
  ionViewWillEnter(){
    this.cargarProducto();
  }
  ionViewWillLeave(){}
  ionViewWillUnload(){}

  agregarProducto(prod, biz, $event)
  {
    console.log(prod,biz)
    this.api.agregarProducto(prod).subscribe(
      (data: Producto) => {
      if(data !== null)
        {
            // alert.present().then(() => {

            // });

        }
      else
      {
          // toast.present().then(() => {
          //     toast.dismiss();
          // });
      }
      },
       (error: any) => console.log(error));
  }

  cargarProducto()
  {

  }
  cancelar()
  {
    this.navCtrl.pop();
  }

  capturarFotoProducto()
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
      this.imgSource = imageData;
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });

  }

}
