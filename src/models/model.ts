
export class User
{
  clientid:string = "";
  nombre: string = "";
  apellidoPaterno: string = "";
  apellidoMaterno: string = "";
  nombreUsuario:string = "";
  password: string = "";
  confirmPassword: string = "";
  email : string = "";
  numeroTelefonico:string = "";
  negocio: Negocio[];
  fotografia: string = "";

  constructor()
  {

  }
}

export class Negocio
{
    clientid: string = "";
    negocioid; string = "";
    nombre:string = "";
    callenumero:string = "";
    colonia:string = "";
    ciudad:string = "";
    estado:string = "";
    codigopostal:string = "";
    horaapertura:string = "";
    horacierre:string = "";
    categoria:string = "";
    FK_subcategoria:number = -1;
    descripcion:string = "";
    latitud:string = "";
    longitud:string = "";
    active:number = 1;
    fotografia:string = "";
    fotografia2:string = "";
    id_negocio:number = 0;

    constructor()
  {

  }
}

export class CatNegocio
{
   id_catNegocio:number = -1;
   nombre:string = "";
   descripcion:string = "";

   constructor()
  {

  }
}

export class SubCatNegocio
{
   nombre:string = "";
   descripcion: string = "";
   fK_CATNEGOCIO:number = -1;

   constructor()
  {

  }
}

export class Producto
{
  id_producto:number = 0;
  nombre: string = "";
  descripcion: string = "";
  clave:string = "";
  estatus: number = 1;
  fotografia: string = "";
  cantidad: number = null;
  precio: number = null;
  negocioid: string =  null;
}

