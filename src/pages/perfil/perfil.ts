import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { User } from '../../models/model';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { ElstorapiProvider } from '../../providers/elstorapi/elstorapi';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  userModel: User = new User();
  formGroup: FormGroup;
  email:AbstractControl;
  password:AbstractControl;
  nombre: AbstractControl;
  apellidoPaterno: AbstractControl
  apellidoMaterno: AbstractControl;
  nombreUsuario:AbstractControl;
  confirmPassword:AbstractControl;
  numeroTelefonico:AbstractControl;
  isDisabled: boolean = true;

  imgSource:any  = '/assets/imgs/user.png';
  cameraImg:any = null;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public api: ElstorapiProvider,
    public toastController: ToastController,
    public camera: Camera,
    private _sanitizer: DomSanitizer)
    {
      this.formGroup = formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]],
      nombre:['', [Validators.required]],
      apellidoPaterno:['', [Validators.required]],
      apellidoMaterno:['', [Validators.required]],
      nombreUsuario:['', [Validators.required]],
      confirmPassword:['', [Validators.required]],
      numeroTelefonico:['', [Validators.required]]
      });

      this.email = this.formGroup.controls['email'];
      this.password = this.formGroup.controls['password'];
      this.nombre = this.formGroup.controls['nombre'];
      this.apellidoPaterno = this.formGroup.controls['apellidoPaterno'];
      this.apellidoMaterno = this.formGroup.controls['apellidoMaterno'];
      this.nombreUsuario = this.formGroup.controls['nombreUsuario'];
      this.confirmPassword = this.formGroup.controls['confirmPassword'];
      this.numeroTelefonico = this.formGroup.controls['numeroTelefonico'];

      this.userModel =  navParams.get('item');

      this.imgSource = this.userModel.fotografia !=='/assets/imgs/user.png' ? 
                          this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
                          + this.userModel.fotografia): this.imgSource;
  }

  ionViewDidLoad() {}
  ionViewWillEnter(){

  }
  ionViewWillLeave(){}
  ionViewWillUnload(){}

  editarPerfil()
  {
      this.isDisabled = !this.isDisabled;
  }

  guardarCambios($event, usr)
  {

    const toast = this.toastController.create({
      message: 'Connection error...',
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Done'
    });

    let alert = this.alertCtrl.create({
      title: 'Perfil Actualizado',
      subTitle: 'Perfil Actualizado correctamente!',
      buttons: ['Dismiss']
    });

    this.api.actualizarCuenta(usr).subscribe(
      (data: User) => {
         if(data.toString()=== '0')
         {
            toast.present().then(() =>{
              toast.dismiss();
            });
         }
         if(data.toString() === '1')
         {
          alert.present().then(() => {

          });
         }
      },
       (error: any) => console.log(error));

  }

  cancelar()
  {
      this.navCtrl.pop();
  }

  capturarFoto()
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
      this.cameraImg = 'data:image/jpeg;base64,' + imageData;;
      if(this.cameraImg !== null)
      {
        this.imgSource = this.cameraImg;
      }
     }, (err) => {
      // Handle error
     });

  }

}
