import { Component, OnInit } from '@angular/core';
import { LojaCarrinhoCompra } from '../loja/carrinho-compra/loja.carrinho.compra';
import { Router } from '@angular/router';
import { UsuarioServico } from '../servicos/usuario/usuario.servico';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor(private router: Router, private usuarioServico: UsuarioServico) {

  }

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

  public usuarioLogado(): boolean {
    return this.usuarioServico.usuarioAutenticado();
  }

  public temItensCarrinhoCompra() {
    return this.carrinhoCompra.temItensCarrinhoCompra();
  }

  sair() {
    this.usuarioServico.limparSessao();
    this.router.navigate(['/']);
  }

  get usuario() {
    return this.usuarioServico.usuario;
  }
}
