using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using System;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[Controller]")]
    public class PedidoController : Controller
    {
        private IPedidoRepositorio _pedidoRepositorio;
        public PedidoController(IPedidoRepositorio pedidoRepositorio)
        {
            this._pedidoRepositorio = pedidoRepositorio;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var usuariosCadastrados = _pedidoRepositorio.ObterTodos();
            if(usuariosCadastrados == null)
            {
                return BadRequest("Usuarios não cadastrados");
                
            }
            return Json(usuariosCadastrados);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Pedido pedido)
        {
            try
            {
                _pedidoRepositorio.Adicionar(pedido);
                return Ok(pedido.Id);
            } catch (Exception e)
            {
                return BadRequest(e.ToString());
            }
        }
    }
}
