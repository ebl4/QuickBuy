import { Produto } from "./Produto";

export class ItemPedido {
  public id: number;
  public produtoId: number;
  public quantidade: number;
  public produto: Produto;
}
