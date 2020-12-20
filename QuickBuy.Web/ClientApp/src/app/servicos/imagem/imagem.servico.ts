import { Injectable, OnInit, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root"
})

export class ImagemServico implements OnInit {
  private _baseUrl: string;

  constructor(private hppt: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  ngOnInit(): void {
  }

  public enviarArquivo(arquivoSelecionado: File): Observable<> {

  }

}
