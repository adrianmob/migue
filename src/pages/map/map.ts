import { Negocio } from './../../models/model';
import { ElstorapiProvider } from './../../providers/elstorapi/elstorapi';
import { Component , ViewChild, ElementRef} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
declare var google;


@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  public map : any;
  public negocioModel: Negocio = new Negocio();


  @ViewChild('map') mapElement: ElementRef;


  constructor(private api: ElstorapiProvider
    , public navParams: NavParams,
    public geolocation: Geolocation) {

    this.negocioModel =  navParams.get('item');

  }

  ionViewDidLoad() {

    this.loadMap();
  }

  loadMap(){

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(this.negocioModel.latitud, this.negocioModel.longitud);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        markerLabel: this.negocioModel.callenumero
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    }, (err) => {
      console.log(err);
    });

  }

}
