webpackJsonp([14],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__negocios_negocios__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedidos_pedidos__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfil_perfil__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InicioPage = /** @class */ (function () {
    function InicioPage(navCtrl, navParams, _sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._sanitizer = _sanitizer;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_0__models_model__["c" /* User */]();
        this.imgSource = '/assets/imgs/user.png';
        this.userModel = navParams.get('item');
        debugger;
        this.imgSource = this.userModel.fotografia !== '/assets/imgs/user.png' ?
            this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
                + this.userModel.fotografia) : this.imgSource;
        // this.userModel.fotografia = this.userModel.fotografia !== ""? 'data:image/jpeg;base64,' + this.userModel.fotografia: this.userModel.fotografia; 
        // this.imgSource = this.userModel.fotografia != ""? this.userModel.fotografia : this.imgSource;
        console.log(this.userModel);
    }
    InicioPage.prototype.ionViewDidLoad = function () { };
    InicioPage.prototype.ionViewWillEnter = function () {
    };
    InicioPage.prototype.ionViewWillLeave = function () { };
    InicioPage.prototype.ionViewWillUnload = function () { };
    InicioPage.prototype.verPerfil = function ($event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__perfil_perfil__["a" /* PerfilPage */], { item: this.userModel });
    };
    InicioPage.prototype.verPedidos = function ($event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pedidos_pedidos__["a" /* PedidosPage */], { item: this.userModel });
    };
    InicioPage.prototype.verNegocios = function ($event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__negocios_negocios__["a" /* NegociosPage */], { item: this.userModel });
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/inicio/inicio.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Bienvenido  a tu perfil {{userModel.nombreUsuario}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="user">\n        <img class="imgUser" [src]="imgSource">\n        <h2 class="nomCliente">{{userModel.apellidoPaterno}} {{userModel.apellidoMaterno}} {{userModel.nombre}}</h2>\n      </div>\n<h2>Opciones del Menú</h2>\n  <ion-list>\n      <ion-item class="opcion" (click)="verPerfil($event)">\n          <ion-thumbnail item-start>\n            <img [src]="imgSource">\n          </ion-thumbnail>\n          <h2>Mi Perfil</h2>\n        </ion-item>\n        <ion-item class="opcion" (click)="verPedidos($event)">\n            <ion-thumbnail item-start>\n              <img src="/assets/imgs/tienda-online-icono-png.png">\n            </ion-thumbnail>\n            <h2>Mis Pedidos</h2>\n          </ion-item>\n          <ion-item class="opcion" (click)="verNegocios($event)">\n              <ion-thumbnail item-start>\n                <img src="/assets/imgs/iconos-formas-de-envio-2.png">\n              </ion-thumbnail>\n              <h2>Mis Negocios</h2>\n            </ion-item> \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/inicio/inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegocioDetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__negocio_detalle_editar_negocio_detalle_editar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_map__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__negocio_agregar_producto_negocio_agregar_producto__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_elstorapi_elstorapi__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NegocioDetallePage = /** @class */ (function () {
    //producto model
    function NegocioDetallePage(navCtrl, navParams, geolocation, api, _sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.api = api;
        this._sanitizer = _sanitizer;
        this.imgSourceProd = '/assets/imgs/user.png';
        this.imgSourceBanner = '/assets/imgs/banner.jpg';
        this.imgSourceLogo = '/assets/imgs/toks.png';
        this.mostrarDiv = false;
        this.negocioModel = navParams.get('item');
        debugger;
        // this.imgSourceProd = this.negocioModel.fotografia !=='/assets/imgs/user.png' ? 
        //                   this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
        //                   + this.negocioModel.fotografia): this.imgSourceProd;
        console.log(this.negocioModel);
    }
    NegocioDetallePage.prototype.ionViewDidLoad = function () { };
    NegocioDetallePage.prototype.ionViewWillEnter = function () {
        this.cargarProducto();
    };
    NegocioDetallePage.prototype.ionViewWillLeave = function () { };
    NegocioDetallePage.prototype.ionViewWillUnload = function () { };
    NegocioDetallePage.prototype.agregarProducto = function (biz) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__negocio_agregar_producto_negocio_agregar_producto__["a" /* NegocioAgregarProductoPage */], { item: biz });
    };
    NegocioDetallePage.prototype.verMapa = function (biz) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__map_map__["a" /* MapPage */], { item: biz });
    };
    NegocioDetallePage.prototype.editarNegocio = function ($event, bz) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__negocio_detalle_editar_negocio_detalle_editar__["a" /* NegocioDetalleEditarPage */], { item: this.negocioModel });
    };
    NegocioDetallePage.prototype.cargarProducto = function () {
        var _this = this;
        this.api.getProductos(this.negocioModel).subscribe(function (data) {
            if (data !== null) {
                _this.productos = data;
            }
            else {
                // toast.present().then(() => {
                //   toast.dismiss();
                // });
            }
        }, function (error) {
            console.log(error);
        });
    };
    NegocioDetallePage.prototype.borrarProducto = function (prod) {
        var _this = this;
        this.api.borrarProducto(prod).subscribe(function (data) {
            debugger;
            if (data !== null) {
                _this.productos = data;
            }
            else {
                debugger;
                // toast.present().then(() => {
                //   toast.dismiss();
                // });
            }
        }, function (error) {
            console.log(error);
        });
    };
    NegocioDetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-negocio-detalle',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/negocio-detalle/negocio-detalle.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{negocioModel.nombre}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="contBanner">\n        <img class=banner [src]="imgSourceBanner" alt="">\n        <div class="contLogo">\n          <img class=logo [src]="imgSourceLogo" alt="">\n        </div>\n      </div>\n\n    <button ion-button clear (click)="verMapa(negocioModel)" >Ubicación y Horario</button>\n    <h2 class="titNeg">Mis Productos</h2> \n    <ion-list>\n      <ion-item-sliding *ngFor="let prod of productos" class="contNeg">\n          <ion-item>\n            <ion-thumbnail item-start class="logoProd">\n              <img [src]=" prod.fotografia !== \'\'? \'data:image/jpeg;base64,\' + prod.fotografia: imgSourceProd" class="logimg">\n            </ion-thumbnail>\n            <h2 class="nombreNeg">{{prod.nombre}}</h2>\n            <div class="contenedorEstrellas">\n                <ion-icon class="estrella" name=\'star\'></ion-icon>\n                <ion-icon class="estrella" name=\'star\'></ion-icon>\n                <ion-icon class="estrella" name=\'star\'></ion-icon>\n                <ion-icon class="estrella" name=\'star\'></ion-icon>\n                <ion-icon class="estrella" name=\'star\'></ion-icon>\n              </div>\n          </ion-item>\n            <ion-item-options>\n              <button ion-button color="danger" (click)="borrarProducto(prod)" > Borrar</button>\n          </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n\n<ion-item-divider >\n    <button ion-button full color="light" (click)="editarNegocio(negocioModel)" >\n        Editar Perfil del Negocio\n      </button>\n  </ion-item-divider>\n  <ion-fab right bottom (click)="agregarProducto(negocioModel)">\n      <button ion-fab ><ion-icon class="more" name="add"></ion-icon></button>\n  </ion-fab> \n\n</ion-content>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/negocio-detalle/negocio-detalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_6__providers_elstorapi_elstorapi__["a" /* ElstorapiProvider */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */]])
    ], NegocioDetallePage);
    return NegocioDetallePage;
}());

//# sourceMappingURL=negocio-detalle.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recuperarcuenta_recuperarcuenta__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inicio_inicio__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_elstorapi_elstorapi__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, formBuilder, api, alertCtrl, loadingCtrl, toastController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastController = toastController;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_5__models_model__["c" /* User */]();
        this.imgSource = '/assets/imgs/user.png';
        this.formGroup = formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(8)]]
        });
        this.email = this.formGroup.controls['email'];
        this.password = this.formGroup.controls['password'];
    }
    LoginPage.prototype.ionViewDidLoad = function () { };
    LoginPage.prototype.ionViewWillEnter = function () {
    };
    LoginPage.prototype.ionViewWillLeave = function () { };
    LoginPage.prototype.ionViewWillUnload = function () { };
    LoginPage.prototype.iniciarSesion = function ($event, usr) {
        var _this = this;
        var title = '';
        var subTitle = '';
        this.userModel = usr;
        var loader = this.loadingCtrl.create({
            content: 'Iniciando sesion...'
        });
        loader.present().then(function () {
            _this.api.inicarSesion(usr).subscribe(function (data) {
                title = data !== null && data[0] !== undefined ? 'Bienvenido' :
                    data === null || data[0] === undefined ? 'Ocurrio un error' :
                        'Usuario/password incorrecto';
                subTitle = data !== null && data[0] !== undefined ? 'Bienvenido ' + data[0].nombreUsuario :
                    data === null || data[0] === undefined ? 'Ocurrio un error al tratar de iniciar sesion' :
                        'Usuario/password incorrecto';
                var alert = _this.alertCtrl.create({
                    title: title,
                    subTitle: subTitle,
                    buttons: [{
                            text: 'Ok',
                            handler: function () {
                                if (data !== null && data[0] !== undefined) {
                                    var loader_1 = _this.loadingCtrl.create({
                                        content: 'Iniciando sesion...'
                                    });
                                    loader_1.present().then(function () {
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__inicio_inicio__["a" /* InicioPage */], { item: data[0] });
                                        loader_1.dismiss();
                                    });
                                }
                            }
                        }]
                });
                alert.present().then(function () {
                });
            }, function (error) {
                title = 'Ocurrio un Error';
                subTitle = error;
            });
            loader.dismiss();
        });
        // loader.dismiss();
        // toast.dismiss();
    };
    LoginPage.prototype.recuperarCuenta = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__recuperarcuenta_recuperarcuenta__["a" /* RecuperarcuentaPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/login/login.html"*/'<ion-header>\n  <ion-toolbar color="secondary">\n    <ion-navbar>\n      <ion-title primary>Inicio de Sesion</ion-title>\n    </ion-navbar>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="user">\n      <img class="imgUser" [src]="imgSource">\n    </div>\n  <form [formGroup]="formGroup">\n    <ion-list class="list">\n      <ion-item class="correo">\n        <ion-input class="correo-input" placeholder="Correo" type="email" [(ngModel)]="userModel.email" formControlName="email" ></ion-input>\n      </ion-item>\n        <ion-item *ngIf="email.hasError(\'required\') && email.touched ">\n        <p>\n*Valid email is required\n        </p>\n        </ion-item>\n      <ion-item class="contraseña">\n        <ion-input class="contraseña-input" placeholder="Contraseña" type="password" [(ngModel)]="userModel.password" formControlName="password"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="password.hasError(\'required\') && password.touched">\n        <p>\n    *Type a valid password\n        </p>\n        </ion-item>\n\n    </ion-list>\n<ion-grid>\n<ion-row>\n  <button clear  type="submit"  [disabled]="formGroup.invalid" ion-button full (click)="iniciarSesion($event, userModel)" >\n    Iniciar Sesion\n</button>\n</ion-row>\n<ion-row>\n  <button clear ion-button full color="danger" (click)="recuperarCuenta()" >\n    Olvide Mi Contrasenia\n</button>\n</ion-row>\n</ion-grid>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__providers_elstorapi_elstorapi__["a" /* ElstorapiProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosNoEntregadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PedidosNoEntregadosPage = /** @class */ (function () {
    function PedidosNoEntregadosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PedidosNoEntregadosPage.prototype.ionViewDidLoad = function () {
    };
    PedidosNoEntregadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pedidos-no-entregados',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/pedidos-no-entregados/pedidos-no-entregados.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>No Entregados</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <label>\n      <h2>No Entregados</h2>\n    </label>\n  <ion-item-divider>\n    <ion-list>\n      <ion-item>\n          Listar no entregados\n      </ion-item>\n      <ion-item>\n        \n      </ion-item>\n    </ion-list>\n  </ion-item-divider>\n\n</ion-content>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/pedidos-no-entregados/pedidos-no-entregados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PedidosNoEntregadosPage);
    return PedidosNoEntregadosPage;
}());

