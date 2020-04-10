import { Component, OnInit } from "@angular/core"
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";
import { Usuario } from "../../modelo/usuario";

@Component({
  selector: "cadastro-usuario",
  templateUrl: "./cadastro.usuario.component.html",
  styleUrls: ["./cadastro.usuario.component.css"]
})

export class CadastroUsuarioComponent implements OnInit {
  public usuario: Usuario
  constructor(private usuarioServico: UsuarioServico) {

  }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  public cadastrar() {
    alert("Nome: " + this.usuario.nome + " - Sobrenome: " + this.usuario.sobreNome);

    //this.usuarioServico.cadastrarUsuario(this.usuario)
    //  .subscribe(
    //    usuarioJson => {

    //    },
    //    error => {

    //    }
    //  );
  }
}
