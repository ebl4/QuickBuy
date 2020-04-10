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

    var body = {
      email: usuario.email,
      senha: usuario.senha
    }

    //baseUrl é a raiz do site
    return this.http.post<Usuario>(this.baseUrl + "api/usuario/verificarUsuario", body, { headers: this.headers });
  }

  public cadastrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl + "api/usuario", JSON.stringify(usuario), {headers: this.headers});
  }

  public usuarioAutenticado(): boolean {
    return this._usuario != null && this._usuario.email != "" && this._usuario.senha != "";
  }

  public limparSessao() {
    sessionStorage.setItem("usuario-autenticado", "");
    this._usuario = null;
  }

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  get usuario(): Usuario {
    let usuario_json = sessionStorage.getItem("usuario-autenticado");
    this._usuario = JSON.parse(usuario_json);
    return this._usuario;
  }

  set usuario(usuario: Usuario) {
    sessionStorage.setItem("usuario-autenticado", JSON.stringify(usuario));
    this._usuario = usuario;
  }
}
