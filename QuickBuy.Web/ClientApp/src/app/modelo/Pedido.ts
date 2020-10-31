import { ItemPedido } from "./itemPedido";
import { Usuario } from "./usuario";

export class Pedido {
  public id: number;
  public dataPedido: Date;
  public usuarioId: number;
  public usuario: Usuario;
  public dataPrevisaoEntrega: Date;
  public cep: string;
  public estado: string;
  public cidade: string;
  public enderecoCompleto: string;
  public numeroEndereco: string;
  public formaPagamentoId: number;
  public itemPedido: ItemPedido[];

  constructor() {
    this.dataPedido = new Date();
    this.itemPedido = [];
    this.usuario = new Usuario();
  }
}
