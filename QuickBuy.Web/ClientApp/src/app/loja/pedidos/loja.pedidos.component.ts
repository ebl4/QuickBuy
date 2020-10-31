import { Component, OnInit } from "@angular/core"
import { Pedido } from "../../modelo/Pedido";

@Component({
  selector: "loja-pedidos",
  templateUrl: "./loja.pedidos.component.html",
  styleUrls: ["./loja.pedidos.component.css"]
})

export class LojaPedidosComponent implements OnInit {
  public pedidos: Pedido[];

  ngOnInit(): void {

  }

}
