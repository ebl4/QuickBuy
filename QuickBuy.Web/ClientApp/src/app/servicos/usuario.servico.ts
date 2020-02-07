import { Injectable } from "@angular/core";
import { Usuario } from "../modelo/usuario";

@Injectable({
    providedIn: "root"
})

export class UsuarioServico {
    private baseUrl: string;
    private _usuario: Usuario;

    set usuario(usuario: Usuario) {

    }
}