//# sourceMappingURL=pedidos-no-entregados.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevonegocioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__negocios_negocios__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_elstorapi_elstorapi__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NuevonegocioPage = /** @class */ (function () {
    function NuevonegocioPage(navCtrl, navParams, formBuilder, api, alertCtrl, loadingCtrl, toastController, geolocation, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastController = toastController;
        this.geolocation = geolocation;
        this.camera = camera;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_4__models_model__["c" /* User */]();
        this.imgSourceBanner = '/assets/imgs/tienda-online-icono-png.png';
        this.imgSourceLogo = '/assets/imgs/tienda-online-icono-png.png';
        this.cameraImgLogo = null;
        this.cameraImgBanner = null;
        this.negocio = new __WEBPACK_IMPORTED_MODULE_4__models_model__["a" /* Negocio */]();
        this.formGroup = formBuilder.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]],
            callenumero: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]],
            colonia: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]],
            ciudad: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]],
            estado: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]],
            codigopostal: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].maxLength(5)]],
            horaapertura: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]],
            horacierre: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]],
            categoria: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]],
            FK_subcategoria: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]],
            descripcion: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]]
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
        this.userModel = navParams.get('item');
    }
    NuevonegocioPage.prototype.ionViewDidLoad = function () { };
    NuevonegocioPage.prototype.ionViewWillEnter = function () {
        this.getCatNegocio();
        this.getSubCatNegocio();
    };
    NuevonegocioPage.prototype.ionViewWillLeave = function () { };
    NuevonegocioPage.prototype.ionViewWillUnload = function () { };
    NuevonegocioPage.prototype.agregarNegocio = function ($event, biz, clientid) {
        var _this = this;
        this.negocio = biz;
        this.negocio.clientid = this.userModel.clientid;
        var message = "Agregando negocio..";
        var loader = this.loadingCtrl.create({
            content: message
        });
        var toast = this.toastController.create({
            message: 'Connection error...',
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Done'
        });
        var alert = this.alertCtrl.create({
            title: 'Negocio Agregado',
            subTitle: 'Negocio Agregado correctamente!',
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__negocios_negocios__["a" /* NegociosPage */], { item: _this.negocio });
                    }
                }]
        });
        loader.present().then(function () {
            _this.geolocation.getCurrentPosition().then(function (resp) {
                _this.negocio.latitud = resp.coords.latitude.toString();
                _this.negocio.longitud = resp.coords.longitude.toString();
                _this.api.agregarNegocio(_this.negocio).subscribe(function (data) {
                    if (data !== null) {
                        alert.present().then(function () {
                        });
                    }
                    else {
                        toast.present().then(function () {
                            toast.dismiss();
                        });
                    }
                }, function (error) { return console.log(error); });
                loader.dismiss();
            }).catch(function (error) {
                console.log('Error getting location', error);
                loader.dismiss();
            });
        });
    };
    NuevonegocioPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    NuevonegocioPage.prototype.getCatNegocio = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: ''
        });
        var toast = this.toastController.create({
            message: 'Error obteniendo categorias...',
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Done'
        });
        loader.present().then(function () {
            _this.api.getCatNegocio().subscribe(function (data) {
                if (data !== null) {
                    //
                    _this.catnegocio = data;
                }
                else {
                    toast.present().then(function () {
                        toast.dismiss();
                    });
                }
            }, function (error) { return console.log(error); });
            loader.dismiss();
        });
    };
    NuevonegocioPage.prototype.getSubCatNegocio = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: ''
        });
        var toast = this.toastController.create({
            message: 'Error obteniendo subcategorias...',
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Done'
        });
        loader.present().then(function () {
            _this.api.getSubCatNegocio(1).subscribe(function (data) {
                if (data !== null) {
                    //
                    _this.subcatnegocio = data;
                }
                else {
                    toast.present().then(function () {
                        toast.dismiss();
                    });
                }
            }, function (error) { return console.log(error); });
            loader.dismiss();
        });
    };
    NuevonegocioPage.prototype.subCatChange = function ($event, cat) {
    };
    NuevonegocioPage.prototype.catChange = function ($event, subcat) {
    };
    NuevonegocioPage.prototype.capturarFotoLogo = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: false,
            targetHeight: 500,
            targetWidth: 500
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.cameraImgLogo = 'data:image/jpeg;base64,' + imageData;
            ;
            if (_this.cameraImgLogo !== null) {
                _this.imgSourceLogo = _this.cameraImgLogo;
            }
        }, function (err) {
            // Handle error
        });
    };
    NuevonegocioPage.prototype.capturarFotoBanner = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: false,
            targetHeight: 500,
            targetWidth: 500
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.cameraImgBanner = 'data:image/jpeg;base64,' + imageData;
            ;
            if (_this.cameraImgBanner !== null) {
                _this.imgSourceBanner = _this.cameraImgBanner;
            }
        }, function (err) {
            // Handle error
        });
    };
    NuevonegocioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-nuevonegocio',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/nuevonegocio/nuevonegocio.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>Agregar Negocio</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content>\n      <div class="contBanner">\n          <img class=banner [src]="imgSourceLogo" alt="">\n           <button  color="light" class="camaraBanner" ion-button icon-only (click)="capturarFotoLogo()">\n            <ion-icon class="icono" name="camera"></ion-icon>\n          </button>\n          <div class="contLogo">\n            <img class=logo [src]="imgSourceBanner" alt="">\n            <button  color="light" class="camaraLogo" ion-button icon-only (click)="capturarFotoBanner()">\n                <ion-icon class="icono" name="camera"></ion-icon>\n            </button>\n          </div>\n      </div>\n    <form [formGroup]="formGroup">\n      <ion-list>\n    <ion-item class="campo">\n        <ion-input class="entrada" placeholder="Nombre del negocio"  type="text" [(ngModel)]="negocio.nombre" formControlName="nombre" ></ion-input>\n      </ion-item>\n        <ion-item *ngIf="nombre.hasError(\'required\') && nombre.touched ">\n        <p>\n        *Nombre del negocio es obligatorio\n        </p>\n        </ion-item>\n\n        <ion-item class="campo">\n            <ion-input class="entrada" placeholder="Calle y Numero"  type="text" [(ngModel)]="negocio.callenumero" formControlName="callenumero" ></ion-input>\n          </ion-item>\n            <ion-item *ngIf="callenumero.hasError(\'required\') && callenumero.touched ">\n            <p>\n      *Calle y numero es obligatorio\n            </p>\n            </ion-item>\n\n            <ion-item class="campo">\n                <ion-input class="entrada" placeholder="Colonia"  type="text" [(ngModel)]="negocio.colonia" formControlName="colonia" ></ion-input>\n              </ion-item>\n                <ion-item *ngIf="colonia.hasError(\'required\') && colonia.touched ">\n                <p>\n          *Colonia es obligatorio\n                </p>\n                </ion-item>\n\n                <ion-item class="campo">\n                    <ion-input class="entrada" placeholder="Ciudad"  type="text" [(ngModel)]="negocio.ciudad" formControlName="ciudad" ></ion-input>\n                  </ion-item>\n                    <ion-item *ngIf="ciudad.hasError(\'required\') && ciudad.touched ">\n                    <p>\n              *Ciudad es obligatorio\n                    </p>\n                    </ion-item>\n\n                    <ion-item class="campo">\n                        <ion-input class="entrada" placeholder="Estado"  type="text" [(ngModel)]="negocio.estado" formControlName="estado"></ion-input>\n                      </ion-item>\n                      <ion-item *ngIf="estado.hasError(\'required\') && estado.touched">\n                        <p>\n                    *Estado es obligatorio\n                        </p>\n                        </ion-item>\n\n                        <ion-item class="campo">\n                          <ion-input p class="entrada"laceholder="Codigo Postal"  type="text" [(ngModel)]="negocio.codigopostal" formControlName="codigopostal"></ion-input>\n                        </ion-item>\n                        <ion-item *ngIf="(codigopostal.hasError(\'required\') && codigopostal.touched) || (codigopostal.hasError(\'maxLength\'))">\n                          <p>\n                      *Codigo Postal es obligatorio / Maximo 5 digitos\n                          </p>\n                          </ion-item>\n                          <ion-item class="campo">\n                              <ion-input class="entrada" placeholder="Hora Apertura"  type="time" [(ngModel)]="negocio.horaapertura" formControlName="horaapertura"></ion-input>\n                            </ion-item>\n                            <ion-item *ngIf="horaapertura.hasError(\'required\') && horaapertura.touched">\n                              <p>\n                          *Hora Apertura es obligatorio\n                              </p>\n                              </ion-item>\n                              <ion-item class="campo">\n                                  <ion-input class="entrada" placeholder="Hora Cierre"  type="time" [(ngModel)]="negocio.horacierre" formControlName="horacierre"></ion-input>\n                                </ion-item>\n                                <ion-item *ngIf="horacierre.hasError(\'required\') && horacierre.touched">\n                                  <p>\n                              *Hora Cierre es obligatorio\n                                  </p>\n                                  </ion-item>\n                                  <ion-item class="campo">\n                                    <ion-label>Categoria</ion-label>\n                                    <ion-select  [(ngModel)]="negocio.categoria" formControlName="categoria" placeholder="Selecciona una cagetoria">\n                                      <ion-option value="{{cat.nombre}}" *ngFor="let cat of catnegocio">{{cat.nombre}}</ion-option>\n                                    </ion-select>\n                                  </ion-item>\n                            <!-- <ion-item>\n                              <ion-label>\n                                Categoria\n                              </ion-label>\n                              <ion-input type="text" [(ngModel)]="negocio.categoria" formControlName="categoria"></ion-input>\n                            </ion-item> -->\n                            <!-- <ion-item *ngIf="categoria.hasError(\'required\') && categoria.touched">\n                              <p>\n                          *Categoria es obligatorio\n                              </p>\n                              </ion-item> -->\n\n                              <ion-item class="campo">\n                                  <ion-label>\n                                    Subcategoria\n                                  </ion-label>\n                                  <ion-select  [(ngModel)]="negocio.FK_subcategoria" formControlName="FK_subcategoria" placeholder="Selecciona una subcagetoria">\n                                      <ion-option value="{{subcat.fK_CATNEGOCIO}}"  *ngFor="let subcat of subcatnegocio">{{subcat.nombre}}</ion-option>\n                                    </ion-select>\n                                </ion-item>\n                                <!-- <ion-item *ngIf="subcategoria.hasError(\'required\') && subcategoria.touched">\n                                  <p>\n                              *Subcategoria es obligatorio\n                                  </p>\n                                  </ion-item> -->\n\n                                  <ion-item class="campo">\n                                      <ion-input class="entrada" placeholder="Descripcion"  type="text" [(ngModel)]="negocio.descripcion" formControlName="descripcion"></ion-input>\n                                    </ion-item>\n                                    <ion-item *ngIf="descripcion.hasError(\'required\') && descripcion.touched">\n                                      <p>\n                                  *Descripcion es obligatorio\n                                      </p>\n                                      </ion-item>\n\n\n\n\n\n      </ion-list>\n  <ion-grid>\n  <ion-col>\n\n  </ion-col>\n  <ion-col>\n  <ion-row>\n      <!-- [disabled]="formGroup.invalid" -->\n  <button type="submit"  ion-button full color="light" (click)="agregarNegocio($event, negocio)" >\n    Agregar Negocio\n  </button>\n  </ion-row>\n  <ion-row>\n  <button ion-button full color="danger" (click)="cancelar()" >\n    Cancelar\n  </button>\n  </ion-row>\n  </ion-col>\n  <ion-col>\n\n  </ion-col>\n  </ion-grid>\n\n  </form>\n\n  </ion-content>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/nuevonegocio/nuevonegocio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__providers_elstorapi_elstorapi__["a" /* ElstorapiProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */]])
    ], NuevonegocioPage);
    return NuevonegocioPage;
}());

