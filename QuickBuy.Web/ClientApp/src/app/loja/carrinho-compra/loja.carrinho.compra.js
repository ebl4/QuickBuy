"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LojaCarrinhoCompra = /** @class */ (function () {
    function LojaCarrinhoCompra() {
        this.produtos = [];
    }
    LojaCarrinhoCompra.prototype.adicionar = function (produto) {
        var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
        if (!produtoLocalStorage) {
            // se não existir nada no localStorage, atualiza a lista e insere o produto no localStorage
            this.produtos.push(produto);
        }
        else {
            // se ja existir pelo menos um unico item armazenado na sessao(localLocalStorage)
            this.produtos = JSON.parse(produtoLocalStorage);
            this.produtos.push(produto);
        }
        localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));
    };
    LojaCarrinhoCompra.prototype.obterProdutos = function () {
        var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
        if (produtoLocalStorage)
            return JSON.parse(produtoLocalStorage);
        return this.produtos;
    };
    LojaCarrinhoCompra.prototype.removerProduto = function (produto) {
        var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
        if (produtoLocalStorage) {
            this.produtos = JSON.parse(produtoLocalStorage);
            this.produtos = this.produtos.filter(function (p) { return p.id != produto.id; });
            localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));
        }
    };
    LojaCarrinhoCompra.prototype.atualizar = function (produtos) {
        localStorage.setItem("produtoLocalStorage", JSON.stringify(produtos));
    };
    LojaCarrinhoCompra.prototype.temItensCarrinhoCompra = function () {
        var itens = this.obterProdutos();
        return (itens.length > 0);
    };
    LojaCarrinhoCompra.prototype.limparCarrinhoCompras = function () {
        localStorage.setItem("produtoLocalStorage", "");
    };
    return LojaCarrinhoCompra;
}());
exports.LojaCarrinhoCompra = LojaCarrinhoCompra;
//# sourceMappingURL=loja.carrinho.compra.js.map