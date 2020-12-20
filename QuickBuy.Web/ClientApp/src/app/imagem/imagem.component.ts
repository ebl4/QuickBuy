import { Component, OnInit } from "@angular/core";
import { Imagem } from "../modelo/imagem";

@Component({
  selector: "app-imagem",
  templateUrl: "./imagem.component.html",
  styleUrls: ["./imagem.component.css"]
})

export class ImagemComponent implements OnInit {
  public imagem: Imagem;
  public arquivoSelecionado: File;
  public ativarSpinner: boolean;

    ngOnInit(): void {
        throw new Error("Method not implemented.");
  }

  constructor 

  public inputChange(files: FileList) {
    this.arquivoSelecionado = files.item(0);
    this.ativarSpinner = true;
  }

}