//# sourceMappingURL=nuevonegocio.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegocioDetalleEditarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_elstorapi_elstorapi__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__negocios_negocios__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var NegocioDetalleEditarPage = /** @class */ (function () {
    function NegocioDetalleEditarPage(navCtrl, navParams, formBuilder, loadingCtrl, toastController, alertCtrl, api, geolocation, camera, _sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.toastController = toastController;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.geolocation = geolocation;
        this.camera = camera;
        this._sanitizer = _sanitizer;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_4__models_model__["c" /* User */]();
        this.negocio = new __WEBPACK_IMPORTED_MODULE_4__models_model__["a" /* Negocio */]();
        // imgSourceLogo:any  = '/assets/imgs/tienda-online-icono-png.png';
        // imgSourceBanner:any  = '/assets/imgs/tienda-online-icono-png.png';
        this.imgSourceBanner = '/assets/imgs/banner.jpg';
        this.imgSourceLogo = '/assets/imgs/toks.png';
        this.cameraImgLogo = null;
        this.cameraImgBanner = null;
        this.editar = true;
        this.formGroup = formBuilder.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            callenumero: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            colonia: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            ciudad: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            estado: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            codigopostal: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(5)]],
            horaapertura: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            horacierre: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            categoria: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            FK_subcategoria: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            descripcion: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]]
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
        this.negocio = navParams.get('item');
        //Banner
        this.negocio.fotografia = this.negocio.fotografia !== '/assets/imgs/banner.jpg' ?
            this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
                + this.negocio.fotografia) : this.imgSourceBanner;
        //Logo
        this.negocio.fotografia2 = this.negocio.fotografia2 !== '/assets/imgs/toks.png' ?
            this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
                + this.negocio.fotografia2) : this.imgSourceLogo;
    }
    NegocioDetalleEditarPage.prototype.ionViewDidLoad = function () { };
    NegocioDetalleEditarPage.prototype.ionViewWillEnter = function () {
        this.getCatNegocio();
        this.getSubCatNegocio();
    };
    NegocioDetalleEditarPage.prototype.ionViewWillLeave = function () { };
    NegocioDetalleEditarPage.prototype.ionViewWillUnload = function () { };
    NegocioDetalleEditarPage.prototype.guardarNegocio = function ($event, biz, clientid) {
        var _this = this;
        var strclientid = this.negocio.clientid;
        this.negocio = biz;
        this.negocio.clientid = strclientid;
        var message = "Agregando negocio..";
        var loader = this.loadingCtrl.create({
            content: message
        });
        var toast = this.toastController.create({
            message: 'Connection error...',
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Done'
        });
        var alert = this.alertCtrl.create({
            title: 'Negocio Editado',
            subTitle: 'Negocio Editado correctamente!',
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__negocios_negocios__["a" /* NegociosPage */], { item: _this.negocio });
                    }
                }]
        });
        loader.present().then(function () {
            _this.geolocation.getCurrentPosition().then(function (resp) {
                _this.negocio.latitud = resp.coords.latitude.toString();
                _this.negocio.longitud = resp.coords.longitude.toString();
                _this.api.editarNegocio(_this.negocio).subscribe(function (data) {
                    if (data.toString() === "1") {
                        alert.present().then(function () {
                        });
                    }
                    else {
                        toast.present().then(function () {
                            toast.dismiss();
                        });
                    }
                }, function (error) { return console.log(error); });
                loader.dismiss();
            }).catch(function (error) {
                console.log('Error getting location', error);
                loader.dismiss();
            });
        });
    };
    NegocioDetalleEditarPage.prototype.capturarFotoPerfil = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: false,
            targetHeight: 500,
            targetWidth: 500
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.cameraImgLogo = 'data:image/jpeg;base64,' + imageData;
            ;
            if (_this.cameraImgLogo !== null) {
                _this.imgSourceLogo = _this.cameraImgLogo;
            }
        }, function (err) {
            // Handle error
        });
    };
    NegocioDetalleEditarPage.prototype.capturarFotoPortada = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: false,
            targetHeight: 500,
            targetWidth: 500
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.cameraImgBanner = 'data:image/jpeg;base64,' + imageData;
            ;
            if (_this.cameraImgBanner !== null) {
                _this.imgSourceBanner = _this.cameraImgBanner;
            }
        }, function (err) {
            // Handle error
        });
    };
    NegocioDetalleEditarPage.prototype.editarNegocio = function () {
        this.editar = !this.editar;
    };
    NegocioDetalleEditarPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    NegocioDetalleEditarPage.prototype.getCatNegocio = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: ''
        });
        var toast = this.toastController.create({
            message: 'Error obteniendo categorias...',
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Done'
        });
        loader.present().then(function () {
            _this.api.getCatNegocio().subscribe(function (data) {
                if (data !== null) {
                    //
                    _this.catnegocio = data;
                }
                else {
                    toast.present().then(function () {
                        toast.dismiss();
                    });
                }
            }, function (error) { return console.log(error); });
            loader.dismiss();
        });
    };
    NegocioDetalleEditarPage.prototype.getSubCatNegocio = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: ''
        });
        var toast = this.toastController.create({
            message: 'Error obteniendo subcategorias...',
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Done'
        });
        loader.present().then(function () {
            _this.api.getSubCatNegocio(1).subscribe(function (data) {
                if (data !== null) {
                    //
                    _this.subcatnegocio = data;
                }
                else {
                    toast.present().then(function () {
                        toast.dismiss();
                    });
                }
            }, function (error) { return console.log(error); });
            loader.dismiss();
        });
    };
    NegocioDetalleEditarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-negocio-detalle-editar',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/negocio-detalle-editar/negocio-detalle-editar.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>Editar Negocio</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content>\n      <div class="contBanner">\n          <img class=banner [src]="imgSourceBanner" alt="">\n           <!-- <button [disabled]="editar" color="light" class="camaraBanner" ion-button icon-only (click)="capturarFotoPortada()">\n            <ion-icon class="icono" name="camera"></ion-icon>\n          </button> -->\n          <div class="contLogo">\n            <img class=logo [src]="imgSourceLogo" alt="">\n            <!-- <button [disabled]="editar" color="light" class="camaraLogo" ion-button icon-only (click)="capturarFotoPerfil()">\n                <ion-icon class="icono" name="camera"></ion-icon>\n            </button> -->\n          </div>\n      </div>\n    <form [formGroup]="formGroup">\n      <ion-list>\n    <ion-item class="campo">\n        <ion-input class="entrada" placeholder="Nombre del negocio" [disabled]="editar" type="text" [(ngModel)]="negocio.nombre" formControlName="nombre" ></ion-input>\n      </ion-item>\n        <ion-item *ngIf="nombre.hasError(\'required\') && nombre.touched ">\n        <p>\n        *Nombre del negocio es obligatorio\n        </p>\n        </ion-item>\n\n        <ion-item class="campo">\n            <ion-input class="entrada" placeholder="Calle y Numero" [disabled]="editar" type="text" [(ngModel)]="negocio.callenumero" formControlName="callenumero" ></ion-input>\n          </ion-item>\n            <ion-item *ngIf="callenumero.hasError(\'required\') && callenumero.touched ">\n            <p>\n      *Calle y numero es obligatorio\n            </p>\n            </ion-item>\n\n            <ion-item class="campo">\n                <ion-input class="entrada" placeholder="Colonia" [disabled]="editar" type="text" [(ngModel)]="negocio.colonia" formControlName="colonia" ></ion-input>\n              </ion-item>\n                <ion-item *ngIf="colonia.hasError(\'required\') && colonia.touched ">\n                <p>\n          *Colonia es obligatorio\n                </p>\n                </ion-item>\n\n                <ion-item class="campo">\n                    <ion-input class="entrada" placeholder="Ciudad" [disabled]="editar" type="text" [(ngModel)]="negocio.ciudad" formControlName="ciudad" ></ion-input>\n                  </ion-item>\n                    <ion-item *ngIf="ciudad.hasError(\'required\') && ciudad.touched ">\n                    <p>\n              *Ciudad es obligatorio\n                    </p>\n                    </ion-item>\n\n                    <ion-item class="campo">\n                        <ion-input class="entrada" placeholder="Estado" [disabled]="editar" type="text" [(ngModel)]="negocio.estado" formControlName="estado"></ion-input>\n                      </ion-item>\n                      <ion-item *ngIf="estado.hasError(\'required\') && estado.touched">\n                        <p>\n                    *Estado es obligatorio\n                        </p>\n                        </ion-item>\n\n                        <ion-item class="campo">\n                          <ion-input p class="entrada"laceholder="Codigo Postal" [disabled]="editar" type="text" [(ngModel)]="negocio.codigopostal" formControlName="codigopostal"></ion-input>\n                        </ion-item>\n                            <ion-item *ngIf="(codigopostal.hasError(\'required\') && codigopostal.touched) || (codigopostal.hasError(\'maxLength\'))">\n                          <p>\n                      *Codigo Postal es obligatorio\n                          </p>\n                          </ion-item>\n                          <ion-item class="campo">\n                              <ion-input class="entrada" placeholder="Hora Apertura" [disabled]="editar" type="time" [(ngModel)]="negocio.horaapertura" formControlName="horaapertura"></ion-input>\n                            </ion-item>\n                            <ion-item *ngIf="horaapertura.hasError(\'required\') && horaapertura.touched">\n                              <p>\n                          *Hora Apertura es obligatorio\n                              </p>\n                              </ion-item>\n                              <ion-item class="campo">\n                                  <ion-input class="entrada" placeholder="Hora Cierre" [disabled]="editar" type="time" [(ngModel)]="negocio.horacierre" formControlName="horacierre"></ion-input>\n                                </ion-item>\n                                <ion-item *ngIf="horacierre.hasError(\'required\') && horacierre.touched">\n                                  <p>\n                              *Hora Cierre es obligatorio\n                                  </p>\n                                  </ion-item>\n                                  <ion-item class="campo">\n                                    <ion-label>Categoria</ion-label>\n                                    <ion-select [disabled]="editar" [(ngModel)]="negocio.categoria" formControlName="categoria" placeholder="Selecciona una cagetoria">\n                                      <ion-option value="{{cat.nombre}}" *ngFor="let cat of catnegocio">{{cat.nombre}}</ion-option>\n                                    </ion-select>\n                                  </ion-item>\n                            <!-- <ion-item>\n                              <ion-label>\n                                Categoria\n                              </ion-label>\n                              <ion-input type="text" [(ngModel)]="negocio.categoria" formControlName="categoria"></ion-input>\n                            </ion-item> -->\n                            <!-- <ion-item *ngIf="categoria.hasError(\'required\') && categoria.touched">\n                              <p>\n                          *Categoria es obligatorio\n                              </p>\n                              </ion-item> -->\n\n                              <ion-item class="campo">\n                                  <ion-label>\n                                    Subcategoria\n                                  </ion-label>\n                                  <ion-select [disabled]="editar" [(ngModel)]="negocio.FK_subcategoria" formControlName="FK_subcategoria" placeholder="Selecciona una subcagetoria">\n                                      <ion-option value="{{subcat.fK_CATNEGOCIO}}"  *ngFor="let subcat of subcatnegocio">{{subcat.nombre}}</ion-option>\n                                    </ion-select>\n                                </ion-item>\n                                <!-- <ion-item *ngIf="subcategoria.hasError(\'required\') && subcategoria.touched">\n                                  <p>\n                              *Subcategoria es obligatorio\n                                  </p>\n                                  </ion-item> -->\n\n                                  <ion-item class="campo">\n                                      <ion-input class="entrada" placeholder="Descripcion" [disabled]="editar" type="text" [(ngModel)]="negocio.descripcion" formControlName="descripcion"></ion-input>\n                                    </ion-item>\n                                    <ion-item *ngIf="descripcion.hasError(\'required\') && descripcion.touched">\n                                      <p>\n                                  *Descripcion es obligatorio\n                                      </p>\n                                      </ion-item>\n\n\n\n\n\n      </ion-list>\n    <ion-grid>\n      <ion-row>\n               <!-- [disabledd]="formGroup.invalid" -->\n        <button type="submit"  ion-button full color="light" (click)="editarNegocio($event, negocio)" >\n          Editar Negocio\n        </button>\n      </ion-row>\n    <ion-row>\n        <!-- [disabledd]="formGroup.invalid" -->\n    <button [disabled]="editar" type="submit"  ion-button full color="light" (click)="guardarNegocio($event, negocio)" >\n      Guardar  Negocio\n    </button>\n    </ion-row>\n\n    </ion-grid>\n\n    </form>\n\n    </ion-content>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/negocio-detalle-editar/negocio-detalle-editar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_elstorapi_elstorapi__["a" /* ElstorapiProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["c" /* DomSanitizer */]])
    ], NegocioDetalleEditarPage);
    return NegocioDetalleEditarPage;
}());

