using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public class Imagem : Entidade
    {
        public int Id { get; set; }
        public byte[] Image { get; set; }

        public override void Validate()
        {
            if (Image == null)
                AdicionarObservacao("Imagem não foi informada");
        }
    }
}
