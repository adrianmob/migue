import { Observable } from 'rxjs/Observable';
import { User, Negocio, CatNegocio, SubCatNegocio, Producto } from './../../models/model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';

// local

 const baseurlRegistro: string = "https://localhost:5001/api/registro/usuario";
 const baseurlActualizar: string = "https://localhost:5001/api/cuenta/actualizar";
 const baseurlLogin: string = "https://localhost:5001/api/usuario/inicio";
 const baseurlRecuperar: string = "https://localhost:5001/api/cuenta/recuperar";

 const baseurlNegocio: string = "https://localhost:5001/api/negocio/agregar";
 const baseurlNegocioEditar: string = "https://localhost:5001/api/negocio/editar";
 const baseurlNegocioObtener: string = "https://localhost:5001/api/negocio/obtener";
 const baseurlCatNegocio: string = "https://localhost:5001/api/negocio/catnegocio";
 const baseurlSubCatNegocio: string = "https://localhost:5001/api/negocio/subcatnegocio";

 const baseurlProductoObtener: string = "https://localhost:5001/api/negocio/producto/obtener";
 const baseurlProductoAgregar: string = "https://localhost:5001/api/negocio/producto/agregar";

// aws

// const baseurlRegistro: string = "https://ec2-54-183-223-34.us-west-1.compute.amazonaws.com/api/registro/usuario";
// const baseurlActualizar: string = "https://ec2-52-53-196-2.us-west-1.compute.amazonaws.com/api/cuenta/actualizar";
// const baseurlLogin: string = "https://ec2-54-183-223-34.us-west-1.compute.amazonaws.com/api/usuario/inicio";
// const baseurlRecuperar: string = "https://ec2-52-53-196-2.us-west-1.compute.amazonaws.com/api/cuenta/recuperar";
// const baseurlNegocio: string = "https://ec2-52-53-196-2.us-west-1.compute.amazonaws.com/api/negocio/agregar";
// const baseurlNegocioObtener: string = "https://ec2-52-53-196-2.us-west-1.compute.amazonaws.com/api/negocio/obtener";
// const baseurlCatNegocio: string = "https://ec2-52-53-196-2.us-west-1.compute.amazonaws.com/api/negocio/catnegocio";
// const baseurlSubCatNegocio: string = "https://ec2-52-53-196-2.us-west-1.compute.amazonaws.com/api/negocio/subcatnegocio";

// const baseurlProductoObtener: string = "https://ec2-52-53-196-2.us-west-1.compute.amazonaws.com/api/negocio/producto/obtener";
// const baseurlProductoAgregar: string = "https://ec2-52-53-196-2.us-west-1.compute.amazonaws.com/api/negocio/producto/agregar";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable()
export class ElstorapiProvider {


  constructor(public http: HttpClient) {

  }

  registrarUsuario(usr: User): Observable<User>
  {
    let userModel =  JSON.stringify(usr);
    return this.http.post<User>(baseurlRegistro, userModel, httpOptions)
    .pipe(
      tap((data: any) => {

      //console.log(data);
  }),
  catchError((err) => {

    throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
        })
  );
  }


  actualizarCuenta(usr: User): Observable<User>
  {
    let userModel =  JSON.stringify(usr);
    return this.http.post<User>(baseurlActualizar, userModel, httpOptions)
    .pipe(
      tap((data: any) => {

        //console.log(data);
    }),
    catchError((err) => {

      throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
          })
   );

  }
    recuperarCuenta(usr: User): Observable<User>
    {
      let userModel =  JSON.stringify(usr);
      return this.http.post<User>(baseurlRecuperar, userModel, httpOptions)
      .pipe(
        tap((data: any) => {

          //console.log(data);
      }),
      catchError((err) => {

        throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
            })
          );
    }

    inicarSesion(usr: User): Observable<User>
    {
      let userModel =  JSON.stringify(usr);
      return this.http.post<User>(baseurlLogin, userModel, httpOptions)
      .pipe(
        tap((data: any) => {

          //console.log(data);
      }),
      catchError((err) => {

        throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
            })
        );
    }

    agregarNegocio(biz: Negocio): Observable<Negocio>
    {
      let negocioModel =  JSON.stringify(biz);
      return this.http.post<Negocio>(baseurlNegocio, negocioModel, httpOptions)
      .pipe(
        tap((data: any) => {

          //console.log(data);
      }),
      catchError((err) => {

        throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
            })
        );
    }

    editarNegocio(biz: Negocio): Observable<Negocio>
    {
      let negocioModel =  JSON.stringify(biz);
      return this.http.post<Negocio>(baseurlNegocioEditar, negocioModel, httpOptions)
      .pipe(
        tap((data: any) => {

          //console.log(data);
      }),
      catchError((err) => {

        throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
            })
        );
    }

    obtenerNegocio(clientid: string): Observable<Negocio[]>
    {
      let id =  JSON.stringify(clientid);
      return this.http.post<Negocio[]>(baseurlNegocioObtener, id, httpOptions)
      .pipe(
        tap((data: any) => {

          //console.log(data);
      }),
      catchError((err) => {

        throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
          })
        );
    }

    getCatNegocio(): Observable<CatNegocio[]>
    {
      return this.http.post<CatNegocio[]>(baseurlCatNegocio, httpOptions)
      .pipe(
        tap((data: any) => {

          //console.log(data);
      }),
      catchError((err) => {

        throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
          })
        );
    }

    getSubCatNegocio(id: number) : Observable<SubCatNegocio[]>
    {
      return this.http.post<SubCatNegocio[]>(baseurlSubCatNegocio, id, httpOptions)
      .pipe(
        tap((data: any) => {

          //console.log(data);
      }),
      catchError((err) => {

        throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
          })
        );
    }

    getProductos(clientid: string) : Observable<Producto[]>
    {
      return this.http.post<SubCatNegocio[]>(baseurlProductoObtener, clientid, httpOptions)
      .pipe(
        tap((data: any) => {

          //console.log(data);
      }),
      catchError((err) => {

        throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
          })
        );
    }

    agregarProducto(prod: Producto): Observable<Producto>
    {
      let prodModel =  JSON.stringify(prod);
      debugger;
      return this.http.post<Producto>(baseurlProductoAgregar, prodModel, httpOptions)
      .pipe(
        tap((data: any) => {

          //console.log(data);
      }),
      catchError((err) => {

        throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
            })
        );
    }
}
