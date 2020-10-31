using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Contratos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[Controller]")]
    public class ImagemController : Controller
    {
        private readonly IImagemRepositorio _imagemRepositorio;

        public ImagemController(IImagemRepositorio imagemRepositorio)
        {
            this._imagemRepositorio = imagemRepositorio;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Json(_imagemRepositorio.ObterTodos());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