//# sourceMappingURL=negocio-detalle-editar.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegocioAgregarProductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__negocio_detalle_negocio_detalle__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_elstorapi_elstorapi__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NegocioAgregarProductoPage = /** @class */ (function () {
    function NegocioAgregarProductoPage(formBuilder, loadingCtrl, toastController, alertCtrl, api, camera, navParams, navCtrl) {
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.toastController = toastController;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.camera = camera;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.negocioModel = new __WEBPACK_IMPORTED_MODULE_4__models_model__["a" /* Negocio */]();
        this.producto = new __WEBPACK_IMPORTED_MODULE_1__models_model__["b" /* Producto */]();
        this.imgSource = '/assets/imgs/user.png';
        this.editar = false;
        this.formGroup = formBuilder.group({
            platillo: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]],
            descripcion: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]],
            precio: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]],
            cantidad: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]]
        });
        this.platillo = this.formGroup.controls['platillo'];
        this.descripcion = this.formGroup.controls['descripcion'];
        this.precio = this.formGroup.controls['precio'];
        this.cantidad = this.formGroup.controls['cantidad'];
        this.negocioModel = navParams.get('item');
        this.producto.negocioid = this.negocioModel.clientid;
    }
    NegocioAgregarProductoPage.prototype.ionViewDidLoad = function () { };
    NegocioAgregarProductoPage.prototype.ionViewWillEnter = function () {
    };
    NegocioAgregarProductoPage.prototype.ionViewWillLeave = function () { };
    NegocioAgregarProductoPage.prototype.ionViewWillUnload = function () { };
    NegocioAgregarProductoPage.prototype.agregarProducto = function (prod, biz, $event) {
        var _this = this;
        var toast = this.toastController.create({
            message: 'Ocurrio un error...',
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Done'
        });
        var alert = this.alertCtrl.create({
            title: 'Producto Agregado',
            subTitle: 'Producto Agregado correctamente!',
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        toast.dismiss();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__negocio_detalle_negocio_detalle__["a" /* NegocioDetallePage */], { item: _this.negocioModel });
                    }
                }]
        });
        debugger;
        // console.log(prod,biz)
        this.api.agregarProducto(prod).subscribe(function (data) {
            if (data !== null) {
                alert.present().then(function () {
                });
            }
            else {
                toast.present().then(function () {
                    toast.dismiss();
                });
            }
        }, function (error) { return console.log(error); });
    };
    NegocioAgregarProductoPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    NegocioAgregarProductoPage.prototype.capturarFotoProducto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: false,
            targetHeight: 500,
            targetWidth: 500
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imgSource = imageData;
            var base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    NegocioAgregarProductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-negocio-agregar-producto',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/negocio-agregar-producto/negocio-agregar-producto.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Listado de productos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n  <div class="titulo">\n    <img src="/assets/imgs/NEGOCIO.png" alt="">\n    <h2 class="nomNeg">Nombre del negocio</h2>\n  </div>\n\n  <h3>Datos del producto</h3>\n\n            <form [formGroup]="formGroup">\n                \n                <div class="producto">\n                    <img class="imgPro" src="/assets/imgs/producto.png">\n                    <button color="light" class="camara" ion-button icon-only (click)="capturarFotoProducto()">\n                        <ion-icon class="icono" name="camera"></ion-icon>\n                    </button>\n                </div>\n              <ion-list>\n              <ion-item class="campo">\n                  <ion-input class="entrada" placeholder="Nombre del Platillo" [disabled]="editar" type="text" [(ngModel)]="producto.nombre" formControlName="platillo" ></ion-input>\n                </ion-item>\n                <ion-item *ngIf="platillo.hasError(\'required\') && platillo.touched">\n                  <p>\n              *Falta Nombre del platillo\n                  </p>\n                  </ion-item>\n                  <ion-item class="campo"> \n                      <ion-input class="entrada" placeholder="Precio" [disabled]="editar" type="text"  [(ngModel)]="producto.precio" formControlName="precio"></ion-input>\n                    </ion-item>\n                    <ion-item *ngIf="precio.hasError(\'required\') && precio.touched">\n                    <p>\n                *Falta Precio\n                    </p>\n                    </ion-item>\n                    <ion-item class="campo"> \n                        <ion-input class="entrada" placeholder="Cantidad" [disabled]="editar" type="text"  [(ngModel)]="producto.cantidad" formControlName="cantidad"></ion-input>\n                      </ion-item>\n                      <ion-item *ngIf="precio.hasError(\'required\') && cantidad.touched">\n                      <p>\n                  *Falta Cantidad\n                      </p>\n                      </ion-item>\n                    <ion-item class="campo">\n                        <ion-input class="entrada" placeholder="Descripción" [disabled]="editar" type="text" [(ngModel)]="producto.descripcion" formControlName="descripcion"></ion-input>\n                      </ion-item>\n                      <ion-item *ngIf="descripcion.hasError(\'required\') && descripcion.touched">\n                        <p>\n                    *Falta Descripcion\n                        </p>\n                        </ion-item>\n            </ion-list>\n          </form>\n\n        <ion-grid>\n  \n        <ion-row>\n              <!-- <ion-fab bottom right>\n        <button ion-fab (click)="agregarProducto($event)">+</button>\n    </ion-fab> -->\n    <!-- <ion-fab vertical="top" horizontal="end" slot="fixed">\n        <ion-fab-button>\n          <ion-icon name="add"></ion-icon>\n        </ion-fab-button>\n      </ion-fab> -->\n<!-- <button ion-button full color="light" (click)="agregarProducto($event)" >\n    Agregar Producto\n  </button> -->\n            <!-- [disabledd]="formGroup.invalid"\n        <button [disabled]="editar" type="submit"  ion-button full color="light" (click)="guardarNegocio($event, negocio)" >\n          Guardar  Negocio\n        </button> -->\n            <button [disabled]="formGroup.invalid" type="submit" ion-button full color="light" (click)="agregarProducto(producto,$event)" >\n              Guardar Producto\n            </button>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/negocio-agregar-producto/negocio-agregar-producto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_elstorapi_elstorapi__["a" /* ElstorapiProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */]])
    ], NegocioAgregarProductoPage);
    return NegocioAgregarProductoPage;
}());

