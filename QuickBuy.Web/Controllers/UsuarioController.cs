using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[Controller]")]
    public class UsuarioController : Controller
    {
        private readonly IUsuarioRepositorio _usuarioRepositorio;
        private IHttpContextAccessor _httpContextAccessor;
        private IHostingEnvironment _httpHostEnviroment;
        public UsuarioController(IUsuarioRepositorio usuarioRepositorio,
                                    IHttpContextAccessor httpContextAccessor, IHostingEnvironment hostingEnvironment)
        {
            _usuarioRepositorio = usuarioRepositorio;
            _httpContextAccessor = httpContextAccessor;
            _httpHostEnviroment = hostingEnvironment;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var usuario = _usuarioRepositorio.ObterTodos();
            if(usuario == null)
            {
                return BadRequest("Usuários não encontrados");
            }
            return Json(usuario);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Usuario usuario)
        {
            try
            {
                usuario.Validate();
                if (!usuario.EhValido)
                {
                    return BadRequest(usuario.ObterMensagensValidacao());
                }
                if (usuario.Id > 0)
                {
                    _usuarioRepositorio.Atualizar(usuario);
                }
                else
                {
                    _usuarioRepositorio.Adicionar(usuario);
                }
                return Created("api/usuario", usuario);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost("VerificarUsuario")]
        public IActionResult VerificarUsuario([FromBody] Usuario usuario)
        {
            try
            {
                var usuarioRetorno = _usuarioRepositorio.Obter(usuario.Email, usuario.Senha);

                if(usuarioRetorno != null)
                    return Ok(usuarioRetorno);

                return BadRequest("Usuario ou senha inválido");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

    }
}
