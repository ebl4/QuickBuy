import { Component, OnInit } from "@angular/core";
import { ProdutoServico } from "../../servicos/produto.servico";
import { Router } from "@angular/router";
import { LojaCarrinhoCompra } from "../carrinho-compra/loja.carrinho.compra";
import { Produto } from "../../modelo/Produto";
import { Pedido } from "../../modelo/Pedido";

@Component({
    selector: "loja-efetivar",
    templateUrl: "./loja.efetivar.component.html",
    styleUrls: ["./loja.efetivar.component.css"]
})

export class LojaEfetivarComponent implements OnInit{
    public carrinhoCompras: LojaCarrinhoCompra;
    public produtos: Produto[];
    public total: number;

    ngOnInit(): void {
        this.carrinhoCompras = new LojaCarrinhoCompra();
        this.produtos = this.carrinhoCompras.obterProdutos();
    }

    public atualizarPreco(produto: Produto, quantidade: number) {
        if (!produto.precoOriginal) {
            produto.precoOriginal = produto.preco;
        }
        if (quantidade <= 0) {
            quantidade = 1;
            produto.quantidade = quantidade;
        }

        produto.preco = produto.precoOriginal * quantidade;
        this.carrinhoCompras.atualizar(this.produtos);
        this.atualizarTotal();
    }

    public remover(produto: Produto) {
        this.carrinhoCompras.removerProduto(produto);
        this.carrinhoCompras.obterProdutos();
        this.atualizarTotal();
    }

    public atualizarTotal() {
        //o reduce simula o estado (acc, produto) presente no ambiente global env - programação funcional 
        this.total = this.produtos.reduce((acc, produto) => acc + produto.preco, 0);
    }

    public efetivarCompra() {
        let pedido = new Pedido();
    }
}
