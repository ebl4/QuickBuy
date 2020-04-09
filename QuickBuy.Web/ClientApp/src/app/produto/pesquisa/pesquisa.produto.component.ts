import {Component, OnInit} from "@angular/core"
import { Produto } from "../../modelo/Produto";
import { Router } from "@angular/router";
import { ProdutoServico } from "../../servicos/produto/produto.servico";

@Component({
    selector: "pesquisa-produto",
    templateUrl: "pesquisa.produto.component.html",
    styleUrls: ["./pesquisa.produto.component.css"]
})

export class PesquisaProdutoComponent implements OnInit {
    public produtos: Produto[];

    ngOnInit(): void {
    }

    constructor(private produtoServico: ProdutoServico, private router: Router) {
        this.produtoServico.obterTodosProdutos()
            .subscribe(
                produtos => {
                    this.produtos = produtos;
                },
                e => {
                    console.log(e.error);
                }
            );
    }

    public adicionarProduto() {
        this.router.navigate(['/produto']);
    }

    public excluirProduto(produto: Produto) {
        var confirmaExclusao = confirm("Deseja realmente excluir o produto selecionado?");
        if (confirmaExclusao == true) {
            this.produtoServico.deletar(produto)
                .subscribe(
                    produtos => {
                        this.produtos = produtos;
                    },
                    e => {
                        console.log(e.error);
                    }
                );
        }
    }

    public editarProduto(produto: Produto) {
        sessionStorage.setItem('produtoSession', JSON.stringify(produto));
        this.router.navigate(['/produto']);
    }

}