//# sourceMappingURL=negocio-agregar-producto.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pedidos_no_entregados_pedidos_no_entregados__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pedidos_entregados_pedidos_entregados__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pedidos_todos_pedidos_todos__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PedidosPage = /** @class */ (function () {
    function PedidosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_4__models_model__["c" /* User */]();
        this.pedidosTodos = __WEBPACK_IMPORTED_MODULE_5__pedidos_todos_pedidos_todos__["a" /* PedidosTodosPage */];
        this.pedidosEntregados = __WEBPACK_IMPORTED_MODULE_1__pedidos_entregados_pedidos_entregados__["a" /* PedidosEntregadosPage */];
        this.pedidosNoEntregados = __WEBPACK_IMPORTED_MODULE_0__pedidos_no_entregados_pedidos_no_entregados__["a" /* PedidosNoEntregadosPage */];
        this.userModel = navParams.get('item');
    }
    PedidosPage.prototype.ionViewDidLoad = function () { };
    PedidosPage.prototype.ionViewWillEnter = function () {
    };
    PedidosPage.prototype.ionViewWillLeave = function () { };
    PedidosPage.prototype.ionViewWillUnload = function () { };
    PedidosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-pedidos',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/pedidos/pedidos.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Listado de pedidos : {{userModel.nombreUsuario}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-tabs>\n  <ion-tab title="Todos" [root]="pedidosTodos" tabIcon="podium">\n\n  </ion-tab>\n  <ion-tab title="Entregados" [root]="pedidosEntregados" tabIcon="podium">\n\n  </ion-tab>\n  <ion-tab title="No Entregados" [root]="pedidosNoEntregados" tabIcon="podium">\n\n  </ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/pedidos/pedidos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]])
    ], PedidosPage);
    return PedidosPage;
}());

//# sourceMappingURL=pedidos.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosEntregadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PedidosEntregadosPage = /** @class */ (function () {
    function PedidosEntregadosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PedidosEntregadosPage.prototype.ionViewDidLoad = function () {
    };
    PedidosEntregadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pedidos-entregados',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/pedidos-entregados/pedidos-entregados.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Entregados</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <label>\n        <h2>Entregados</h2>\n    </label>\n    <ion-item-divider>\n        <ion-list>\n          <ion-item>\n              listar entregados\n          </ion-item>\n          <ion-item>\n            \n          </ion-item>\n        </ion-list>\n      </ion-item-divider>\n\n</ion-content>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/pedidos-entregados/pedidos-entregados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PedidosEntregadosPage);
    return PedidosEntregadosPage;
}());

//# sourceMappingURL=pedidos-entregados.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosTodosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_elstorapi_elstorapi__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PedidosTodosPage = /** @class */ (function () {
    function PedidosTodosPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
    }
    PedidosTodosPage.prototype.ionViewDidLoad = function () {
        this.items = this.api.obtenerPedidos();
    };
    PedidosTodosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pedidos-todos',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/pedidos-todos/pedidos-todos.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Todos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <label>\n        <h2>Todos</h2>\n    </label>\n\n    <ion-item-divider>\n        <ion-list>\n          <ion-item>\n              Listados de Pedidos en el Sistema\n          </ion-item>\n          <!-- <ion-item>\n          </ion-item> -->\n          <!-- <ion-item class="text" *ngFor="let item of items | async">\n              {{item | json}}\n            </ion-item> -->\n        </ion-list>\n      </ion-item-divider>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/pedidos-todos/pedidos-todos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_elstorapi_elstorapi__["a" /* ElstorapiProvider */]])
    ], PedidosTodosPage);
    return PedidosTodosPage;
}());

