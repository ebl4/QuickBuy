import { Component, OnInit } from "@angular/core"
import { ProdutoServico } from "../../servicos/produto.servico";
import { Produto } from "../../modelo/Produto";
import { LojaCarrinhoCompra } from "../carrinho-compra/loja.carrinho.compra";
import { Router } from "@angular/router";

@Component({
    selector: "loja-app-produto",
    templateUrl: "./loja.produto.component.html",
    styleUrls: ["./loja.produto.component.css"]
})

export class LojaProdutoComponent implements OnInit {
    public produto: Produto;
    public carrinhoCompras: LojaCarrinhoCompra;

    ngOnInit(): void {
        this.carrinhoCompras = new LojaCarrinhoCompra();
        var produtoDetalhe = sessionStorage.getItem('produtoDetalhe');
        if (produtoDetalhe) {
            this.produto = JSON.parse(produtoDetalhe);
        }
    }

    constructor(private produtoServico: ProdutoServico, private router: Router) {

    }

    public comprar() {
        this.carrinhoCompras.adicionar(this.produto);
        this.router.navigate(["/loja-efetivar"]);
    }
}
