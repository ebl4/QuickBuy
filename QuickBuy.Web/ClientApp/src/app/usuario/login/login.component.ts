import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelo/usuario';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {
  public usuario;
  public usuarioAutenticado: boolean;
  public usuarios = ["usuario1, usuario2, usuario3"];

  constructor() {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {

  }

  entrar() {
    if (this.usuario.email == "edbdelima@gmail.com" && this.usuario.senha == "123") {
      this.usuarioAutenticado = true;
    }
  }

}