//# sourceMappingURL=pedidos-todos.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_elstorapi_elstorapi__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, navParams, formBuilder, alertCtrl, api, toastController, camera, _sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.toastController = toastController;
        this.camera = camera;
        this._sanitizer = _sanitizer;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_2__models_model__["c" /* User */]();
        this.isDisabled = true;
        this.imgSource = '/assets/imgs/user.png';
        this.cameraImg = null;
        this.formGroup = formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(8)]],
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            apellidoPaterno: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            apellidoMaterno: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            nombreUsuario: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            confirmPassword: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            numeroTelefonico: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]]
        });
        this.email = this.formGroup.controls['email'];
        this.password = this.formGroup.controls['password'];
        this.nombre = this.formGroup.controls['nombre'];
        this.apellidoPaterno = this.formGroup.controls['apellidoPaterno'];
        this.apellidoMaterno = this.formGroup.controls['apellidoMaterno'];
        this.nombreUsuario = this.formGroup.controls['nombreUsuario'];
        this.confirmPassword = this.formGroup.controls['confirmPassword'];
        this.numeroTelefonico = this.formGroup.controls['numeroTelefonico'];
        this.userModel = navParams.get('item');
        this.imgSource = this.userModel.fotografia !== '/assets/imgs/user.png' ?
            this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
                + this.userModel.fotografia) : this.imgSource;
    }
    PerfilPage.prototype.ionViewDidLoad = function () { };
    PerfilPage.prototype.ionViewWillEnter = function () {
    };
    PerfilPage.prototype.ionViewWillLeave = function () { };
    PerfilPage.prototype.ionViewWillUnload = function () { };
    PerfilPage.prototype.editarPerfil = function () {
        this.isDisabled = !this.isDisabled;
    };
    PerfilPage.prototype.guardarCambios = function ($event, usr) {
        var toast = this.toastController.create({
            message: 'Connection error...',
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Done'
        });
        var alert = this.alertCtrl.create({
            title: 'Perfil Actualizado',
            subTitle: 'Perfil Actualizado correctamente!',
            buttons: ['Dismiss']
        });
        this.api.actualizarCuenta(usr).subscribe(function (data) {
            if (data.toString() === '0') {
                toast.present().then(function () {
                    toast.dismiss();
                });
            }
            if (data.toString() === '1') {
                alert.present().then(function () {
                });
            }
        }, function (error) { return console.log(error); });
    };
    PerfilPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    PerfilPage.prototype.capturarFoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: false,
            targetHeight: 500,
            targetWidth: 500
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.cameraImg = 'data:image/jpeg;base64,' + imageData;
            ;
            if (_this.cameraImg !== null) {
                _this.imgSource = _this.cameraImg;
            }
        }, function (err) {
            // Handle error
        });
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/perfil/perfil.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Editar Perfil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <div class="user">\n        <img class="imgUser" [src]="imgSource">\n        <button color="light" class="camara" [disabled]="isDisabled" ion-button icon-only (click)="capturarFoto()">\n            <ion-icon class="icono" name="camera"></ion-icon>\n        </button>\n    </div>\n  <form [formGroup]="formGroup">\n    <ion-list class="lista">\n      <ion-item class="campo">\n        <ion-input class="entrada" placeholder="Nombre" type="text" [disabled]="isDisabled" [(ngModel)]="userModel.nombre" formControlName="nombre" ></ion-input>\n      </ion-item>\n            <ion-item *ngIf="nombre.hasError(\'required\') && nombre.touched ">\n            <p>\n      *Valid Name is required\n            </p>\n            </ion-item>\n\n            <ion-item class="campo">\n                <ion-input class="entrada" placeholder="Apellido Paterno" type="text" [disabled]="isDisabled" [(ngModel)]="userModel.apellidoPaterno" formControlName="apellidoPaterno" ></ion-input>\n              </ion-item>\n                <ion-item *ngIf="apellidoPaterno.hasError(\'required\') && apellidoPaterno.touched ">\n                <p>\n          *Valid Name is required\n                </p>\n                </ion-item>\n\n                <ion-item class="campo">\n                    <ion-input class="entrada" placeholder="Apellido Materno" type="text" [disabled]="isDisabled" [(ngModel)]="userModel.apellidoMaterno" formControlName="apellidoMaterno" ></ion-input>\n                  </ion-item>\n                    <ion-item *ngIf="apellidoMaterno.hasError(\'required\') && apellidoMaterno.touched ">\n                    <p>\n              *Valid Name is required\n                    </p>\n                    </ion-item>\n\n                    <ion-item class="campo">\n                        <ion-input class="entrada" placeholder="Nombre de Usuario" type="text" [disabled]="isDisabled" [(ngModel)]="userModel.nombreUsuario" formControlName="nombreUsuario" ></ion-input>\n                      </ion-item>\n                        <ion-item *ngIf="nombreUsuario.hasError(\'required\') && nombreUsuario.touched ">\n                        <p>\n                  *Valid User Name is required\n                        </p>\n                        </ion-item>\n\n                        <ion-item class="campo">\n                            <ion-input class="entrada" placeholder="Contraseña" type="password" [disabled]="isDisabled" [(ngModel)]="userModel.password" formControlName="password"></ion-input>\n                          </ion-item>\n                          <ion-item *ngIf="password.hasError(\'required\') && password.touched">\n                            <p>\n                        *Type a valid password\n                            </p>\n                            </ion-item>\n\n                            <ion-item class="campo">\n                                <ion-input class="entrada" placeholder="Confirmar Contraseña" appConfirmEqualValidator="password" type="password" [disabled]="isDisabled" [(ngModel)]="userModel.confirmPassword" formControlName="confirmPassword"></ion-input>\n                              </ion-item>\n                              <ion-item *ngIf="confirmPassword.hasError(\'required\') && confirmPassword.touched">\n                                <p>\n                            *Type a valid password\n                                </p>\n                                </ion-item>\n                                <ion-item *ngIf="confirmPassword.touched && confirmPassword.errors?.notEqual">\n                                    <p>\n                                *Passwords does not match\n                                    </p>\n                                    </ion-item>\n\n      <ion-item class="campo">\n        <ion-input class="entrada" placeholder="Correo" type="email" [disabled]="isDisabled" [(ngModel)]="userModel.email" formControlName="email" ></ion-input>\n      </ion-item>\n        <ion-item *ngIf="(email.hasError(\'required\') && email.touched)">\n        <p>\n  *Valid email is required\n        </p>\n        </ion-item>\n\n        <ion-item class="campo">\n            <ion-input class="entrada" placeholder="Numero Telefonico" type="number" [disabled]="isDisabled" [(ngModel)]="userModel.numeroTelefonico" formControlName="numeroTelefonico" ></ion-input>\n          </ion-item>\n            <ion-item *ngIf="numeroTelefonico.hasError(\'required\') && numeroTelefonico.touched ">\n            <p>\n      *Valid phone number is required\n            </p>\n            </ion-item>\n            <br/>\n    </ion-list>\n  <ion-grid>\n    <ion-row>\n        <button ion-button full color="light" (click)="editarPerfil()" >\n            Editar Perfil\n        </button>\n    </ion-row>\n  <ion-row>\n  <button type="submit"  [disabled]="formGroup.invalid" ion-button full color="light" (click)="guardarCambios($event, userModel)" >\n    Guardar cambios\n  </button>\n  </ion-row>\n  </ion-grid>\n\n  </form>\n\n  </ion-content>\n\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/perfil/perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_elstorapi_elstorapi__["a" /* ElstorapiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperarcuentaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_elstorapi_elstorapi__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RecuperarcuentaPage = /** @class */ (function () {
    function RecuperarcuentaPage(navCtrl, navParams, formBuilder, api, alertCtrl, toastController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_4__models_model__["c" /* User */]();
        this.formGroup = formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(8)]],
            confirmPassword: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(8)]]
        });
        this.email = this.formGroup.controls['email'];
        this.password = this.formGroup.controls['password'];
        this.confirmPassword = this.formGroup.controls['confirmPassword'];
    }
    RecuperarcuentaPage.prototype.ionViewDidLoad = function () { };
    RecuperarcuentaPage.prototype.ionViewWillEnter = function () {
    };
    RecuperarcuentaPage.prototype.ionViewWillLeave = function () { };
    RecuperarcuentaPage.prototype.ionViewWillUnload = function () { };
    RecuperarcuentaPage.prototype.guardaContrasena = function ($event, usr) {
        var _this = this;
        var title = '';
        var subTitle = '';
        this.userModel = usr;
        this.api.recuperarCuenta(usr).subscribe(function (data) {
            title = data.toString() === '1' ? 'Cuenta Recuperada' :
                data.toString() === '0' ? 'El correo no existe' :
                    'Ocurrio un error';
            subTitle = data.toString() === '1' ? 'Se recupero correctamente su cuenta!' :
                data.toString() === '0' ? 'El correo ' + _this.userModel.email + ' no existe' :
                    data.toString();
            var alert = _this.alertCtrl.create({
                title: title,
                subTitle: subTitle,
                buttons: [{
                        text: 'Ok',
                        handler: function () {
                            if (title == 'Cuenta Recuperada') {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
                            }
                        }
                    }]
            });
            alert.present().then(function () {
            });
        }, function (error) {
            error;
        });
    };
    RecuperarcuentaPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    RecuperarcuentaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-recuperarcuenta',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/recuperarcuenta/recuperarcuenta.html"*/'<ion-header>\n  <ion-toolbar color="secondary">\n      <ion-navbar>\n        <ion-title primary>Recuperar Cuenta</ion-title>\n\n        </ion-navbar>\n  </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n    <div class="user">\n        <img class="imgUser" src="/assets/imgs/user.png">\n    </div>\n  <form [formGroup]="formGroup">\n    <ion-list>\n      <ion-item class="campo">\n        <ion-input class="correo-input" placeholder="Correo" type="email" [(ngModel)]="userModel.email" formControlName="email" ></ion-input>\n      </ion-item>\n        <ion-item *ngIf="email.hasError(\'required\') && email.touched ">\n        <p>\n*Valid email is required\n        </p>\n        </ion-item>\n      <ion-item class="campo">\n        <ion-input class="contraseña-input" placeholder="Contraseña" type="password" [(ngModel)]="userModel.password" formControlName="password"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="password.hasError(\'required\') && password.touched">\n        <p>\n    *Valid password is required\n        </p>\n        </ion-item>\n        <ion-item class="campo">\n          <ion-input class="confirm-input" placeholder="Confirmar contraseña" appConfirmEqualValidator="password" type="password" [(ngModel)]="userModel.confirmPassword" formControlName="confirmPassword"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="confirmPassword.hasError(\'required\') && confirmPassword.touched">\n          <p>\n      *Valid password is required\n          </p>\n          </ion-item>\n          <ion-item *ngIf="confirmPassword.touched && confirmPassword.errors?.notEqual">\n              <p>\n          *Passwords does not match\n              </p>\n              </ion-item>\n    </ion-list>\n<ion-grid>\n<ion-row>\n  <button type="submit"  [disabled]="formGroup.invalid" ion-button full  color="light" (click)="guardaContrasena($event, userModel)" >\n    Guardar Contrasena\n</button>\n</ion-row>\n</ion-grid>\n\n  </form>\n</ion-content>\n\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/recuperarcuenta/recuperarcuenta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_elstorapi_elstorapi__["a" /* ElstorapiProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]])
    ], RecuperarcuentaPage);
    return RecuperarcuentaPage;
}());

//# sourceMappingURL=recuperarcuenta.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inicio_inicio__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_elstorapi_elstorapi__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, formBuilder, api, alertCtrl, toastController, loadingCtrl, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_3__models_model__["c" /* User */]();
        this.imgSource = '/assets/imgs/user.png';
        this.cameraImg = null;
        this.formGroup = formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(8)]],
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            apellidoPaterno: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            apellidoMaterno: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            nombreUsuario: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            confirmPassword: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            numeroTelefonico: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]]
        });
        this.email = this.formGroup.controls['email'];
        this.password = this.formGroup.controls['password'];
        this.nombre = this.formGroup.controls['nombre'];
        this.apellidoPaterno = this.formGroup.controls['apellidoPaterno'];
        this.apellidoMaterno = this.formGroup.controls['apellidoMaterno'];
        this.nombreUsuario = this.formGroup.controls['nombreUsuario'];
        this.confirmPassword = this.formGroup.controls['confirmPassword'];
        this.numeroTelefonico = this.formGroup.controls['numeroTelefonico'];
    }
    RegisterPage.prototype.ionViewDidLoad = function () { };
    RegisterPage.prototype.ionViewWillEnter = function () {
    };
    RegisterPage.prototype.ionViewWillLeave = function () { };
    RegisterPage.prototype.ionViewWillUnload = function () { };
    RegisterPage.prototype.crearCuenta = function ($event, usr) {
        var _this = this;
        var title = '';
        var subTitle = '';
        this.userModel = usr;
        this.userModel.fotografia = this.imgSource;
        debugger;
        this.api.registrarUsuario(usr).subscribe(function (data) {
            debugger;
            title = data !== null ? 'Usuario Creado' :
                data === null ? 'El correo ya esta registrado' :
                    'Ocurrio un error';
            subTitle = data !== null ? 'Usuario registrado correctamente!' :
                data === null ? 'Ya existe una cuenta asociada al correo electrònico ' + _this.userModel.email :
                    data.toString();
            var alert = _this.alertCtrl.create({
                title: title,
                subTitle: subTitle,
                buttons: [{
                        text: 'Ok',
                        handler: function () {
                            if (data !== null) {
                                var loader_1 = _this.loadingCtrl.create({
                                    content: 'Iniciando sesion...'
                                });
                                loader_1.present().then(function () {
                                    loader_1.dismiss();
                                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__inicio_inicio__["a" /* InicioPage */], { item: _this.userModel });
                                });
                            }
                        }
                    }]
            });
            alert.present().then(function () {
            });
        }, function (error) {
            error;
        });
    };
    RegisterPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    RegisterPage.prototype.capturarFoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.cameraImg = 'data:image/jpeg;base64,' + imageData;
            ;
            if (_this.cameraImg !== null) {
                _this.imgSource = _this.cameraImg;
            }
            // let base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/register/register.html"*/'<ion-header>\n    <ion-toolbar color="secondary">\n      <ion-navbar>\n        <ion-title primary>Pagina de Registro</ion-title>\n          </ion-navbar>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="user">\n        <img class="imgUser" [src]="imgSource">\n        <button color="light" class="camara" ion-button icon-only (click)="capturarFoto()">\n            <ion-icon class="icono" name="camera"></ion-icon>\n        </button>\n    </div>\n\n<form [formGroup]="formGroup">\n  <ion-list>\n      <ion-item class="campo">\n          <ion-input class="entrada" placeholder="Nombre" type="text" [(ngModel)]="userModel.nombre" formControlName="nombre" ></ion-input>\n        </ion-item>\n          <ion-item *ngIf="nombre.hasError(\'required\') && nombre.touched ">\n          <p>\n    *Nombre es requerido\n          </p>\n          </ion-item>\n\n          <ion-item class="campo">\n              <ion-input class="entrada" placeholder="Apellido Paterno" type="text" [(ngModel)]="userModel.apellidoPaterno" formControlName="apellidoPaterno" ></ion-input>\n            </ion-item>\n              <ion-item *ngIf="apellidoPaterno.hasError(\'required\') && apellidoPaterno.touched ">\n              <p>\n        *Apellido Paterno es requerido\n              </p>\n              </ion-item>\n\n              <ion-item class="campo">\n                  <ion-input class="entrada" placeholder="Apeliido Materno" type="text" [(ngModel)]="userModel.apellidoMaterno" formControlName="apellidoMaterno" ></ion-input>\n                </ion-item>\n                  <ion-item *ngIf="apellidoMaterno.hasError(\'required\') && apellidoMaterno.touched ">\n                  <p>\n            *Apellido Materno es requerido\n                  </p>\n                  </ion-item>\n\n                  <ion-item class="campo">\n                      <ion-input class="entrada" placeholder="Nombre de Usuario" type="text" [(ngModel)]="userModel.nombreUsuario" formControlName="nombreUsuario" ></ion-input>\n                    </ion-item>\n                      <ion-item *ngIf="nombreUsuario.hasError(\'required\') && nombreUsuario.touched ">\n                      <p>\n                *Nombre de Usuario es requerido\n                      </p>\n                      </ion-item>\n\n                      <ion-item class="campo">\n                          <ion-input class="entrada" placeholder="Contraseña" type="password" [(ngModel)]="userModel.password" formControlName="password"></ion-input>\n                        </ion-item>\n                        <ion-item *ngIf="password.hasError(\'required\') && password.touched">\n                          <p>\n                      *Contraseña invalida\n                          </p>\n                          </ion-item>\n\n                          <ion-item class="campo">\n                              <ion-input class="entrada" placeholder="Confirmar Contraseña" appConfirmEqualValidator="password" type="password" [(ngModel)]="userModel.confirmPassword" formControlName="confirmPassword"></ion-input>\n                            </ion-item>\n                            <ion-item *ngIf="confirmPassword.hasError(\'required\') && confirmPassword.touched">\n                              <p>\n                          *Contraseña invalida\n                              </p>\n                              </ion-item>\n                              <ion-item *ngIf="confirmPassword.touched && confirmPassword.errors?.notEqual">\n                                  <p>\n                              *Contraseñas no son iguales\n                                  </p>\n                                  </ion-item>\n\n    <ion-item class="campo">\n      <ion-input class="entrada" placeholder="Correo" type="email" [(ngModel)]="userModel.email" formControlName="email" ></ion-input>\n    </ion-item>\n      <ion-item *ngIf="(email.hasError(\'required\') && email.touched)">\n      <p>\n*Correo es requerido\n      </p>\n      </ion-item>\n\n      <ion-item class="campo">\n          <ion-input class="entrada" placeholder="Número Telefonico" type="number" [(ngModel)]="userModel.numeroTelefonico" formControlName="numeroTelefonico" ></ion-input>\n        </ion-item>\n          <ion-item *ngIf="numeroTelefonico.hasError(\'required\') && numeroTelefonico.touched ">\n          <p>\n    *Telefono es requerido\n          </p>\n          </ion-item>\n\n  </ion-list>\n<ion-grid>\n<ion-row>\n<button type="submit"  [disabled]="formGroup.invalid" ion-button full color="light" (click)="crearCuenta($event, userModel)" >\n  Crear Cuenta\n</button>\n</ion-row>\n</ion-grid>\n\n</form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_elstorapi_elstorapi__["a" /* ElstorapiProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 242;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Negocio; });
