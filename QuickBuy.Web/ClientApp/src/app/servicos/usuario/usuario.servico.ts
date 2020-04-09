import { Injectable, Inject } from "@angular/core";
import { Usuario } from "../../modelo/usuario";
import { Observable } from "rxjs"
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})

export class UsuarioServico {
    private baseUrl: string;
  private _usuario: Usuario;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public verificarUsuario(usuario: Usuario): Observable<Usuario> {
    const headers = new HttpHeaders().set('content-type', 'application/json');

    var body = {
      email: usuario.email,
      senha: usuario.senha
    }

    //baseUrl é a raiz do site
    return this.http.post<Usuario>(this.baseUrl + "api/usuario/verificarUsuario", body, { headers });
  }

    set usuario(usuario: Usuario) {

    }
}
