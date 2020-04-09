import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LojaCarrinhoCompra } from "../carrinho-compra/loja.carrinho.compra";
import { Produto } from "../../modelo/Produto";
import { Pedido } from "../../modelo/Pedido";
import { ItemPedido } from "../../modelo/itemPedido";
import { PedidoServico } from "../../servicos/pedido/pedido.servico";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";

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

    constructor(private usuarioServico: UsuarioServico, private pedidoServico: PedidoServico, private router: Router) {

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
        console.log("teste");
        this.pedidoServico.efetivarCompra(this.criarPedido())
            .subscribe(
                pedidoId => {
                    console.log(pedidoId);
                    sessionStorage.setItem("pedidoId", pedidoId.toString());
                    this.produtos = [];
                    this.carrinhoCompras.limparCarrinhoCompras();
                    this.router.navigate(["/compra-realizada-sucesso"]);
                },
                e => {
                    console.log(e.error);
                },
            );
    }

    public criarPedido(): Pedido {
        let pedido = new Pedido();
        pedido.usuarioId = 1;
        pedido.cep = "30130131";
        pedido.cidade = "Belo Horizonte";
        pedido.estado = "Minas Gerais";
        pedido.dataPrevisaoEntrega = new Date();
        pedido.formaPagamentoId = 1;
        pedido.numeroEndereco = "1325";
        pedido.enderecoCompleto = "Rua Teste 1";

        this.produtos = this.carrinhoCompras.obterProdutos();
        for (let produto of this.produtos) {
            let itemPedido = new ItemPedido();
            itemPedido.produtoId = produto.id;
            if (!itemPedido.quantidade)
                itemPedido.quantidade = 1;
            itemPedido.quantidade = produto.quantidade;

            pedido.itemPedido.push(itemPedido);
        }

        return pedido;
    }
}