/* unused harmony export CatNegocio */
/* unused harmony export SubCatNegocio */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Producto; });
var User = /** @class */ (function () {
    function User() {
        this.clientid = "";
        this.nombre = "";
        this.apellidoPaterno = "";
        this.apellidoMaterno = "";
        this.nombreUsuario = "";
        this.password = "";
        this.confirmPassword = "";
        this.email = "";
        this.numeroTelefonico = "";
        this.fotografia = "";
    }
    return User;
}());

var Negocio = /** @class */ (function () {
    function Negocio() {
        this.clientid = "";
        this.string = "";
        this.nombre = "";
        this.callenumero = "";
        this.colonia = "";
        this.ciudad = "";
        this.estado = "";
        this.codigopostal = "";
        this.horaapertura = "";
        this.horacierre = "";
        this.categoria = "";
        this.FK_subcategoria = -1;
        this.descripcion = "";
        this.latitud = "";
        this.longitud = "";
        this.active = 1;
        this.fotografia = "";
        this.fotografia2 = "";
        this.id_negocio = 0;
    }
    return Negocio;
}());

var CatNegocio = /** @class */ (function () {
    function CatNegocio() {
        this.id_catNegocio = -1;
        this.nombre = "";
        this.descripcion = "";
    }
    return CatNegocio;
}());

var SubCatNegocio = /** @class */ (function () {
    function SubCatNegocio() {
        this.nombre = "";
        this.descripcion = "";
        this.fK_CATNEGOCIO = -1;
    }
    return SubCatNegocio;
}());

var Producto = /** @class */ (function () {
    function Producto() {
        this.id_producto = 0;
        this.nombre = "";
        this.descripcion = "";
        this.clave = "";
        this.estatus = 1;
        this.fotografia = "";
        this.cantidad = null;
        this.precio = null;
        this.negocioid = null;
    }
    return Producto;
}());

//# sourceMappingURL=model.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElstorapiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__ = __webpack_require__(399);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// local
var baseurlRegistro = "https://localhost:5001/api/registro/usuario";
var baseurlActualizar = "https://localhost:5001/api/cuenta/actualizar";
var baseurlLogin = "https://localhost:5001/api/usuario/inicio";
var baseurlRecuperar = "https://localhost:5001/api/cuenta/recuperar";
var baseurlNegocio = "https://localhost:5001/api/negocio/agregar";
var baseurlNegocioEditar = "https://localhost:5001/api/negocio/editar";
var baseurlNegocioObtener = "https://localhost:5001/api/negocio/obtener";
var baseurlCatNegocio = "https://localhost:5001/api/negocio/catnegocio";
var baseurlSubCatNegocio = "https://localhost:5001/api/negocio/subcatnegocio";
var baseurlProductoObtener = "https://localhost:5001/api/negocio/producto/obtener";
var baseurlProductoAgregar = "https://localhost:5001/api/negocio/producto/agregar";
var baseurlProductoBorrar = "https://localhost:5001/api/negocio/producto/borrar";
// aws
// const baseurlRegistro: string = "http://ec2-18-144-23-36.us-west-1.compute.amazonaws.com:5000/api/registro/usuario";
// const baseurlActualizar: string = "http://ec2-18-144-23-36.us-west-1.compute.amazonaws.com:5000/api/cuenta/actualizar";
// const baseurlLogin: string = "http://ec2-18-144-23-36.us-west-1.compute.amazonaws.com:5000/api/usuario/inicio";
// const baseurlRecuperar: string = "http://ec2-18-144-23-36.us-west-1.compute.amazonaws.com:5000/api/cuenta/recuperar";
// const baseurlNegocioEditar: string = "http://ec2-18-144-23-36.us-west-1.compute.amazonaws.com:5000/api/negocio/editar";
// const baseurlNegocio: string = "http://ec2-18-144-23-36.us-west-1.compute.amazonaws.com:5000/api/negocio/agregar";
// const baseurlNegocioObtener: string = "http://ec2-18-144-23-36.us-west-1.compute.amazonaws.com:5000/api/negocio/obtener";
// const baseurlCatNegocio: string = "http://ec2-18-144-23-36.us-west-1.compute.amazonaws.com:5000/api/negocio/catnegocio";
// const baseurlSubCatNegocio: string = "http://ec2-18-144-23-36.us-west-1.compute.amazonaws.com:5000/api/negocio/subcatnegocio";
// const baseurlProductoObtener: string = "http://ec2-18-144-23-36.us-west-1.compute.amazonaws.com:5000/api/negocio/producto/obtener";
// const baseurlProductoAgregar: string = "http://ec2-18-144-23-36.us-west-1.compute.amazonaws.com:5000/api/negocio/producto/agregar";
var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var ElstorapiProvider = /** @class */ (function () {
    function ElstorapiProvider(http, afAuth, afDB) {
        var _this = this;
        this.http = http;
        this.afAuth = afAuth;
        this.afDB = afDB;
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    ElstorapiProvider.prototype.obtenerPedidos = function () {
        this.items = this.afDB.list('/pedidos').valueChanges();
        return this.items.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
        }));
        ;
    };
    ElstorapiProvider.prototype.registrarUsuario = function (usr) {
        var userModel = JSON.stringify(usr);
        return this.http.post(baseurlRegistro, userModel, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
        }));
    };
    ElstorapiProvider.prototype.actualizarCuenta = function (usr) {
        var userModel = JSON.stringify(usr);
        return this.http.post(baseurlActualizar, userModel, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
        }));
    };
    ElstorapiProvider.prototype.recuperarCuenta = function (usr) {
        var userModel = JSON.stringify(usr);
        return this.http.post(baseurlRecuperar, userModel, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
        }));
    };
    ElstorapiProvider.prototype.inicarSesion = function (usr) {
        var userModel = JSON.stringify(usr);
        return this.http.post(baseurlLogin, userModel, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
        }));
    };
    ElstorapiProvider.prototype.agregarNegocio = function (biz) {
        var negocioModel = JSON.stringify(biz);
        return this.http.post(baseurlNegocio, negocioModel, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
        }));
    };
    ElstorapiProvider.prototype.editarNegocio = function (biz) {
        var negocioModel = JSON.stringify(biz);
        return this.http.post(baseurlNegocioEditar, negocioModel, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
        }));
    };
    ElstorapiProvider.prototype.obtenerNegocio = function (clientid) {
        var id = JSON.stringify(clientid);
        return this.http.post(baseurlNegocioObtener, id, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
        }));
    };
    ElstorapiProvider.prototype.getCatNegocio = function () {
        return this.http.post(baseurlCatNegocio, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
        }));
    };
    ElstorapiProvider.prototype.getSubCatNegocio = function (id) {
        return this.http.post(baseurlSubCatNegocio, id, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
        }));
    };
    ElstorapiProvider.prototype.getProductos = function (negocio) {
        return this.http.post(baseurlProductoObtener, negocio, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
        }));
    };
    ElstorapiProvider.prototype.agregarProducto = function (prod) {
        var prodModel = JSON.stringify(prod);
        debugger;
        return this.http.post(baseurlProductoAgregar, prodModel, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
        }));
    };
    ElstorapiProvider.prototype.borrarProducto = function (prod) {
        var prodModel = JSON.stringify(prod);
        debugger;
        return this.http.post(baseurlProductoBorrar, prodModel, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
        }));
    };
    ElstorapiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], ElstorapiProvider);
    return ElstorapiProvider;
}());

