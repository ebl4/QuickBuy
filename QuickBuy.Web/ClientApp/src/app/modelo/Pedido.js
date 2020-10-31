"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
var usuario_1 = require("./usuario");
var Pedido = /** @class */ (function () {
    function Pedido() {
        this.dataPedido = new Date();
        this.itemPedido = [];
        this.usuario = new usuario_1.Usuario();
    }
    return Pedido;
}());
exports.Pedido = Pedido;
//# sourceMappingURL=Pedido.js.map