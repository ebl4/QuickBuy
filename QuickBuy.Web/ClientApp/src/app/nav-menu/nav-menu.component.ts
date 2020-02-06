import { Component, OnInit } from '@angular/core';
import { LojaCarrinhoCompra } from '../loja/carrinho-compra/loja.carrinho.compra';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

    ngOnInit(): void {
        this.carrinhoCompra = new LojaCarrinhoCompra();
    }

    isExpanded = false;
    public carrinhoCompra: LojaCarrinhoCompra;

    collapse() {
        this.isExpanded = false;
    }

    toggle() {
        this.isExpanded = !this.isExpanded;
    }

    public temItensCarrinhoCompra() {
        return this.carrinhoCompra.temItensCarrinhoCompra();
    }
}