//# sourceMappingURL=elstorapi.js.map

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/inicio/inicio.module": [
		881,
		13
	],
	"../pages/login/login.module": [
		882,
		12
	],
	"../pages/negocio-agregar-producto/negocio-agregar-producto.module": [
		883,
		11
	],
	"../pages/negocio-detalle-editar/negocio-detalle-editar.module": [
		894,
		10
	],
	"../pages/negocio-detalle/negocio-detalle.module": [
		884,
		9
	],
	"../pages/negocios/negocios.module": [
		885,
		8
	],
	"../pages/nuevonegocio/nuevonegocio.module": [
		886,
		7
	],
	"../pages/pedidos-entregados/pedidos-entregados.module": [
		887,
		6
	],
	"../pages/pedidos-no-entregados/pedidos-no-entregados.module": [
		888,
		5
	],
	"../pages/pedidos-todos/pedidos-todos.module": [
		889,
		4
	],
	"../pages/pedidos/pedidos.module": [
		890,
		3
	],
	"../pages/perfil/perfil.module": [
		891,
		2
	],
	"../pages/recuperarcuenta/recuperarcuenta.module": [
		892,
		1
	],
	"../pages/register/register.module": [
		893,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 286;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_elstorapi_elstorapi__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapPage = /** @class */ (function () {
    function MapPage(api, navParams, geolocation) {
        this.api = api;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.negocioModel = new __WEBPACK_IMPORTED_MODULE_0__models_model__["a" /* Negocio */]();
        this.negocioModel = navParams.get('item');
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    MapPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(_this.negocioModel.latitud, _this.negocioModel.longitud);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                markerLabel: _this.negocioModel.callenumero
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Como llegar a : {{negocioModel.nombre}} </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- <ion-content>\n    <agm-map [streetViewControl]="false" [disableDefaultUI]="true" [latitude]="map.lat" [longitude]="map.lng" [zoom]="map.zoom">\n\n  </agm-map> -->\n  <ion-content>\n      <div #map id="map"></div>\n    </ion-content>\n\n<!-- </ion-content> -->\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_elstorapi_elstorapi__["a" /* ElstorapiProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_register__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goToLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.goToRegisterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__register_register__["a" /* RegisterPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/home/home.html"*/'\n<ion-content padding>\n\n    <img class="logo" src="/assets/imgs/ElEstorLogoCuadroyAza.png" >\n\n<ion-grid>\n<ion-row>\n    <p >\n        Bienvenido, desde aqui podras administrar tu negocio\n    </p>\n</ion-row>\n<ion-row>\n  <ion-col >\n      <button clear ion-button full (click)="goToLoginPage()">\n          Inciar Sesion\n        </button>\n  </ion-col>\n  <ion-col>\n      <button ion-button full (click)="goToRegisterPage()">\n          Registrarse\n        </button>\n    </ion-col>\n</ion-row>\n<ion-row>\n    <ion-footer>\n      <p text-center>Powered by</p>\n      <p text-center>Lex Software S.A. de C.V. All Rights Reserved 2019</p>\n    </ion-footer>\n</ion-row>\n\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(464);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_pedidos_no_entregados_pedidos_no_entregados__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_negocio_detalle_editar_negocio_detalle_editar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_map_map__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_negocio_agregar_producto_negocio_agregar_producto__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_negocio_detalle_negocio_detalle__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_nuevonegocio_nuevonegocio__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_negocios_negocios__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_inicio_inicio__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__agm_core__ = __webpack_require__(872);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_register_register__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_recuperarcuenta_recuperarcuenta__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_elstorapi_elstorapi__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_password_validator__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_perfil_perfil__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_pedidos_pedidos__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_camera__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_pedidos_todos_pedidos_todos__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_pedidos_entregados_pedidos_entregados__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2__ = __webpack_require__(879);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_fire_database__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__config__ = __webpack_require__(880);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_10__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_recuperarcuenta_recuperarcuenta__["a" /* RecuperarcuentaPage */],
                __WEBPACK_IMPORTED_MODULE_21__shared_password_validator__["a" /* ConfirmEqualValidatorDirective */],
                __WEBPACK_IMPORTED_MODULE_7__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_negocios_negocios__["a" /* NegociosPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_pedidos_pedidos__["a" /* PedidosPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_nuevonegocio_nuevonegocio__["a" /* NuevonegocioPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_negocio_detalle_negocio_detalle__["a" /* NegocioDetallePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_negocio_agregar_producto_negocio_agregar_producto__["a" /* NegocioAgregarProductoPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_negocio_detalle_editar_negocio_detalle_editar__["a" /* NegocioDetalleEditarPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_pedidos_todos_pedidos_todos__["a" /* PedidosTodosPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_pedidos_entregados_pedidos_entregados__["a" /* PedidosEntregadosPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_pedidos_no_entregados_pedidos_no_entregados__["a" /* PedidosNoEntregadosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/negocio-agregar-producto/negocio-agregar-producto.module#NegocioAgregarProductoPageModule', name: 'NegocioAgregarProductoPage', segment: 'negocio-agregar-producto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/negocio-detalle/negocio-detalle.module#NegocioDetallePageModule', name: 'NegocioDetallePage', segment: 'negocio-detalle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/negocios/negocios.module#NegociosPageModule', name: 'NegociosPage', segment: 'negocios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevonegocio/nuevonegocio.module#NuevonegocioPageModule', name: 'NuevonegocioPage', segment: 'nuevonegocio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedidos-entregados/pedidos-entregados.module#PedidosEntregadosPageModule', name: 'PedidosEntregadosPage', segment: 'pedidos-entregados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedidos-no-entregados/pedidos-no-entregados.module#PedidosNoEntregadosPageModule', name: 'PedidosNoEntregadosPage', segment: 'pedidos-no-entregados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedidos-todos/pedidos-todos.module#PedidosTodosPageModule', name: 'PedidosTodosPage', segment: 'pedidos-todos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedidos/pedidos.module#PedidosPageModule', name: 'PedidosPage', segment: 'pedidos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recuperarcuenta/recuperarcuenta.module#RecuperarcuentaPageModule', name: 'RecuperarcuentaPage', segment: 'recuperarcuenta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/negocio-detalle-editar/negocio-detalle-editar.module#NegocioDetalleEditarPageModule', name: 'NegocioDetalleEditarPage', segment: 'negocio-detalle-editar', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__agm_core__["a" /* AgmCoreModule */].forRoot({ apiKey: 'AIzaSyC49V2M_OYaf8GfKsXN6_Nk-pf50Y5ulcA' }),
                __WEBPACK_IMPORTED_MODULE_28_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_31__config__["a" /* fireBaseConfig */].fire)
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_recuperarcuenta_recuperarcuenta__["a" /* RecuperarcuentaPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_negocios_negocios__["a" /* NegociosPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_pedidos_pedidos__["a" /* PedidosPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_nuevonegocio_nuevonegocio__["a" /* NuevonegocioPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_negocio_detalle_negocio_detalle__["a" /* NegocioDetallePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_negocio_agregar_producto_negocio_agregar_producto__["a" /* NegocioAgregarProductoPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_negocio_detalle_editar_negocio_detalle_editar__["a" /* NegocioDetalleEditarPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_pedidos_todos_pedidos_todos__["a" /* PedidosTodosPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_pedidos_entregados_pedidos_entregados__["a" /* PedidosEntregadosPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_pedidos_no_entregados_pedidos_no_entregados__["a" /* PedidosNoEntregadosPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_10__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_elstorapi_elstorapi__["a" /* ElstorapiProvider */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_30__angular_fire_database__["a" /* AngularFireDatabase */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_10__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 877:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(458);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmEqualValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmEqualValidatorDirective = /** @class */ (function () {
    function ConfirmEqualValidatorDirective() {
    }
    ConfirmEqualValidatorDirective_1 = ConfirmEqualValidatorDirective;
    ConfirmEqualValidatorDirective.prototype.validate = function (control) {
        var controlToCompare = control.parent.get(this.appConfirmEqualValidator);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ConfirmEqualValidatorDirective.prototype, "appConfirmEqualValidator", void 0);
    ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */])({
            selector: '[appConfirmEqualValidator]',
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* NG_VALIDATORS */],
                    useExisting: ConfirmEqualValidatorDirective_1,
                    multi: true
                }]
        })
    ], ConfirmEqualValidatorDirective);
    return ConfirmEqualValidatorDirective;
    var ConfirmEqualValidatorDirective_1;
}());

//# sourceMappingURL=password-validator.js.map

/***/ }),

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fireBaseConfig; });
var fireBaseConfig = {
    fire: {
        apiKey: "AIzaSyBBpfZ5-RiG2fGwpWFCSimR2CFtXXnTGJI",
        authDomain: "el-estor.firebaseapp.com",
        databaseURL: "https://el-estor.firebaseio.com",
        projectId: "el-estor",
        storageBucket: "el-estor.appspot.com",
        messagingSenderId: "524940257833",
        appId: "1:524940257833:web:c54ca1c9550dc4c9"
    }
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegociosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nuevonegocio_nuevonegocio__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_elstorapi_elstorapi__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__negocio_detalle_negocio_detalle__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NegociosPage = /** @class */ (function () {
    function NegociosPage(navCtrl, navParams, api, alertCtrl, loadingCtrl, toastController, _sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastController = toastController;
        this._sanitizer = _sanitizer;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_3__models_model__["c" /* User */]();
        this.negocioModel = new __WEBPACK_IMPORTED_MODULE_3__models_model__["a" /* Negocio */]();
        this.mostrarDiv = false;
        this.clientid = '';
        this.message = "Obteniendo listado de negocios..";
        this.imgSourceNeg = '/assets/imgs/tienda-online-icono-png.png';
        this.imgSource = '/assets/imgs/tienda-online-icono-png.png';
        this.enableButton = true;
        this.userModel = navParams.get('item');
        this.clientid = this.userModel.clientid;
    }
    NegociosPage.prototype.ionViewDidLoad = function () { };
    NegociosPage.prototype.ionViewWillEnter = function () {
        this.getNegocios();
    };
    NegociosPage.prototype.ionViewWillLeave = function () { };
    NegociosPage.prototype.ionViewWillUnload = function () { };
    NegociosPage.prototype.agregarNegocio = function ($event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__nuevonegocio_nuevonegocio__["a" /* NuevonegocioPage */], { item: this.userModel });
    };
    NegociosPage.prototype.negocioDetalle = function (biz) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__negocio_detalle_negocio_detalle__["a" /* NegocioDetallePage */], { item: biz });
    };
    NegociosPage.prototype.getNegocios = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: this.message
        });
        var toast = this.toastController.create({
            message: 'Connection error...',
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Ok'
        });
        loader.present().then(function () {
            _this.api.obtenerNegocio(_this.clientid).subscribe(function (data) {
                if (data !== null) {
                    _this.negocioModel = data[0];
                    _this.imgSourceNeg = data[0].fotografia !== '/assets/imgs/tienda-online-icono-png.png' ?
                        _this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
                            + data[0].fotografia) : _this.imgSourceNeg;
                    if (data.length == 0) {
                        _this.enableButton = true;
                        console.log(data);
                    }
                    else {
                        _this.enableButton = false;
                    }
                }
                else {
                    toast.present().then(function () {
                        toast.dismiss();
                    });
                }
            }, function (error) {
                console.log(error);
            });
            loader.dismiss();
        });
    };
    NegociosPage.prototype.borrar = function (bzz) {
    };
    NegociosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-negocios',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/negocios/negocios.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Listado de negocios : {{userModel.nombreUsuario}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content >\n    <div class="user">\n        <img class="imgUser" [src]="imgSource">\n        <h2 class="nomCliente">{{userModel.apellidoPaterno}} {{userModel.apellidoMaterno}} {{userModel.nombre}}</h2>\n    </div>\n\n   <h2 class="titNeg">Mis Negocios</h2> \n  <ion-list>\n    <!-- <ion-item *ngFor="let biz of negocioModel" class="contNeg" (click)="negocioDetalle(biz)"> -->\n    <ion-item class="contNeg" (click)="negocioDetalle(negocioModel)">\n        <ion-thumbnail item-start class="logo">\n            <img [src]="imgSourceNeg">\n          </ion-thumbnail>\n          <h2 class="nombreNeg">{{negocioModel.nombre}}</h2>\n          <div class="contenedorEstrellas">\n              <ion-icon class="estrella" name=\'star\'></ion-icon>\n              <ion-icon class="estrella" name=\'star\'></ion-icon>\n              <ion-icon class="estrella" name=\'star\'></ion-icon>\n              <ion-icon class="estrella" name=\'star\'></ion-icon>\n              <ion-icon class="estrella" name=\'star\'></ion-icon>\n            </div>\n      </ion-item>\n\n  </ion-list>\n\n  <ion-fab right bottom (click)="agregarNegocio($event)">\n      <button *ngIf="enableButton" ion-fab ><ion-icon class="more" name="add"></ion-icon></button>\n  </ion-fab> \n</ion-content>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/mobile-app/migue/src/pages/negocios/negocios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_elstorapi_elstorapi__["a" /* ElstorapiProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */]])
    ], NegociosPage);
    return NegociosPage;
}());

//# sourceMappingURL=negocios.js.map

/***/ })

},[459]);
//# sourceMappingURL=main.js.map